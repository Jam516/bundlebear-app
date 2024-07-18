// import { siteConfig } from "@/config/site"

export function ShoutOut() {
    return (
        <div className="container items-center bg-black p-1">
            <p className="text-center text-m leading-loose text-green-500 font-bold">
                CONGRATS TO SAFE ON LAUNCHING THEIR MULTI-CHAIN{" "}
                <a
                    href="https://safe.global/gas-station"
                    target="_blank"
                    rel="noreferrer"
                    className="underline underline-offset-4"
                >
                    GAS STATION
                </a>
            </p>
        </div>
    );
}
