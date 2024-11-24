// import { unstable_noStore as noStore } from "next/cache";

interface EntityDataParams {
    chain: string;
    timeframe: string;
    entity: string;
}

interface EntityData {
    bundler_exists: boolean,
    bundler_userops_chart: any[],
    bundler_accounts_chart: any[],
    bundler_revenue_chart: any[],
    paymaster_exists: boolean,
    paymaster_userops_chart: any[],
    paymaster_spend_chart: any[],
    paymaster_accounts_chart: any[],
}

export async function getEntityData({ chain, timeframe, entity }: EntityDataParams): Promise<EntityData> {
    // noStore();
    const response = await fetch(`https://bundlebear-api.onrender.com/entity?chain=${chain}&timeframe=${timeframe}&entity=${entity}`, { next: { revalidate: 3600 } });
    if (!response.ok) {
        throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
    }

    const entityData: EntityData = await response.json();

    return entityData;
}