interface BundlerDataParams {
    chain: string;
    timeframe: string;
}

interface BundlerData {
    leaderboard: any[],
    userops_chart: any[],
    revenue_chart: any[],
    multi_userop_chart: any[],
    accounts_chart: any[],
}

export async function getBundlerData({ chain, timeframe }: BundlerDataParams): Promise<BundlerData> {
    const response = await fetch(`https://bundlebear-api.onrender.com/bundler?chain=${chain}&timeframe=${timeframe}`, { next: { revalidate: 600 } });
    // , { next: { revalidate: 30 } }
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const bundlerData: BundlerData = await response.json();

    return bundlerData;
}