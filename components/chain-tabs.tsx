"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from "@/new-york-ui/tabs";
import { usePathname } from 'next/navigation'

export function ChainTabs() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("all");

    const handleTabChange = (newValue: string) => {
        const segments = pathname.split("/");

        if (segments[1] === 'entity') {
            return router.push(`/${segments[1]}/${newValue}/${segments[3]}/${segments[4]}`);
        } else {
            return router.push(`/${segments[1]}/${newValue}`);
        }
    };

    useEffect(() => {
        const segments = pathname.split("/");
        setActiveTab(segments[2]);
    }, [pathname]);

    const segments = pathname.split("/");
    if (segments[1] === 'research' || segments[1] === 'posts' || segments[1] === 'year-in-review' || segments[1] === 'sponsor') {
        return <div></div>;
    }

    return (
        <Tabs defaultValue="all" className="space-y-4 pt-6" onValueChange={handleTabChange} value={activeTab}>
            <TabsList>
                <TabsTrigger value="all">Cross-chain</TabsTrigger>
                <TabsTrigger value="base">Base</TabsTrigger>
                <TabsTrigger value="polygon">Polygon</TabsTrigger>
                <TabsTrigger value="arbitrum">Arbitrum</TabsTrigger>
                <TabsTrigger value="optimism">Optimism</TabsTrigger>
                <TabsTrigger value="avalanche">Avalanche</TabsTrigger>
                <TabsTrigger value="bsc">BSC</TabsTrigger>
                <TabsTrigger value="ethereum">Ethereum</TabsTrigger>

            </TabsList>
        </Tabs>
    );
}