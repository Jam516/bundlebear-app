import type { NextPage } from "next";
import React, { useState, useEffect } from 'react';
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
import { SBChart } from "@/components/stacked-bar";
import { Logo } from "@/components/site-logo";
import { StatCard } from "@/components/stat-card";

export const metadata: Metadata = {
  title: "BundleBear",
  description: "A dashboard tracking the adoption of ERC-4337 smart accounts.",
};

function TabContent({ data, isLoading, error, chain }) {
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>Error : {error}</p>;

  return (
    <>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <StatCard
          title="Total Accounts"
          content={data.deployments[0].NUM_DEPLOYMENTS}
          subheader="Accounts"
          icon={
            <><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" /><circle cx="9" cy="7" r="4" /><path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" /></>
          } />
        <StatCard
          title="Total UserOps"
          content={data.userops[0].NUM_USEROPS}
          subheader="UserOps"
          icon={
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          } />
        <StatCard
          title="Total Bundle Txns"
          content={data.transactions[0].NUM_TXNS}
          subheader="Transactions"
          icon={
            <path d="M22 12h-4l-3 9L9 3l-3 9H2" />
          } />
        <StatCard
          title="Total Gas Covered by Paymasters"
          content="$40,000"
          subheader="Gas Covered"
          icon={
            <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
          } />
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
            {chain != 'all' ? <BChart data={data.monthly_active_accounts} xaxis={"MONTH"} yaxis={"NUM_ACCOUNTS"} /> : <SBChart data={data.monthly_active_accounts} xaxis={"MONTH"} yaxis={"NUM_ACCOUNTS"} />}
          </CardContent>
        </Card>
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Monthly Sucessful UserOps</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {chain != 'all' ? <BChart data={data.monthly_userops} xaxis={"MONTH"} yaxis={"NUM_USEROPS"} /> : <SBChart data={data.monthly_userops} xaxis={"MONTH"} yaxis={"NUM_USEROPS"} />}
          </CardContent>
        </Card>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
        <Card className="col-span-2">
          <CardHeader>
            <CardTitle>Monthly Paymaster Gas Spend</CardTitle>
          </CardHeader>
          <CardContent className="pl-2">
            {chain != 'all' ? <BChart data={data.monthly_paymaster_spend} xaxis={"MONTH"} yaxis={"GAS_SPENT"} /> : <SBChart data={data.monthly_paymaster_spend} xaxis={"MONTH"} yaxis={"GAS_SPENT"} />}
          </CardContent>
        </Card>
      </div>
    </>
  );
}

function ChainTabs() {
  const [currentTab, setCurrentTab] = useState("all");
  const [chainData, setChainData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  const handleTabChange = (newValue) => {
    // console.log(`Selected ${newValue}`);
    setCurrentTab(newValue);
  };

  useEffect(() => {
    const fetchChainData = async () => {
      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(`https://bundlebear-api.0xkofi.repl.co/overview?chain=${currentTab}`);

        if (!response.ok) {
          throw new Error(`HTTP Error: ${response.status} ${response.statusText}`);
        }

        const chainData = await response.json();
        setChainData(chainData);
      } catch (err) {
        setError(err.message);
      } finally {
        setIsLoading(false);
      }
    }

    fetchChainData();
  }, [currentTab]);

  return (
    <>
      <Tabs defaultValue="all" className="space-y-4" onValueChange={handleTabChange}>
        <TabsList>
          <TabsTrigger value="all">Cross-chain</TabsTrigger>
          <TabsTrigger value="polygon">Polygon</TabsTrigger>
          <TabsTrigger value="optimism">Optimism</TabsTrigger>
          <TabsTrigger value="arbitrum">Arbitrum</TabsTrigger>
          <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
        </TabsList>
      </Tabs>
      <TabContent data={chainData} isLoading={isLoading} error={error} chain={currentTab} />
    </>
  );
}

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
          <ChainTabs />
        </div>
      </div>
    </>
  );
};

export default Home;
