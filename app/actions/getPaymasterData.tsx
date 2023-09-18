interface PaymasterDataParams {
    chain: string;
    timeframe: string;
}

interface PaymasterData {
    leaderboard: any[],
    userops_chart: any[],
    spend_chart: any[],
}

export async function getPaymasterData({ chain, timeframe }: PaymasterDataParams): Promise<PaymasterData> {
    const response = await fetch(`https://bundlebear-api.onrender.com/paymaster?chain=${chain}&timeframe=${timeframe}`);
    // , { next: { revalidate: 30 } }
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const bundlerData: PaymasterData = await response.json();

    return bundlerData;
}