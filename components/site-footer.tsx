// import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-gray-300">
      <div className="container flex flex-col items-center justify-between gap-4 md:h-24 ">
        <p className="text-center text-sm leading-loose text-muted-foreground pt-6">
          Built by{" "}
          <a
            href="https://twitter.com/0xKofi"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            0xKofi
          </a>
          . The source code is available on{" "}
          <a
            href="https://twitter.com/0xKofi"
            target="_blank"
            rel="noreferrer"
            className="font-medium underline underline-offset-4"
          >
            GitHub
          </a>
          .
        </p>
      </div>
    </footer>
  );
}
