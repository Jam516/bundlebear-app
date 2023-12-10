"use client";

import {
    Select,
    SelectContent,
    SelectItem,
    SelectTrigger,
    SelectValue,
} from "@/new-york-ui/select"
import { useRouter } from 'next/navigation'
import { usePathname } from 'next/navigation'
import React, { useEffect, useState } from "react";

export function TimeSelect() {
    const router = useRouter();
    const pathname = usePathname();
    const [activeTab, setActiveTab] = useState("week");

    const handleSelect = (newValue: string) => {
        const segments = pathname.split("/");
        const pathcore = segments.slice(0, 3).join('/');
        return router.push(`${pathcore}/${newValue}`);
    };

    useEffect(() => {
        const slugTime = pathname.split("/")[3];
        if (slugTime === undefined) {
            setActiveTab("week");
        } else {
            setActiveTab(slugTime);
        }
    }, [pathname]);

    return (
        <Select onValueChange={handleSelect} value={activeTab}>
            <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Toggle Chart Settings" />
            </SelectTrigger>
            <SelectContent>
                <SelectItem value="month">Monthly Charts</SelectItem>
                <SelectItem value="week">Weekly Charts</SelectItem>
                <SelectItem value="day">Daily Charts</SelectItem>
            </SelectContent>
        </Select>
    )
}
