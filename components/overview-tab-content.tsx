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
import { SBACChart } from "@/components/stacked-bar-account-category";
import { StatCard } from "@/components/stat-card";
import { MSChart } from "@/components/marketshare-bar-overview";
import { MSCategoryChart } from "@/components/marketshare-bar-categories";
import { RetentionTable } from "@/components/retention-table";
import { TimeSelect } from "@/components/time-select";

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

interface TabContentParams {
    data: ChainData;
    chain: string;
    timeframe: string;
}

export function TabContent({ data, chain, timeframe }: TabContentParams) {

    let titleparam: string = "Weekly";
    if (timeframe === 'week') {
        titleparam = 'Weekly';
    } else if (timeframe === 'day') {
        titleparam = 'Daily';
    } else if (timeframe === 'month') {
        titleparam = 'Monthly';
    }

    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                    title="Total Accounts"
                    content={data.deployments[0].NUM_DEPLOYMENTS.toLocaleString()}
                    subheader="Accounts"
                    icon={
                        <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>
                    } />
                <StatCard
                    title="Total UserOps"
                    content={data.userops[0].NUM_USEROPS.toLocaleString()}
                    subheader="UserOps"
                    icon={
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    } />
                <StatCard
                    title="Total Bundle Txns"
                    content={data.transactions[0].NUM_TXNS.toLocaleString()}
                    subheader="Transactions"
                    icon={
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    } />
                <StatCard
                    title="Total Gas Covered by Paymasters"
                    content={"$" + data.paymaster_spend[0].GAS_SPENT.toLocaleString()}
                    subheader="Gas Covered"
                    icon={
                        <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    } />
            </div>
            <TimeSelect />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Active Smart Accounts"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {chain != 'all' ? <BChart data={data.monthly_active_accounts} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} usd={false} /> : <SBChart data={data.monthly_active_accounts} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"CHAIN"} usd={false} />}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Sucessful UserOps"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {chain != 'all' ? <BChart data={data.monthly_userops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} usd={false} /> : <SBChart data={data.monthly_userops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"CHAIN"} usd={false} />}
                    </CardContent>
                </Card>
            </div>
            {chain === 'all' ?
                <div className="grid gap-4 grid-cols-1  md:grid-cols-2 ">
                    <Card>
                        <CardHeader>
                            <CardTitle>{titleparam + " Active Smart Accounts Marketshare"}</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            {chain != 'all' ? <BChart data={data.monthly_active_accounts} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} usd={false} /> : <MSChart data={data.monthly_active_accounts} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"CHAIN"} />}
                        </CardContent>
                    </Card>
                    <Card>
                        <CardHeader>
                            <CardTitle>{titleparam + " Sucessful UserOps Marketshare"}</CardTitle>
                        </CardHeader>
                        <CardContent className="pl-2">
                            {chain != 'all' ? <BChart data={data.monthly_userops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} usd={false} /> : <MSChart data={data.monthly_userops} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"CHAIN"} />}
                        </CardContent>
                    </Card>
                </div>
                :
                <div className="grid gap-4 grid-cols-1  md:grid-cols-2">

                </div>
            }
            <div className="block container mx-auto py-10">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Active Accounts by Userop Quantity"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBACChart data={data.accounts_by_category} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"CATEGORY"} usd={false} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4  grid-cols-1 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Bundler Revenue"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {chain != 'all' ? <BChart data={data.monthly_bundler_revenue} xaxis={"DATE"} yaxis={"REVENUE"} usd={true} /> : <SBChart data={data.monthly_bundler_revenue} xaxis={"DATE"} yaxis={"REVENUE"} segment={"CHAIN"} usd={true} />}
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Paymaster Gas Spend"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        {chain != 'all' ? <BChart data={data.monthly_paymaster_spend} xaxis={"DATE"} yaxis={"GAS_SPENT"} usd={true} /> : <SBChart data={data.monthly_paymaster_spend} xaxis={"DATE"} yaxis={"GAS_SPENT"} segment={"CHAIN"} usd={true} />}
                    </CardContent>
                </Card>
            </div>
            <div className="hidden md:block container mx-auto py-10">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Account Retention"}</CardTitle>
                        <CardDescription>Retention of accounts segmented by the {timeframe} they became active</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <RetentionTable data={data.retention} timeframe={timeframe} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}