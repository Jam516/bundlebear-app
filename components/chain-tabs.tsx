"use client";

import { useState, useEffect } from 'react';
import { Tabs, TabsList, TabsTrigger } from "@/new-york-ui/tabs";

export function ChainTabs() {

    const [currentChain, setCurrentChain] = useState("all");
    const handleTabChange = (newValue) => {
        setCurrentChain(newValue);
    };

    return (
        <Tabs defaultValue="all" className="space-y-4" onValueChange={handleTabChange}>
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