import { unstable_noStore as noStore } from "next/cache";

interface AppDataParams {
    chain: string;
    timeframe: string;
}

interface AppData {
    usage_chart: any[],
    leaderboard: any[]
}

export async function getAppData({ chain, timeframe }: AppDataParams): Promise<AppData> {
    noStore();
    const response = await fetch(`https://bundlebear-api.onrender.com/apps?chain=${chain}&timeframe=${timeframe}`);
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const bundlerData: AppData = await response.json();

    return bundlerData;
}