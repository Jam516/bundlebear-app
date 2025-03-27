// import { unstable_noStore as noStore } from "next/cache";

interface OverviewDataParams {
    chain: string;
    timeframe: string;
}

interface ChainData {
    deployments: { NUM_DEPLOYMENTS: number }[],
    userops: { NUM_USEROPS: number }[],
    transactions: { NUM_TXNS: number }[],
    paymaster_spend: { GAS_SPENT: number }[],
    monthly_active_accounts: any[],
    monthly_userops: any[],
    monthly_paymaster_spend: any[],
    monthly_bundler_revenue: any[],
    retention: any[],
    // userops_by_type: any[],
    accounts_by_category: any[]
}

export async function getOverviewData({ chain, timeframe }: OverviewDataParams): Promise<ChainData> {
    // noStore();
    const response = await fetch(`https://bundlebear-api.onrender.com/overview?chain=${chain}&timeframe=${timeframe}`, { next: { revalidate: 3600 } });

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const chainData: ChainData = await response.json();

    return chainData;
}