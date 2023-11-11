"use client";

import { Bar, BarChart, Tooltip, ResponsiveContainer, XAxis, YAxis } from "recharts";

interface BChartProps {
  data: {
    [key: string]: string | number;
  }[];
  xaxis: string;
  yaxis: string;
}

export function BChart({ data, xaxis, yaxis }: BChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
        <XAxis
          dataKey={xaxis}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
        />
        <YAxis
          domain={[0, 100]}
          stroke="#888888"
          fontSize={12}
          tickLine={false}
          axisLine={false}
          tickFormatter={(value) =>
            `${value.toLocaleString()}%`
          }
        />
        <Tooltip />
        <Bar dataKey={yaxis} fill="#59adf6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
