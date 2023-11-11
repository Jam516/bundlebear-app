import { MainNav } from "@/components/main-nav";
import { MobileNav } from "@/components/mobile-nav";

export function SiteHeader() {
    return (
        <div className="border-b">
            <div className="hidden md:flex h-16 items-center px-4">
                <MainNav className="mx-6" />
            </div>
            <div className="flex md:hidden h-16 items-center px-4">
                <MobileNav />
            </div>
        </div>
    );
}