import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function datehandler(date: Date) {
  const day = date.getDate().toString().padStart(2, "0");
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
  const year = date.getFullYear();

  const formattedDate = `${day}-${month}-${year}`;
  return formattedDate;
}

export const extractUsername = (email: string) => {
  const atIndex = email.indexOf("@");

  if (atIndex !== -1) {
    return email.slice(0, atIndex);
  }

  // If '@' is not present, return the entire email
  return email;
};
