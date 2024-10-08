import { getAppData } from "@/app/actions/getAppData"
import { Metadata } from "next";
import { TabContent } from "@/components/app-tab-content"
import { AboutBlock } from "@/components/about-block"

export const metadata: Metadata = {
    title: "BundleBear App Stats",
    description: "A dashboard tracking the activity of ERC-4337 apps.",
};

export const maxDuration = 60;

export default async function AppPage({ params }: { params: { slug: string[] } }) {

    const chain = params.slug[0];
    let timeframe = params.slug[1];
    if (timeframe === undefined) {
        timeframe = "week"
    };
    const data = await getAppData({ chain, timeframe });


    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Applications</h2>
                    </div>
                    <TabContent data={data} timeframe={timeframe} chain={chain} />
                    <AboutBlock />
                </div>
            </div>
        </>
    );
};