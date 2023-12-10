"use client";

import { Line, LineChart, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";
import moment from 'moment';

type DataEntry = {
    DATE: string;
    [key: string]: string | number;
};

interface LChartProps {
    data: DataEntry[];
    xaxis: string;
    yaxis: string;
    usd: boolean;
}


export function LChart({ data, xaxis, yaxis, usd }: LChartProps) {

    const transformedData = data.map(entry => ({
        ...entry,
        DATE: moment(entry.DATE).format('DD-MMM-YYYY')
    }));

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
                {/* <Legend /> */}
                <Line type="monotone" dataKey={yaxis} stroke="#118AB2" />
            </LineChart>
        </ResponsiveContainer>
    );
}
