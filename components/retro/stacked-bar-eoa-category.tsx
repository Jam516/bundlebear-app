"use client";

import { Bar, BarChart, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import moment from 'moment';

type DataEntry = {
    MONTH: string;
    CATEGORY: string;
    [key: string]: string | number;
};

interface SBChartProps {
    data: any[];
    xaxis: string;
    yaxis: string;
    segment: string;
}

type TransformedEntry = {
    DATE: string;
    [key: string]: string | number;
};

export function SBECChart({ data, xaxis, yaxis, segment }: SBChartProps) {

    const transformData = (data: DataEntry[]) => {
        const transformed: { [date: string]: TransformedEntry } = {};

        data.forEach((entry) => {
            const formattedDate = moment(entry.MONTH, 'YYYY-MM-DD').format('DD-MMM-YYYY').toUpperCase();
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
    // console.log(transformedData);

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
                    tickFormatter={(value) => `${value}`}
                />
                <Tooltip />
                <Legend />
                <Bar dataKey="01 transaction" stackId="a" fill="#118AB2" />
                <Bar dataKey="More than 1 transaction" stackId="a" fill="#E45756" />
            </BarChart>
        </ResponsiveContainer>
    );
}
