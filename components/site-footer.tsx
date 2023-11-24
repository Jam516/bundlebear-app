// import { siteConfig } from "@/config/site"

export function SiteFooter() {
  return (
    <footer className="py-6 md:px-8 md:py-0 border-t border-gray-300">
      <div className="container flex flex-col items-center justify-between gap-1 md:h-24 ">
        <div className="mt-4 grid gap-10 grid-cols-1 md:grid-cols-2">
          <div>
            <p className="mb-4 text-center text-base font-semibold uppercase text-muted-foreground">
              Powered By
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
              Sponsored By
            </p>
            <div className="grid gap-1 grid-cols-1 md:grid-cols-3">
              <a
                className="flex items-center justify-center col-span-1"
                href="https://ethereum.org/en/foundation/"
                target="_blank"
              >
                <img src="/ethereum-foundation-logo.png" alt="Ethereum Foundation Logo" className="h-[50px]" />
              </a>
              <a
                className="flex items-center justify-center col-span-1"
                href="https://www.pimlico.io/"
                target="_blank"
              >
                <img src="/pimlico-logo.png" alt="Pimlico Logo" className="h-[50px]" />
              </a>
              <a
                className="flex items-center justify-center col-span-1"
                href="https://www.biconomy.io/"
                target="_blank"
              >
                <img src="/biconomy-logo.png" alt="Biconomy Logo" className="h-[50px]" />
              </a>
            </div>
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
