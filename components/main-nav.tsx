"use client"

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"
import { Logo } from "@/components/site-logo";

export function MainNav({
  className,
  ...props
}: React.HTMLAttributes<HTMLElement>) {

  const pathname = usePathname();
  const segments = pathname.split("/")[1];

  return (
    <nav
      className={cn("flex items-center space-x-4 lg:space-x-6", className)}
      {...props}
    >
      <Link href="/" className="mr-6 flex items-center space-x-2">
        <Logo />
      </Link>
      <Link
        href="/"
        className={cn(
          "text-sm font-medium transition-colors hover:text-foreground/80 hover:text-primary",
          segments === "overview" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Overview
      </Link>
      <Link
        href="/bundlers/all"
        className={cn(
          "text-sm font-medium transition-colors hover:text-foreground/80 hover:text-primary",
          segments === "bundlers" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Bundlers
      </Link>
      <Link
        href="/paymasters/all"
        className={cn(
          "text-sm font-medium transition-colors hover:text-foreground/80 hover:text-primary",
          segments === "paymasters" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Paymasters
      </Link>
      <Link
        href="/deployers/all"
        className={cn(
          "text-sm font-medium transition-colors hover:text-foreground/80 hover:text-primary",
          segments === "deployers" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Account Deployers
      </Link>
      <Link
        href="/applications/all"
        className={cn(
          "text-sm font-medium transition-colors hover:text-foreground/80 hover:text-primary",
          segments === "applications" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Applications
      </Link>
    </nav>
  );
}
