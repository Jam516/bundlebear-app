'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import { BChart } from "@/components/bar-chart";
import { SBChart } from "@/components/stacked-bar-overview";
import { StatCard } from "@/components/stat-card";

interface ChainData {
    deployments: { NUM_DEPLOYMENTS: number }[],
    userops: { NUM_USEROPS: number }[],
    transactions: { NUM_TXNS: number }[],
    monthly_active_accounts: any[],
    monthly_userops: any[],
    monthly_paymaster_spend: any[],
}

interface TabContentParams {
    data: ChainData;
    chain: string;
    timeframe: string;
}

export function TabContent({ data, chain, timeframe }: TabContentParams) {

    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Accounts"
                    content={data.deployments[0].NUM_DEPLOYMENTS.toString()}
                    subheader="Accounts"
                    icon={
                        <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>
                    } />
                <StatCard
                    title="Total UserOps"
                    content={data.userops[0].NUM_USEROPS.toString()}
                    subheader="UserOps"
                    icon={
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    } />
                <StatCard
                    title="Total Bundle Txns"
                    content={data.transactions[0].NUM_TXNS.toString()}
                    subheader="Transactions"
                    icon={
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    } />
                <StatCard
                    title="Total Gas Covered by Paymasters"
                    content="$40,000"
                    subheader="Gas Covered"
                    icon={
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    } />
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Active Smart Accounts</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {chain != 'all' ? <BChart data={data.monthly_active_accounts} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} /> : <SBChart data={data.monthly_active_accounts} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"CHAIN"} />}
                    </CardContent>
                </Card>
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Sucessful UserOps</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {chain != 'all' ? <BChart data={data.monthly_userops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} /> : <SBChart data={data.monthly_userops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"CHAIN"} />}
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="col-span-2">
                    <CardHeader>
                        <CardTitle>Paymaster Gas Spend</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {chain != 'all' ? <BChart data={data.monthly_paymaster_spend} xaxis={"DATE"} yaxis={"GAS_SPENT"} /> : <SBChart data={data.monthly_paymaster_spend} xaxis={"DATE"} yaxis={"GAS_SPENT"} segment={"CHAIN"} />}
                    </CardContent>
                </Card>
            </div>
        </>
    );
}