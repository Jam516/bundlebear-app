import { getDeployerData } from "@/app/actions/getDeployerData"
import { Metadata } from "next";
import { TabContent } from "@/components/deployer-tab-content"

export const metadata: Metadata = {
    title: "BundleBear Account Deployer Stats",
    description: "A dashboard tracking the activity of ERC-4337 account deployers.",
};

export default async function DeployerPage({ params }: { params: { slug: string[] } }) {

    const chain = params.slug[0];
    let timeframe = params.slug[1];
    if (timeframe === undefined) {
        timeframe = "week"
    };
    const data = await getDeployerData({ chain, timeframe });

    return (
        <>
            <div className="hidden flex-col md:flex">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex items-center justify-between space-y-2">
                        <h2 className="text-3xl font-bold tracking-tight">Account Deployers</h2>
                    </div>
                    <TabContent data={data} />
                </div>
            </div>
        </>
    );
};