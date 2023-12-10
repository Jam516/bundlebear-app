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
    bundler_exists: boolean,
    bundler_userops_chart: any[],
    bundler_accounts_chart: any[],
    bundler_revenue_chart: any[],
    paymaster_exists: boolean,
    paymaster_userops_chart: any[],
    paymaster_spend_chart: any[],
    paymaster_accounts_chart: any[],
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
            {data.bundler_exists && (
                <>
                    <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>{titleparam + " UserOps Bundled by Bundler"}</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <LChart data={data.bundler_userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} usd={false} />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>{titleparam + " Bundler Revenue"}</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <LChart data={data.bundler_revenue_chart} xaxis={"DATE"} yaxis={"REVENUE"} usd={true} />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>{titleparam + " Accounts Served by Bundler"}</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <LChart data={data.bundler_accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} usd={false} />
                            </CardContent>
                        </Card>
                    </div>
                </>
            )}
            {data.paymaster_exists && (
                <>
                    <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>{titleparam + " UserOps Served by Paymaster"}</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <LChart data={data.paymaster_userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} usd={false} />
                            </CardContent>
                        </Card>
                        <Card>
                            <CardHeader>
                                <CardTitle>{titleparam + " Paymaster Gas Spend"}</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <LChart data={data.paymaster_spend_chart} xaxis={"DATE"} yaxis={"GAS_SPENT"} usd={true} />
                            </CardContent>
                        </Card>
                    </div>
                    <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                        <Card>
                            <CardHeader>
                                <CardTitle>{titleparam + " Accounts Served by Paymaster"}</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <LChart data={data.paymaster_accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} usd={false} />
                            </CardContent>
                        </Card>
                    </div>
                </>
            )}
        </>
    );
}