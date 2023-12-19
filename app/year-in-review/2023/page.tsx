import { Metadata } from "next";
import {
    Card,
    CardContent,
    CardDescription,
    CardHeader,
    CardTitle,
} from "@/new-york-ui/card";
import { LChart } from "@/components/line-entity";

export const metadata: Metadata = {
    title: "BundleBear Year In Review",
    description: "Annual review of the patterns and trends that shaped the ERC-4337 ecosystem",
};

export default async function YIRPage() {

    return (
        <>
            <div className="flex flex-col">
                <div className="flex-1 space-y-4 p-8 pt-6">
                    <div className="flex flex-col items-left space-y-2">
                        <p>logo with name</p>
                        <h2 className="text-3xl font-bold tracking-tight">2023 Year in Review</h2>
                    </div>
                    <div className="grid gap-4 grid-cols-2 md:grid-cols-3">
                        <Card >
                            <CardHeader>
                                <CardTitle>Users</CardTitle>
                            </CardHeader>
                            <CardContent>
                                <ul>
                                    <li>- <a href="#section11">User Operations</a></li>
                                    <li>- <a href="#section12">Accounts</a></li>
                                </ul>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle>Bundlers</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <p>TOC</p>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle>Paymasters</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <p>TOC</p>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle>Factories</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <p>TOC</p>
                            </CardContent>
                        </Card>
                        <Card >
                            <CardHeader>
                                <CardTitle>Future Trends</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-2">
                                <p>TOC</p>
                            </CardContent>
                        </Card>
                    </div>
                    <h2 className="text-2xl font-bold tracking-tight">add icon - Users</h2>
                    <div className="flex flex-col gap-4">
                        <Card id="section11">
                            <CardHeader>
                                <CardTitle className="text-xl">7.5M+ User Operations were made in 2023</CardTitle>
                            </CardHeader>
                            <CardContent >
                                <div className="flex flex-col gap-6">
                                    <p>When you use an ERC-4337 account you submit User Operations (UserOps) instead of transactions. These UserOps get grouped into bundle transactions that are executed onchain by Bundlers. Monthly UserOps rose to a peak of 2.7M in October then steadily declined to 672k in December.
                                    </p>
                                    <p>Monthly UserOps</p>
                                    <LChart data={monthly_ops} xaxis={"DATE"} yaxis={"USEROPS"} usd={false} />
                                </div>
                            </CardContent>
                        </Card>
                        <Card id="section12">
                            <CardHeader>
                                <CardTitle className="text-xl">XM accounts made a UserOp in 2023</CardTitle>
                            </CardHeader>
                            <CardContent className="pl-4">
                                <p>yyy.
                                </p>
                            </CardContent>
                        </Card>
                    </div>
                </div>
            </div>
        </>
    );
};

const monthly_ops = [{ 'DATE': '2023-03-01', 'USEROPS': 603 },
{ 'DATE': '2023-04-01', 'USEROPS': 7123 },
{ 'DATE': '2023-05-01', 'USEROPS': 12388 },
{ 'DATE': '2023-06-01', 'USEROPS': 55971 },
{ 'DATE': '2023-07-01', 'USEROPS': 458103 },
{ 'DATE': '2023-08-01', 'USEROPS': 786657 },
{ 'DATE': '2023-09-01', 'USEROPS': 884590 },
{ 'DATE': '2023-10-01', 'USEROPS': 2677380 },
{ 'DATE': '2023-11-01', 'USEROPS': 1758815 },
{ 'DATE': '2023-12-01', 'USEROPS': 720754 }]
