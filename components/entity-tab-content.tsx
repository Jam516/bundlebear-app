'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import { LChart } from "@/components/line-entity";
import { TimeSelect } from "@/components/time-select";

interface EntityData {
    bundler_userops_chart: any[],
    bundler_accounts_chart: any[],
    bundler_revenue_chart: any[],
}

interface TabContentParams {
    data: EntityData;
    timeframe: string;
}

export function TabContent({ data, timeframe }: TabContentParams) {
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
            <TimeSelect />
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " UserOps Bundled"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <LChart data={data.bundler_userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} usd={false} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Revenue"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <LChart data={data.bundler_revenue_chart} xaxis={"DATE"} yaxis={"REVENUE"} usd={true} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Accounts Served"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <LChart data={data.bundler_accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} usd={false} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}