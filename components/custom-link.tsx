import { LinkProps } from "next/link";
import Link from "next/link";

type Props = Omit<LinkProps, "href"> & {
  disabled?: boolean;
  children: React.ReactNode;
  href?: string;
  className?: string;
};

export default function CustomLink({
  disabled,
  children,
  className,
  href,
  ...props
}: Props) {
  if (disabled || !href) {
    return (
      <button className={className} disabled={disabled}>
        {children}
      </button>
    );
  }
  return (
    <Link href={href} className={className} {...props}>
      {children}
    </Link>
  );
}
