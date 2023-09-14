interface OverviewDataParams {
    chain: string;
    timeframe: string;
}

interface ChainData {
    deployments: { NUM_DEPLOYMENTS: number }[],
    userops: { NUM_USEROPS: number }[],
    transactions: { NUM_TXNS: number }[],
    monthly_active_accounts: any[],
    monthly_userops: any[],
    monthly_paymaster_spend: any[],
}

export async function getOverviewData({ chain, timeframe }: OverviewDataParams): Promise<ChainData> {
    const response = await fetch(`https://bundlebear-api.onrender.com/overview?chain=${chain}&timeframe=${timeframe}`);

    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const chainData: ChainData = await response.json();

    return chainData;
}