import { MainNav } from "@/components/main-nav";

export function SiteHeader() {
    return (
        <div className="border-b">
            <div className="flex h-16 items-center px-4">
                <MainNav className="mx-6" />
            </div>
        </div>
    );
}