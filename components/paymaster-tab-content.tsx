'use client'

import { Paymaster, paymastercolumns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import { SBChart } from "@/components/stacked-bar-paymaster";
import { MSChart } from "@/components/marketshare-bar-paymaster";
import { LChart } from "@/components/line-paymaster";
import { TimeSelect } from "@/components/time-select";

interface PaymasterData {
    leaderboard: any[],
    userops_chart: any[],
    spend_chart: any[],
    accounts_chart: any[],
}

interface TabContentParams {
    data: PaymasterData;
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
            <div className="container mx-auto py-10">
                <DataTable columns={paymastercolumns} data={data.leaderboard} entity={true} />
            </div>
            <TimeSelect />
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " UserOps Served"}</CardTitle>
                        <CardDescription>UserOps paid for using paymaster</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"PAYMASTER_NAME"} usd={false} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " UserOp Marketshare"}</CardTitle>
                        <CardDescription>UserOps paid for using paymaster</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"PAYMASTER_NAME"} />
                    </CardContent>
                </Card>

            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Gas Spend"}</CardTitle>
                        <CardDescription>Amount spent using paymaster to cover UserOp gas fees</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.spend_chart} xaxis={"DATE"} yaxis={"GAS_SPENT"} segment={"PAYMASTER_NAME"} usd={true} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Gas Spend Marketshare"}</CardTitle>
                        <CardDescription>Amount spent using paymaster to cover UserOp gas fees</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.spend_chart} xaxis={"DATE"} yaxis={"GAS_SPENT"} segment={"PAYMASTER_NAME"} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Active Accounts"}</CardTitle>
                        <CardDescription># of accounts that had a UserOp funded by each paymaster</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <LChart data={data.accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"PAYMASTER_NAME"} usd={false} />
                    </CardContent>
                </Card>
            </div>

        </>
    );
}