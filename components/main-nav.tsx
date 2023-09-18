"use client"

import Link from "next/link";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"
import { Logo } from "@/components/site-logo";
import Image from 'next/image';

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
      <Link href="/" className="flex items-center">
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
      <Link
        href="https://docs.google.com/spreadsheets/d/1QJEYDOr-AMD2bNAoupfjQJYJabFgdb2TRSyekdIfquM/edit#gid=0"
        className={cn(
          "text-sm font-medium transition-colors hover:text-foreground/80 hover:text-primary",
          segments === "applications" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Operator Registry
      </Link>
      <Link
        href="https://docs.google.com/spreadsheets/d/1QJEYDOr-AMD2bNAoupfjQJYJabFgdb2TRSyekdIfquM/edit#gid=0"
        className={cn(
          "text-sm font-medium transition-colors hover:text-foreground/80 hover:text-primary",
          segments === "applications" ? "text-foreground" : "text-foreground/60"
        )}
      >
        Sponsor
      </Link>
      {/* <img src="/support.png" alt="Supported by Allium and the Ethereum Foundation" className="h-8" /> */}
    </nav>
  );
}
