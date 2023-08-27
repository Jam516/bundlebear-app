import { MainNav } from "@/components/main-nav";
import { Logo } from "@/components/site-logo";

export function SiteHeader() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <div className="mx-6 flex items-center space-x-4">
                    <Logo />
                </div>
                <MainNav className="mx-6" />
            </div>
        </div>
    );
}