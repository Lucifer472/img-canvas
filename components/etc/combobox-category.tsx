"use client";

import { useEffect, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { Check, ChevronsUpDown } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Command, CommandGroup, CommandItem } from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Category } from "@/constant";

export function CategoryCombobox() {
  const [open, setOpen] = useState(false);
  const [value, setValue] = useState("/");

  const router = useRouter();

  const pathname = usePathname();

  const handlePageChange = (currentValue: string) => {
    router.push("/blog/" + currentValue);
  };

  useEffect(() => {
    if (pathname === "/blog") {
      setValue("/");
    }
    if (pathname === "/blog/personal") {
      setValue("personal");
    }
  }, [pathname]);

  return (
    <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild>
        <Button
          variant="outline"
          role="combobox"
          aria-expanded={open}
          className="w-[200px] justify-between"
        >
          {Category.find((f) => f.value === value)?.label
            ? Category.find((f) => f.value === value)?.label
            : "All"}
          <ChevronsUpDown className="ml-2 h-4 w-4 shrink-0 opacity-50" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandGroup>
            <CommandItem
              value={"/"}
              onSelect={(currentValue) => {
                handlePageChange(currentValue);
                setValue(currentValue);
                setOpen(false);
              }}
            >
              <Check
                className={cn(
                  "mr-2 h-4 w-4",
                  value === "/" ? "opacity-100" : "opacity-0"
                )}
              />
              All
            </CommandItem>
            {Category.map((framework) => (
              <CommandItem
                key={framework.value}
                value={framework.value}
                onSelect={(currentValue) => {
                  handlePageChange(currentValue);
                  setValue(currentValue);
                  setOpen(false);
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === framework.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {framework.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>
  );
}
