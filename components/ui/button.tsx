import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap rounded-full text-sm font-medium transition-all focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:pointer-events-none disabled:opacity-50",
  {
    variants: {
      variant: {
        default:
          "bg-terracotta-300 text-white hover:bg-terracotta-400 shadow-[0_8px_30px_-12px_rgba(201,123,95,0.55)] hover:shadow-[0_12px_40px_-12px_rgba(201,123,95,0.7)]",
        sage:
          "bg-sage-300 text-charcoal-800 hover:bg-sage-400 hover:text-white shadow-[0_8px_30px_-14px_rgba(168,181,161,0.6)]",
        sand:
          "bg-sand-200 text-charcoal-800 hover:bg-sand-300 shadow-[0_8px_30px_-14px_rgba(230,213,195,0.7)]",
        outline:
          "border border-charcoal-700/15 bg-white/70 text-charcoal-700 backdrop-blur hover:border-terracotta-300/60 hover:bg-white hover:text-terracotta-400",
        ghost: "text-charcoal-600 hover:bg-charcoal-700/5 hover:text-charcoal-800",
        link: "text-terracotta-300 underline-offset-4 hover:underline"
      },
      size: {
        default: "h-11 px-6 py-2",
        sm: "h-9 px-4 text-xs",
        lg: "h-12 px-8 text-base",
        icon: "h-10 w-10"
      }
    },
    defaultVariants: { variant: "default", size: "default" }
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild: _asChild, ...props }, ref) => {
    return (
      <button
        className={cn(buttonVariants({ variant, size }), className)}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
