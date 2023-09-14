import { getOverviewData } from "@/app/actions/getOverviewData"
import { Metadata } from "next";
import { TabContent } from "@/components/overview-tab-content"

export const metadata: Metadata = {
  title: "BundleBear",
  description: "A dashboard tracking the adoption of ERC-4337 smart accounts.",
};

export default async function OverviewPage({ params }: { params: { slug: string[] } }) {

  const chain = params.slug[0];
  let timeframe = params.slug[1];
  if (timeframe === undefined) {
    timeframe = "week"
  };
  // console.log(timeframe);
  const data = await getOverviewData({ chain, timeframe });

  return (
    <>
      <div className="hidden flex-col md:flex">

        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
          </div>
          <TabContent data={data} chain={chain} timeframe={timeframe} />
        </div>
      </div>
    </>
  );
};
