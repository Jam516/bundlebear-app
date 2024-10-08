'use client'

import { Deployer, deployercolumns } from "@/components/columns"
import { DataTable } from "@/components/data-table"
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import { SBChart } from "@/components/stacked-bar-deployer";
import { MSChart } from "@/components/marketshare-bar-deployer";
import { TimeSelect } from "@/components/time-select";
// import { StatCard } from "@/components/stat-card";

interface DeployerData {
    leaderboard: any[],
    deployments_chart: any[],
    accounts_chart: any[],
}

interface TabContentParams {
    data: DeployerData;
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
        chainlabel = chain.charAt(0).toUpperCase() + chain.slice(1);
    }

    return (
        <>
            <div className="container mx-auto py-10">
                <DataTable columns={deployercolumns} data={data.leaderboard} entity={false} />
            </div>
            <TimeSelect />
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " Accounts Deployed"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.deployments_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"DEPLOYER_NAME"} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " Account Deployment Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.deployments_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"DEPLOYER_NAME"} />
                    </CardContent>
                </Card>
            </div>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " Active Accounts"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"FACTORY_NAME"} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{chainlabel + " " + titleparam + " Active Accounts Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.accounts_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"FACTORY_NAME"} />
                    </CardContent>
                </Card>
            </div>
        </>
    );
}