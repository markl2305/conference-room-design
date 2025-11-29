import Link from "next/link";
import { ComponentProps, ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  variant?: Variant;
  className?: string;
  children: ReactNode;
};

type ButtonProps = BaseProps &
  ComponentProps<"button"> & { href?: never; asChild?: false };

type LinkProps = BaseProps &
  ComponentProps<"a"> & { href: string; asChild?: boolean };

type CTAButtonProps = ButtonProps | LinkProps;

const baseClasses =
  "inline-flex items-center justify-center rounded-xl font-semibold transition focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2";

function variantClasses(variant: Variant) {
  switch (variant) {
    case "secondary":
      return "border border-[#279A92] text-[#279A92] bg-transparent hover:bg-[#F1E7D8] focus-visible:outline-[#279A92]";
    case "ghost":
      return "text-[#279A92] hover:text-[#1f7e77] focus-visible:outline-[#279A92]";
    default:
      return "bg-[#279A92] text-white shadow-md hover:shadow-lg hover:bg-[#1f7e77] focus-visible:outline-[#279A92]";
  }
}

export default function CTAButton(props: CTAButtonProps) {
  const { variant = "primary", className, children, ...rest } = props as CTAButtonProps;
  const classes = [baseClasses, variantClasses(variant), className].filter(Boolean).join(" ");

  if ("href" in props && props.href) {
    const { href, asChild, ...linkProps } = props as LinkProps;
    if (asChild) {
      // Allow passing a Link as child if desired
      return <>{children}</>;
    }
    return (
      <Link href={href} className={classes} {...linkProps}>
        {children}
      </Link>
    );
  }

  return (
    <button className={classes} {...(rest as ButtonProps)}>
      {children}
    </button>
  );
}
