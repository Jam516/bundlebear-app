'use client'

import { Bundler, bundlercolumns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import { SBChart } from "@/components/stacked-bar-bundler";
import { MSChart } from "@/components/marketshare-bar-bundler";
import { BChart } from "@/components/multiop-bar-chart";
import { LChart } from "@/components/line-bundler";
import { TimeSelect } from "@/components/time-select";
// import { StatCard } from "@/components/stat-card";

interface BundlerData {
    leaderboard: any[],
    userops_chart: any[],
    revenue_chart: any[],
    multi_userop_chart: any[],
    accounts_chart: any[],
    frontrun_chart: any[],
    frontrun_pct_chart: any[]
}

interface TabContentParams {
    data: BundlerData;
    timeframe: string;
    chain: string;
}

export function TabContent({ data, timeframe, chain }: TabContentParams) {

    let titleparam: string = "Weekly";
    let titleparam2: string = "Past Week";
    if (timeframe === 'week') {
        titleparam = 'Weekly';
        titleparam2 = 'Past Week';
    } else if (timeframe === 'day') {
        titleparam = 'Daily';
        titleparam2 = 'Past 24h';
    } else if (timeframe === 'month') {
        titleparam = 'Monthly';
        titleparam2 = 'Past Month';
    }

    let chainlabel: string = " "
    if (chain !== 'all') {
        chainlabel = chain.charAt(0).toUpperCase() + chain.slice(1);
    }

    return (
        <>
            <div className="container mx-auto py-10">
                <DataTable columns={bundlercolumns} data={data.leaderboard} entity={true} />
            </div>
            <TimeSelect />
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " UserOps Executed"}</CardTitle>
                        <CardDescription>UserOps executed by bundler</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"BUNDLER_NAME"} usd={false} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " UserOps Marketshare"}</CardTitle>
                        <CardDescription>UserOps executed by bundler</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"BUNDLER_NAME"} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " OnChain Revenue"}</CardTitle>
                        <CardDescription>Revenue earned by charging a premium on UserOp gas</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.revenue_chart} xaxis={"DATE"} yaxis={"REVENUE"} segment={"BUNDLER_NAME"} usd={true} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " % Multi-UserOp Bundles"}</CardTitle>
                        <CardDescription>% of bundle txns that have multiple UserOps</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <BChart data={data.multi_userop_chart} xaxis={"DATE"} yaxis={"PCT_MULTI_USEROP"} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " Active Accounts"}</CardTitle>
                        <CardDescription># of accounts that had a UserOp bundled by each bundler</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <LChart data={data.accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"BUNDLER_NAME"} usd={false} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " Bundles Txns Failed due to Frontrunning"}</CardTitle>
                        <CardDescription># of bundles that failed with AA25 nonce error or AA10 sender already constructed</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <LChart data={data.frontrun_chart} xaxis={"DATE"} yaxis={"NUM_BUNDLES"} segment={"BUNDLER_NAME"} usd={false} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " % Bundles that were frontran"}</CardTitle>
                        <CardDescription>% of bundles that failed with AA25 nonce error or AA10 sender already constructed</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <BChart data={data.frontrun_pct_chart} xaxis={"DATE"} yaxis={"PCT_FRONTRUN"} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}