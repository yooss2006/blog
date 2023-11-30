"use client";

import { cn } from "@/lib/utils";
import Link, { LinkProps } from "next/link";
import React, { useEffect, useState } from "react";

type Props = LinkProps & {
  children: React.ReactNode;
  className?: string;
  linkChildren: React.ReactNode;
};

export default function HoverLink({
  children,
  href,
  className,
  linkChildren,
  ...props
}: Props) {
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);
  if (!mounted) return null;

  return (
    <div className="inline-block relative group">
      <Link href={href} className={className} {...props}>
        {linkChildren}
      </Link>
      <div className="hidden group-hover:block">{children}</div>
    </div>
  );
}
