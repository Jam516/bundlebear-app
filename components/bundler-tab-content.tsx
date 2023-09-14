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
// import { StatCard } from "@/components/stat-card";

interface BundlerData {
    leaderboard: any[],
    userops_chart: any[],
    revenue_chart: any[],
}

interface TabContentParams {
    data: BundlerData;
}

export function TabContent({ data }: TabContentParams) {

    // console.log(data.leaderboard);

    return (
        <>
            <div className="grid gap-4 md:grid-cols-2 grid-cols-1">
                <Card>
                    <CardHeader>
                        <CardTitle>UserOps Executed</CardTitle>
                        <CardDescription>UserOps executed by bundler</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.userops_chart} xaxis={"DATE"} yaxis={"NUM_USEROPS"} segment={"BUNDLER_NAME"} />
                    </CardContent>
                </Card>
                <Card>
                    <CardHeader>
                        <CardTitle>OnChain Revenue</CardTitle>
                        <CardDescription>Revenue earned by charging a premium on UserOp gas</CardDescription>
                    </CardHeader>
                    <CardContent className="pl-2">
                        <SBChart data={data.revenue_chart} xaxis={"DATE"} yaxis={"REVENUE"} segment={"BUNDLER_NAME"} />
                    </CardContent>
                </Card>
            </div>
            <div className="container mx-auto py-10">
                <DataTable columns={bundlercolumns} data={data.leaderboard} />
            </div>
        </>
    );
}