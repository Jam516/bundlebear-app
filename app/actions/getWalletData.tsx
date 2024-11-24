// import { unstable_noStore as noStore } from "next/cache";

interface WalletDataParams {
    chain: string;
    timeframe: string;
}

interface WalletData {
    deployments_chart: any[],
    userops_chart: any[],
    accounts_chart: any[],
}

export async function getWalletData({ chain, timeframe }: WalletDataParams): Promise<WalletData> {
    // noStore();
    const response = await fetch(`https://bundlebear-api.onrender.com/wallet?chain=${chain}&timeframe=${timeframe}`, { next: { revalidate: 3600 } });
    // , { next: { revalidate: 30 } }
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const bundlerData: WalletData = await response.json();

    return bundlerData;
}