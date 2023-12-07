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
// import { StatCard } from "@/components/stat-card";

interface DeployerData {
    leaderboard: any[],
    deployments_chart: any[],
}

interface TabContentParams {
    data: DeployerData;
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
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Accounts Deployed"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.deployments_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"DEPLOYER_NAME"} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>{titleparam + " Account Deployment Marketshare"}</CardTitle>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <MSChart data={data.deployments_chart} xaxis={"DATE"} yaxis={"NUM_ACCOUNTS"} segment={"DEPLOYER_NAME"} />
                    </CardContent>
                </Card>
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={deployercolumns} data={data.leaderboard} />
            </div>
        </>
    );
}