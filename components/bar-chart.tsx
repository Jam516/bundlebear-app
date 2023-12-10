"use client";

import { Bar, BarChart, Tooltip, ResponsiveContainer, XAxis, YAxis, CartesianGrid } from "recharts";

interface BChartProps {
  data: {
    [key: string]: string | number;
  }[];
  xaxis: string;
  yaxis: string;
  usd: boolean;
}

export function BChart({ data, xaxis, yaxis, usd }: BChartProps) {
  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={data}>
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
        <Bar dataKey={yaxis} fill="#59adf6" radius={[4, 4, 0, 0]} />
      </BarChart>
    </ResponsiveContainer>
  );
}
