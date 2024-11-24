// import { unstable_noStore as noStore } from "next/cache";

interface PaymasterDataParams {
    chain: string;
    timeframe: string;
}

interface PaymasterData {
    leaderboard: any[],
    userops_chart: any[],
    spend_chart: any[],
    accounts_chart: any[],
    spend_type_chart: any[],
    userops_type_chart: any[],
}

export async function getPaymasterData({ chain, timeframe }: PaymasterDataParams): Promise<PaymasterData> {
    // noStore();
    const response = await fetch(`https://bundlebear-api.onrender.com/paymaster?chain=${chain}&timeframe=${timeframe}`, { next: { revalidate: 3600 } });
    // , { next: { revalidate: 30 } }
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const paymasterData: PaymasterData = await response.json();

    return paymasterData;
}