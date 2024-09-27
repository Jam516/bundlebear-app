"use client";

import { Bar, BarChart, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import moment from 'moment';

type DataEntry = {
    DATE: string;
    CHAIN: string;
    [key: string]: string | number;
};

interface SBChartProps {
    data: DataEntry[];
    xaxis: string;
    yaxis: string;
    segment: string;
    usd: boolean;
}

type TransformedEntry = {
    DATE: string;
    [key: string]: string | number;
};

export function SBACChart({ data, xaxis, yaxis, segment, usd }: SBChartProps) {

    const transformData = (data: DataEntry[]) => {
        const transformed: { [date: string]: TransformedEntry } = {};

        data.forEach((entry) => {
            const formattedDate = moment(entry.DATE, 'YYYY-MM-DD').format('DD-MMM-YYYY').toUpperCase();
            if (!transformed[formattedDate]) {
                transformed[formattedDate] = {
                    DATE: formattedDate
                };
            }

            transformed[formattedDate][entry[segment]] = entry[yaxis];
        });

        return Object.values(transformed);
    };

    const transformedData = transformData(data);

    return (
        <ResponsiveContainer width="100%" height={350}>
            <BarChart data={transformedData}>
                <CartesianGrid vertical={false} horizontal={true} strokeDasharray="3 3" />
                <XAxis
                    dataKey={xaxis}
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                />
                <YAxis
                    stroke="#888888"
                    fontSize={12}
                    tickLine={false}
                    axisLine={false}
                    tickFormatter={(value) =>
                        usd ? `$${value.toLocaleString()}` : value.toLocaleString()
                    }
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="01 UserOp" stackId="a" fill="#333333" />
                <Bar dataKey="02-10 UserOps" stackId="a" fill="#A982ED" />
                <Bar dataKey="More than 10 UserOps" stackId="a" fill="#D1345B" />
            </BarChart>
        </ResponsiveContainer>
    );
}
