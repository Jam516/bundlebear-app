import "@/styles/global.css";
import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ChainTabs } from "@/components/chain-tabs";
import { TimeSelect } from "@/components/time-select";
import { MobileBlocker } from "@/components/mobile-blocker";

interface RootLayoutProps {
  children: React.ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {


  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          fontSans.variable
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="flex flex-1 space-x-4 p-8 pt-6">
            <ChainTabs />
            <TimeSelect />
          </div>
          <MobileBlocker />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
      </body>
    </html>
  );
}
