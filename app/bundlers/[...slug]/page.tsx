import { getBundlerData } from "@/app/actions/getBundlerData"
import { Metadata } from "next";
import { TabContent } from "@/components/bundler-tab-content"

export const maxDuration = 60;

export const metadata: Metadata = {
  title: "BundleBear Bundler Stats",
  description: "A dashboard tracking the activity of ERC-4337 bundlers.",
};

export default async function BundlerPage({ params }: { params: { slug: string[] } }) {

  const chain = params.slug[0];
  let timeframe = params.slug[1];
  if (timeframe === undefined) {
    timeframe = "week"
  };
  const data = await getBundlerData({ chain, timeframe });

  return (
    <>
      <div className="flex flex-col">
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Bundlers</h2>
          </div>
          <TabContent data={data} timeframe={timeframe} />
        </div>
      </div>
    </>
  );
};
