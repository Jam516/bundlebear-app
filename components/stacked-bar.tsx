"use client";

import { Bar, BarChart, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";

export function SBChart({ data, xaxis, yaxis }) {

  const transformData = (data) => {
    const transformed = {};

    data.forEach((entry) => {
      if (!transformed[entry.MONTH]) {
        transformed[entry.MONTH] = {
          MONTH: entry.MONTH
        };
      }

      transformed[entry.MONTH][entry.CHAIN] = entry[yaxis];
    });

    return Object.values(transformed);
  };

  const transformedData = transformData(data);
  // console.log(transformedData);

  return (
    <ResponsiveContainer width="100%" height={350}>
      <BarChart data={transformedData}>
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
        <Bar dataKey="ethereum" stackId="a" fill="#adfa1d" />
        <Bar dataKey="polygon" stackId="a" fill="#8884d8" />
        <Bar dataKey="optimism" stackId="a" fill="#82ca9d" />
        <Bar dataKey="arbitrum" stackId="a" fill="#ffc658" />
      </BarChart>
    </ResponsiveContainer>
  );
}
