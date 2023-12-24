'use client'
import React from "react";
import { PieChart, Pie, Cell, Tooltip, Legend } from "recharts";

type PieChartData = {
    PAYMASTER?: number;
    NO_PAYMASTER?: number;
    // Add other keys if needed
};

interface PieChartComponentProps {
    data: PieChartData[];
}

const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042'];

export function PieChartComponent({ data }: PieChartComponentProps) {
    return (
        <PieChart width={400} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label={(entry) => entry.name + ': ' + entry.value}
                outerRadius={80}
                fill="#8884d8"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Tooltip />
            <Legend />
        </PieChart>
    );
};
