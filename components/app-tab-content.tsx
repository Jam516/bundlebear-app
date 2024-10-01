'use client'

import { Apps, appcolumns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import { SBChart } from "@/components/stacked-bar-apps";
import { SBOPChart } from "@/components/stacked-bar-apps2";
import { MSChart } from "@/components/marketshare-bar-apps";
import { MSOPChart } from "@/components/marketshare-bar-apps2";
import { TimeSelect } from "@/components/time-select";

interface AppData {
    usage_chart: any[],
    leaderboard: any[],
    ops_chart: any[],
    ops_paymaster_chart: any[]
}

interface TabContentParams {
    data: AppData;
    timeframe: string;
    chain: string;
}

export function TabContent({ data, timeframe, chain }: TabContentParams) {

    let titleparam: string = "Weekly";
    if (timeframe === 'week') {
        titleparam = 'Weekly';
    } else if (timeframe === 'day') {
        titleparam = 'Daily';
    } else if (timeframe === 'month') {
        titleparam = 'Monthly';
    }

    let chainlabel: string = " "
    if (chain !== 'all') {
        chainlabel = chain;
    }

    return (
        <>
            <div className="container mx-auto py-10 gap-4">
                <div className="flex flex-col gap-4 items-center">
                    <h2 className="text-2xl font-bold tracking-tight">Top 10 Apps by Total Active Accounts</h2>
                    <DataTable columns={appcolumns} data={data.leaderboard} entity={false} />
                </div>
            </div>
            <TimeSelect />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{chain + " " + titleparam + " Active Accounts"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.usage_chart} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{chain + " " + titleparam + " Account Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.usage_chart} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{chain + " " + titleparam + " Userops"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBOPChart data={data.ops_chart} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{chain + " " + titleparam + " UserOps Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSOPChart data={data.ops_chart} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{chain + " " + titleparam + " Userops with Paymaster"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBOPChart data={data.ops_chart} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{chain + " " + titleparam + " UserOps with Paymaster Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSOPChart data={data.ops_chart} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}