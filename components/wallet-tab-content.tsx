'use client'

import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import { SBChart } from "@/components/stacked-bar-wallet";
import { MSChart } from "@/components/marketshare-bar-wallet";
import { TimeSelect } from "@/components/time-select";

interface WalletData {
    deployments_chart: any[],
    userops_chart: any[],
    accounts_chart: any[],
}

interface TabContentParams {
    data: WalletData;
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
                        <CardTitle>{titleparam + " Active Accounts"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"WALLET_NAME"} usd={false} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Active Accounts Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"WALLET_NAME"} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " UserOps Executed"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"WALLET_NAME"} usd={false} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " UserOps Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"WALLET_NAME"} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Accounts Created"}</CardTitle>
                        <CardDescription>Accounts created using wallet</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.deployments_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"WALLET_NAME"} usd={false} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Account Creation Marketshare"}</CardTitle>
                        <CardDescription>Accounts created using wallet</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.deployments_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"WALLET_NAME"} />
                    </CardContent>
                </Card>

            </div>
        </>
    );
}