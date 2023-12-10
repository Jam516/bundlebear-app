import { getEntityData } from "@/app/actions/getEntityData"
import { Metadata } from "next";
import { TabContent } from "@/components/entity-tab-content"

export const metadata: Metadata = {
    title: "BundleBear Entity Stats",
    description: "A dashboard tracking the activity of ERC-4337 bundler/paymaster/wallet entities.",
};

export default async function EntityPage({ params }: { params: { slug: string[] } }) {

    const chain = params.slug[0];
    let timeframe = params.slug[1];
    if (timeframe === undefined) {
        timeframe = "week"
    };
    const entity = params.slug[2];
    const data = await getEntityData({ chain, timeframe, entity });

    function capitalizeFirstLetter(string: string) {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">{capitalizeFirstLetter(entity)}</h2>
                    </div>
                    <TabContent data={data} timeframe={timeframe} />
                </div>
            </div>
        </>
    );
};