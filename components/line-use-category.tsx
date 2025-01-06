"use client";

import { Line, LineChart, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import moment from 'moment';

type DataEntry = {
    DATE: string;
    SENDER_TYPE: string;
    ACTIVE_ACCOUNTS: number;
    [key: string]: string | number;
};

interface SBChartProps {
    data: DataEntry[];
    xaxis: string;
    yaxis: string;
    segment: string;
    pct: boolean;
}

type TransformedEntry = {
    DATE: string;
    [key: string]: string | number;
};

export function LCChart({ data, xaxis, yaxis, segment, pct }: SBChartProps) {

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
    // console.log(transformedData);

    return (
        <ResponsiveContainer width="100%" height={350}>
            <LineChart data={transformedData}>
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
                        pct ? `${value.toLocaleString()}%` : value.toLocaleString()
                    }
                />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="single-use" stroke="#56569B" />
                <Line type="monotone" dataKey="repeat-use" stroke="#F4603E" />
            </LineChart>
        </ResponsiveContainer>
    );
}
