import { Metadata } from "next";
import {
    Layers
} from "lucide-react"

export const metadata: Metadata = {
    title: "Sponsor BundleBear",
    description: "Become a sponsor to BundleBear",
};

export default async function SPage() {

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6 md:w-3/5 md:mx-auto ">
                    <div className="flex flex-col space-y-2 pb-6">
                        <h2 className="text-5xl font-bold tracking-tight">Become a BundleBear Sponsor</h2>
                        <p>
                            BundleBear is a free, opensource dashboard that delivers data-driven insight into the adoption of <a href="https://www.erc4337.io/" className="text-blue-500 underline">ERC-4337</a> wallets.
                        </p>
                        <p>
                            Your sponsorship supports BundleBear&apos;s development. The funds collected are used to support the development work and hosting fees for the site. My work is only sustainable thanks to the generous financial backing of BundleBear sponsors.
                        </p>
                    </div>
                    <div id="section1" className="flex flex-row gap-2 items-center">
                        <Layers />
                        <h2 className="text-3xl font-bold tracking-tight">Tiers</h2>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 id="section11" className="text-xl font-bold tracking-tight pt-6">Small Enterprise</h2>
                        <p>$400 a month</p>
                        <p>Are you a small company or startup? Recommended monthly contribution for companies with fewer than 10 employees.</p>
                        <li>Your company&apos;s logo placed in BundleBear&apos;s footer</li>
                        <li>A private telegram chat where we can discuss any ERC-4337 data analysis questions</li>
                        <li>Issues and feature requests you bring up will be prioritized</li>
                    </div>
                    <div className="flex flex-col gap-4">
                        <h2 id="section11" className="text-xl font-bold tracking-tight pt-6">Large Enterprise</h2>
                        <p>$2,000 a month</p>
                        <p>Are you a large company or startup? Recommended monthly contribution for companies with 10 or more employees.</p>
                        <li>Read-access to the BundleBear database via Snowflake Share</li>
                        <li>Your company&apos;s logo placed in BundleBear&apos;s footer</li>
                        <li>A private telegram chat where we can discuss any ERC-4337 data analysis questions</li>
                        <li>Issues and feature requests you bring up will be prioritized</li>
                    </div>
                </div>
            </div>
        </>
    )
}
