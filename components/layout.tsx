// import "../styles/globals.css";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  return (
    <div
      className={cn(
        "min-h-screen bg-background font-sans antialiased",
        fontSans.variable
      )}
    >
      <div className="relative flex min-h-screen flex-col">
        <div className="flex-1">{children}</div>
        <SiteFooter />
      </div>
    </div>
  );
}
