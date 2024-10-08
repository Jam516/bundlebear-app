import { getPaymasterData } from "@/app/actions/getPaymasterData"
import { Metadata } from "next";
import { TabContent } from "@/components/paymaster-tab-content"
import { AboutBlock } from "@/components/about-block"

export const metadata: Metadata = {
    title: "BundleBear Paymaster Stats",
    description: "A dashboard tracking the activity of ERC-4337 paymasters.",
};

export const maxDuration = 60;

export default async function PaymasterPage({ params }: { params: { slug: string[] } }) {

    const chain = params.slug[0];
    let timeframe = params.slug[1];
    if (timeframe === undefined) {
        timeframe = "week"
    };
    const data = await getPaymasterData({ chain, timeframe });

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Paymasters</h2>
                    </div>
                    <TabContent data={data} timeframe={timeframe} chain={chain} />
                    <AboutBlock />
                </div>
            </div>
        </>
    );
};