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
import { MSChart } from "@/components/marketshare-bar-apps";
import { TimeSelect } from "@/components/time-select";

interface AppData {
    usage_chart: any[],
    leaderboard: any[]
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
            <div className="container mx-auto py-10">
                <DataTable columns={appcolumns} data={data.leaderboard} entity={false} />
            </div>
            <TimeSelect />
            <div className="grid gap-4 grid-cols-1 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " " + chain + " Active Accounts"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.usage_chart} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " " + chain + " Account Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.usage_chart} />
                    </CardContent>
                </Card>
            </div>

        </>
    );
}