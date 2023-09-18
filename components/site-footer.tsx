// import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-gray-300">
      <div className="container flex flex-col items-center justify-between gap-1 md:h-24 ">
        <div className="mt-4 flex flex-row gap-20">
          <div>
            <p className="mb-4 text-center text-base font-semibold uppercase text-muted-foreground">
              Data Infrastructure Partners
            </p>
            <a
              className="flex items-center justify-center"
              href="https://www.allium.so/"
              target="_blank"
            >
              <img src="/allium-logo.png" alt="Allium Logo" className="h-[50px]" />
            </a>
          </div>
          <div>
            <p className="mb-4 text-center text-base font-semibold uppercase text-muted-foreground">
              Enterprise Sponsors
            </p>
            <a
              className="flex items-center justify-center"
              href="https://ethereum.org/en/foundation/"
              target="_blank"
            >
              <img src="/ethereum-foundation-logo.png" alt="Ethereum Foundation Logo" className="h-[50px]" />
            </a>
          </div>
        </div>
        <p className="text-center text-m leading-loose text-muted-foreground pt-6">
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
            href="https://github.com/Jam516/bundlebear-app"
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
