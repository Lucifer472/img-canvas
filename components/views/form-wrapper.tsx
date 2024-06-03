import { cn } from "@/lib/utils";
import { Poppins } from "next/font/google";

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});

interface FormWrapperProps {
  title: string;
  label: string;
  children: React.ReactNode;
  footer?: React.ReactNode;
}

const FormWrapper = ({ title, label, children, footer }: FormWrapperProps) => {
  return (
    <Card className="border border-slate-800 rounded-md">
      <CardHeader className="border-b border-gray-300">
        <CardTitle
          className={cn("font-semibold text-lg md:text-xl", poppins.className)}
        >
          {title}
        </CardTitle>
        <CardDescription className="text-sm">{label}</CardDescription>
      </CardHeader>
      <CardContent className="mt-4">{children}</CardContent>
      {footer && <CardFooter>{footer}</CardFooter>}
    </Card>
  );
};

export default FormWrapper;
