"use client";

import { Line, LineChart, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import moment from 'moment';

type DataEntry = {
    BUNDLER_NAME: string;
    DATE: string;
    NUM_ACCOUNTS?: number;
    NUM_BUNDLES?: number;
    [key: string]: string | number | undefined;
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

export function LChart({ data, xaxis, yaxis, segment, usd }: SBChartProps) {

    const transformData = (data: DataEntry[]) => {
        const transformed: { [date: string]: TransformedEntry } = {};

        data.forEach((entry) => {
            const formattedDate = moment(entry.DATE, 'YYYY-MM-DD').format('DD-MMM-YYYY').toUpperCase();
            if (!transformed[formattedDate]) {
                transformed[formattedDate] = {
                    DATE: formattedDate
                };
            }

            // Check if the keys exist in the entry object
            if (entry.hasOwnProperty(segment) && entry.hasOwnProperty(yaxis)) {
                const segmentKey = entry[segment] as string; // Cast to string because we know it exists
                const yAxisValue = entry[yaxis] as number; // Cast to number because we know it exists

                transformed[formattedDate][segmentKey] = yAxisValue;
            }
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
                        usd ? `$${value.toLocaleString()}` : value.toLocaleString()
                    }
                />
                <Tooltip />
                <Legend />
                <Line type="monotone" dataKey="pimlico" stroke="#7115AA" />
                <Line type="monotone" dataKey="alchemy" stroke="#118AB2" />
                <Line type="monotone" dataKey="etherspot" stroke="#FAC748" />
                <Line type="monotone" dataKey="stackup" stroke="#1D2F6F" />
                <Line type="monotone" dataKey="unipass" stroke="#B6D6CC" />
                <Line type="monotone" dataKey="candide" stroke="#F5D491" />
                <Line type="monotone" dataKey="biconomy" stroke="#FF4E17" />
                <Line type="monotone" dataKey="Unknown" stroke="#707070" />
                <Line type="monotone" dataKey="particle" stroke="#F386FF" />
            </LineChart>
        </ResponsiveContainer>
    );
}
