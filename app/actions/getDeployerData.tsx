import { unstable_noStore as noStore } from "next/cache";

interface DeployerDataParams {
    chain: string;
    timeframe: string;
}

interface DeployerData {
    leaderboard: any[],
    deployments_chart: any[],
}

export async function getDeployerData({ chain, timeframe }: DeployerDataParams): Promise<DeployerData> {
    noStore();
    const response = await fetch(`https://bundlebear-api.onrender.com/account_deployer?chain=${chain}&timeframe=${timeframe}`);
    // , { next: { revalidate: 30 } }
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const bundlerData: DeployerData = await response.json();

    return bundlerData;
}