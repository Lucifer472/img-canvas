"use client";

import { useCallback, useEffect, useRef, useState } from "react";

interface ImageCanvasProps {
  img1: string;
  img2: string | null;
  setFile: (value: any) => void;
  cw: number;
  scale: number;
  setScale: (value: number) => void;
  position: { x: number; y: number };
  setPosition: (value: any) => void;
}

const ImageCanvas = ({
  img1,
  img2,
  setFile,
  cw,
  scale,
  setScale,
  position,
  setPosition,
}: ImageCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [frameImage, setFrameImage] = useState<HTMLImageElement | null>(null);
  const [userImage, setUserImage] = useState<HTMLImageElement | null>(null);
  const [dragging, setDragging] = useState(false);
  const [startPosition, setStartPosition] = useState({ x: 0, y: 0 });
  const [pinchDistance, setPinchDistance] = useState<number | null>(null);

  const [width, setWidth] = useState(500);
  const [height, setHeight] = useState(500);

  const [windowWidth, setWindowWidth] = useState(1000);
  const [initialRender, setInitialRender] = useState(true);

  const handleResize = () => {
    setWindowWidth(window.innerWidth);
  };

  useEffect(() => {
    setWindowWidth(window.innerWidth);
  }, []);

  useEffect(() => {
    // Set up event listener on component mount
    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  useEffect(() => {
    if (windowWidth < 640) {
      setWidth(450);
      setHeight(450);
    }

    if (windowWidth < 460) {
      setWidth(350);
      setHeight(350);
    }

    if (windowWidth < 360) {
      setWidth(300);
      setHeight(300);
    }
  }, [windowWidth]);

  useEffect(() => {
    const picture1 = new window.Image();
    picture1.crossOrigin = "anonymous";
    picture1.src = img1;
    picture1.onload = () => {
      setFrameImage(picture1);
    };
  }, [img1]);

  useEffect(() => {
    const picture2 = new window.Image();
    picture2.crossOrigin = "anonymous";
    if (img2) {
      picture2.src = img2;
      picture2.onload = () => {
        setUserImage(picture2);
      };
    }
  }, [img2]);

  useEffect(() => {
    if (frameImage) {
      const canvas = canvasRef.current;
      const ctx = canvas?.getContext("2d");

      if (canvas && ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        if (userImage) {
          let drawWidth = initialRender
            ? userImage.width / 2
            : userImage.width * scale;
          let drawHeight = initialRender
            ? userImage.height / 2
            : userImage.height * scale;

          setInitialRender(false);
          // Save the current state of the context
          ctx.save();

          // Translate the context to the center of the image
          ctx.translate(
            position.x + drawWidth / 2,
            position.y + drawHeight / 2
          );

          // Rotate the context by 15 degrees
          ctx.rotate((cw * Math.PI) / 180);

          // Draw the rotated user image with calculated dimensions and position
          ctx.drawImage(
            userImage,
            -drawWidth / 2,
            -drawHeight / 2,
            drawWidth,
            drawHeight
          );

          // Restore the context to its original state
          ctx.restore();
        }

        ctx.globalAlpha = 0.5;
        // Draw the frame image
        ctx.drawImage(frameImage, 0, 0, canvas.width, canvas.height);
        ctx.globalAlpha = 1;

        setTimeout(() => {
          // Draw the frame image
          ctx.drawImage(frameImage, 0, 0, canvas.width, canvas.height);
        }, 1000);

        setFile(canvas);
      }
    }
  }, [frameImage, userImage, scale, position, setFile, cw, initialRender]);

  const handleMouseDown = useCallback((e: React.MouseEvent) => {
    setDragging(true);
    setStartPosition({ x: e.clientX, y: e.clientY });
  }, []);

  const handleMouseMove = useCallback(
    (e: React.MouseEvent) => {
      if (!dragging) return;

      const deltaX = e.clientX - startPosition.x;
      const deltaY = e.clientY - startPosition.y;

      setPosition((prevPosition: any) => ({
        x: prevPosition.x + deltaX,
        y: prevPosition.y + deltaY,
      }));

      setStartPosition({ x: e.clientX, y: e.clientY });
    },
    [dragging, startPosition, setPosition]
  );

  const handleMouseUp = useCallback(() => {
    setDragging(false);
  }, []);

  const handleWheel = useCallback(
    (e: React.WheelEvent) => {
      e.preventDefault();
      // Check if the mouse is over the canvas
      const canvas = canvasRef.current;
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
    const canvas = canvasRef.current;

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
      setDragging(true);
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
      if (e.touches.length === 1 && dragging) {
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
        const scaleFactor = distance / (pinchDistance * 8);
        // @ts-ignore
        setScale((prevScale) => prevScale * scaleFactor);

        // Update the pinch distance for the next move event
        setPinchDistance(distance);
      }
    },
    [dragging, startPosition, pinchDistance, setPosition, setScale]
  );

  const handleTouchEnd = useCallback(() => {
    setDragging(false);
    setPinchDistance(null);
  }, []);

  useEffect(() => {
    const canvas = canvasRef.current;

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

  return (
    <div
      style={{ position: "relative" }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
      onWheel={handleWheel}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
      onTouchEnd={handleTouchEnd}
    >
      <canvas
        ref={canvasRef}
        width={width}
        height={height}
        className="border-dashed border-2 border-black rounded-md cursor-move"
      />
    </div>
  );
};

export default ImageCanvas;
