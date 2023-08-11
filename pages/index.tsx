import type { NextPage } from "next";
import { Metadata } from "next";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/new-york-ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/new-york-ui/tabs";
import { MainNav } from "@/components/main-nav";
import { BChart } from "@/components/bar-chart";
import { RecentSales } from "@/components/recent-sales";
import { Logo } from "@/components/site-logo";
import { StatCard } from "@/components/stat-card";

export const metadata: Metadata = {
  title: "BundleBear",
  description: "A dashboard tracking the adoption of ERC-4337 smart accounts.",
};

const Home: NextPage = () => {
  return (
    <>
      <div className="md:hidden">
        <Image
          src="/examples/dashboard-light.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="block dark:hidden"
        />
        <Image
          src="/examples/dashboard-dark.png"
          width={1280}
          height={866}
          alt="Dashboard"
          className="hidden dark:block"
        />
      </div>
      <div className="hidden flex-col md:flex">
        <div className="border-b">
          <div className="flex h-16 items-center px-4">
            <div className="mx-6 flex items-center space-x-4">
              <Logo />
            </div>
            <MainNav className="mx-6" />
          </div>
        </div>
        <div className="flex-1 space-y-4 p-8 pt-6">
          <div className="flex items-center justify-between space-y-2">
            <h2 className="text-3xl font-bold tracking-tight">Overview</h2>
          </div>
          <Tabs defaultValue="polygon" className="space-y-4">
            <TabsList>
              <TabsTrigger value="polygon">Polygon</TabsTrigger>
              <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
            </TabsList>
            <TabsContent value="polygon" className="space-y-4">
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <StatCard
                  title="Total Accounts"
                  content="422,531"
                  subheader="Accounts"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                      <circle cx="9" cy="7" r="4" />
                      <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                    </svg>
                  }
                />
                <StatCard
                  title="Total UserOps"
                  content="674,862"
                  subheader="UserOps"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  }
                />
                <StatCard
                  title="Total Bundle Txns"
                  content="668,000"
                  subheader="Transactions"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
                    </svg>
                  }
                />
                <StatCard
                  title="Total Gas Covered by Paymasters"
                  content="$40,000"
                  subheader="Gas Covered"
                  icon={
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      className="h-4 w-4 text-muted-foreground"
                    >
                      <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
                    </svg>
                  }
                />
              </div>
              <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Monthly Active Smart Accounts</CardTitle>
                    <CardDescription>
                      Made at least one succesful UserOp that month
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BChart />
                  </CardContent>
                </Card>
                <Card className="col-span-2">
                  <CardHeader>
                    <CardTitle>Monthly Sucessful UserOps</CardTitle>
                  </CardHeader>
                  <CardContent className="pl-2">
                    <BChart />
                  </CardContent>
                </Card>
              </div>
            </TabsContent>
            <TabsContent value="ethereum" className="space-y-4">
              <p>Coming Soon</p>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </>
  );
};

export default Home;
