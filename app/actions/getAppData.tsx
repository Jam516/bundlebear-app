interface AppDataParams {
    chain: string;
    timeframe: string;
}

interface AppData {
    usage_chart: any[],
    leaderboard: any[]
}

export async function getAppData({ chain, timeframe }: AppDataParams): Promise<AppData> {
    const response = await fetch(`https://bundlebear-api.onrender.com/apps?chain=${chain}&timeframe=${timeframe}`, { next: { revalidate: 600 } });
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const bundlerData: AppData = await response.json();

    return bundlerData;
}