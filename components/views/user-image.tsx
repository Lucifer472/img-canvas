"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import Image from "next/image";

interface UserImageProps {
  isDragging: boolean;
  setIsDragging: (v: boolean) => void;
  setReduceOp: (v: boolean) => void;
  rotation: number;
  img: string | null;
}

export const UserImage = ({
  isDragging,
  setIsDragging,
  setReduceOp,
  rotation,
  img,
}: UserImageProps) => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [pinchDistance, setPinchDistance] = useState<number | null>(null);
  const [scale, setScale] = useState(1);

  const imgRef = useRef<HTMLCanvasElement | null>(null);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setIsDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!isDragging) return;

      const deltaX = e.clientX - startPosition.x;
      const deltaY = e.clientY - startPosition.y;

      setPosition((prevPosition: any) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));

      setStartPosition({ x: e.clientX, y: e.clientY });
    },
    [isDragging, startPosition, setPosition]
  );

  const handleMouseUp = useCallback(() => {
    setIsDragging(false);
  }, []);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      // Check if the mouse is over the canvas
      const canvas = imgRef.current;
      if (canvas) {
        const rect = canvas.getBoundingClientRect();
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        if (
          mouseX >= 0 &&
          mouseX <= canvas.width &&
          mouseY >= 0 &&
          mouseY <= canvas.height
        ) {
          // Mouse is over the canvas, handle scaling
          const scaleFactor = e.deltaY > 0 ? 1.1 : 0.9;
          // @ts-ignore
          setScale((prevScale: number) => prevScale * scaleFactor);
        } else {
          // Mouse is outside the canvas, let the window scroll
          window.scrollBy(0, e.deltaY);
        }
      }
    },
    [setScale]
  );

  useEffect(() => {
    setReduceOp(true);
    setTimeout(() => {
      setReduceOp(false);
    }, 1000);
  }, [scale, rotation]);

  useEffect(() => {
    const canvas = imgRef.current;

    const handleMouseDownEvent = (e: MouseEvent) => handleMouseDown(e as any);
    const handleMouseMoveEvent = (e: MouseEvent) => handleMouseMove(e as any);
    const handleMouseUpEvent = () => handleMouseUp();
    const handleWheelEvent = (e: WheelEvent) => handleWheel(e as any);

    if (canvas) {
      canvas.addEventListener("mousedown", handleMouseDownEvent);
      canvas.addEventListener("mousemove", handleMouseMoveEvent);
      window.addEventListener("mouseup", handleMouseUpEvent);
      canvas.addEventListener("wheel", handleWheelEvent);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("mousedown", handleMouseDownEvent);
        canvas.removeEventListener("mousemove", handleMouseMoveEvent);
        window.removeEventListener("mouseup", handleMouseUpEvent);
        canvas.removeEventListener("wheel", handleWheelEvent);
      }
    };
  }, [handleMouseDown, handleMouseMove, handleMouseUp, handleWheel]);

  const handleTouchStart = useCallback((e: React.TouchEvent) => {
    if (e.touches.length === 1) {
      // Single touch, handle like mouse down
      const touch = e.touches[0];
      setIsDragging(true);
      setStartPosition({ x: touch.clientX, y: touch.clientY });
    } else if (e.touches.length === 2) {
      // Two touches, calculate initial pinch distance for scaling
      const touch1 = e.touches[0];
      const touch2 = e.touches[1];
      const distance = Math.hypot(
        touch2.clientX - touch1.clientX,
        touch2.clientY - touch1.clientY
      );
      setPinchDistance(distance);
    }
  }, []);

  const handleTouchMove = useCallback(
    (e: React.TouchEvent) => {
      e.preventDefault();
      if (e.touches.length === 1 && isDragging) {
        // Single touch, handle like mouse move
        const touch = e.touches[0];
        const deltaX = touch.clientX - startPosition.x;
        const deltaY = touch.clientY - startPosition.y;

        // @ts-ignore
        setPosition((prevPosition) => ({
          x: prevPosition.x + deltaX,
          y: prevPosition.y + deltaY,
        }));

        setStartPosition({ x: touch.clientX, y: touch.clientY });
      } else if (e.touches.length === 2 && pinchDistance !== null) {
        // Two touches, calculate pinch distance for scaling
        const touch1 = e.touches[0];
        const touch2 = e.touches[1];
        const distance = Math.hypot(
          touch2.clientX - touch1.clientX,
          touch2.clientY - touch1.clientY
        );

        // Calculate the pinch scale factor based on the initial and current pinch distances
        const scaleFactor = distance / pinchDistance;
        // @ts-ignore
        setScale((prevScale) => prevScale * scaleFactor);

        // Update the pinch distance for the next move event
        setPinchDistance(distance);
      }
    },
    [isDragging, startPosition, pinchDistance, setPosition, setScale]
  );

  const handleTouchEnd = useCallback(() => {
    setIsDragging(false);
    setPinchDistance(null);
  }, []);

  useEffect(() => {
    const canvas = imgRef.current;

    const handleTouchStartEvent = (e: TouchEvent) => handleTouchStart(e as any);
    const handleTouchMoveEvent = (e: TouchEvent) => handleTouchMove(e as any);
    const handleTouchEndEvent = () => handleTouchEnd();

    if (canvas) {
      canvas.addEventListener("touchstart", handleTouchStartEvent);
      canvas.addEventListener("touchmove", handleTouchMoveEvent);
      window.addEventListener("touchend", handleTouchEndEvent);
    }

    return () => {
      if (canvas) {
        canvas.removeEventListener("touchstart", handleTouchStartEvent);
        canvas.removeEventListener("touchmove", handleTouchMoveEvent);
        window.removeEventListener("touchend", handleTouchEndEvent);
      }
    };
  }, [handleTouchStart, handleTouchMove, handleTouchEnd]);

  if (!img) return null;

  return (
    <Image
      ref={imgRef as any}
      src={img}
      alt="Image"
      fill
      className="object-contain"
      style={{
        transform: `translate(${position.x}px, ${position.y}px) rotate(${rotation}deg) scale(${scale})`,
        cursor: isDragging ? "grabbing" : "grab",
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    />
  );
};
