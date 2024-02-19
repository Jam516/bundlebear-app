import "./global.css";
import { Metadata } from "next"
// import { fontSans } from "@/lib/fonts";
import { cn } from "@/lib/utils";
import { SiteFooter } from "@/components/site-footer";
import { SiteHeader } from "@/components/site-header";
import { ChainTabs } from "@/components/chain-tabs";
import { TimeSelect } from "@/components/time-select";
import { MobileBlocker } from "@/components/mobile-blocker";
import { Analytics } from '@vercel/analytics/react';

export const metadata: Metadata = {
  title: {
    default: "BundleBear",
    template: `%s - ERC4337 Data`,
  },
  description: "ERC4337 Data",
  keywords: [
    "ERC4337",
    "smart accounts",
    "account abstraction",
    "smart contract wallets",
    "crypto wallet",
  ],
  authors: [
    {
      name: "0xKofi",
      url: "https://0xkofi.com",
    },
  ],
  creator: "0xKofi",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://www.bundlebear.com",
    title: "BundleBear",
    description: "ERC4337 Data Analytics",
    siteName: "BundleBear",
    images: [
      {
        url: "https://i.imgur.com/v4tp3ws.png",
        width: 1200,
        height: 630,
        alt: "BundleBear",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BundleBear",
    description: "Open and transparent ERC4337 Data",
    images: ["https://i.imgur.com/v4tp3ws.png"],
    creator: "@0xKofi",
  },
}

interface RootLayoutProps {
  children: React.ReactNode;
}

export const revalidate = 600

export default function RootLayout({ children }: RootLayoutProps) {


  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased"
        )}
      >
        <div className="relative flex min-h-screen flex-col">
          <SiteHeader />
          <div className="hidden md:flex flex-1 space-x-4 pl-8 ">
            <ChainTabs />
            {/* <TimeSelect /> */}
          </div>
          {/* <MobileBlocker /> */}
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </div>
        <Analytics />
      </body>
    </html>
  );
}
