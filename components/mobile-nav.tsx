"use client"
import {
    BarChart2,
    Layers,
    Coins,
    Factory,
    LayoutPanelLeft,
    FileText,
    Menu,
} from "lucide-react"
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation"
import { Button } from "@/components/button"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/dropdown-menu"
import { Logo } from "@/components/site-logo";
import Link from "next/link";

export function MobileNav() {

    const pathname = usePathname();
    const segments = pathname.split("/")[1];

    return (
        <div className="flex w-full justify-between ">
            <Logo />
            <div className="px-16">
                <DropdownMenu >
                    <DropdownMenuTrigger asChild>
                        <Menu className="mr-2 h-8 w-8" />
                    </DropdownMenuTrigger>

                    <DropdownMenuContent className="w-56">

                        <DropdownMenuItem>
                            <BarChart2 className="mr-2 h-4 w-4" />
                            <Link
                                href="/"
                                className={cn(
                                    segments === "overview" ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                Overview
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Layers className="mr-2 h-4 w-4" />
                            <Link
                                href="/bundlers/all"
                                className={cn(
                                    segments === "bundlers" ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                Bundlers
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Coins className="mr-2 h-4 w-4" />
                            <Link
                                href="/paymasters/all"
                                className={cn(
                                    segments === "paymasters" ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                Paymasters
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <Factory className="mr-2 h-4 w-4" />
                            <Link
                                href="/factories/all"
                                className={cn(
                                    segments === "factories" ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                Account Factories
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <LayoutPanelLeft className="mr-2 h-4 w-4" />
                            <Link
                                href="/apps/all"
                                className={cn(
                                    segments === "applications" ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                Apps
                            </Link>
                        </DropdownMenuItem>
                        <DropdownMenuItem>
                            <FileText className="mr-2 h-4 w-4" />
                            <Link
                                href="https://docs.google.com/spreadsheets/d/1QJEYDOr-AMD2bNAoupfjQJYJabFgdb2TRSyekdIfquM/edit#gid=0"
                                className={cn(
                                    segments === "applications" ? "text-foreground" : "text-foreground/60"
                                )}
                            >
                                Operator Registry
                            </Link>
                        </DropdownMenuItem>

                    </DropdownMenuContent>
                </DropdownMenu>
            </div>
        </div>
    )
}
