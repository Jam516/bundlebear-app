"use client";

import React, { useEffect, useState } from "react";
import { useRouter } from 'next/navigation'
import { Tabs, TabsList, TabsTrigger } from "@/new-york-ui/tabs";
// import { useParams } from 'next/navigation'
import { usePathname } from 'next/navigation'

export function ChainTabs() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("all");

    const handleTabChange = (newValue) => {
        const segments = pathname.split("/");
        return router.push(`/${segments[1]}/${newValue}`);
    };

    useEffect(() => {
        const segments = pathname.split("/");
        setActiveTab(segments[2]);
    }, [pathname]);

    return (
        <Tabs defaultValue="all" className="space-y-4" onValueChange={handleTabChange} value={activeTab}>
            <TabsList>
                <TabsTrigger value="all">Cross-chain</TabsTrigger>
                <TabsTrigger value="polygon">Polygon</TabsTrigger>
                <TabsTrigger value="optimism">Optimism</TabsTrigger>
                <TabsTrigger value="arbitrum">Arbitrum</TabsTrigger>
                <TabsTrigger value="ethereum">Ethereum</TabsTrigger>
            </TabsList>
        </Tabs>
    );
}