"use client";

import { Bar, BarChart, Tooltip, Legend, ResponsiveContainer, XAxis, YAxis } from "recharts";
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
}

export function SBChart({ data, xaxis, yaxis, segment }: SBChartProps) {

  const transformData = (data: DataEntry[]) => {
    const transformed = {};

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
        <Bar dataKey="pimlico" stackId="a" fill="#adfa1d" />
        <Bar dataKey="stackup" stackId="a" fill="#8884d8" />
        <Bar dataKey="alchemy" stackId="a" fill="#82ca9d" />
        <Bar dataKey="biconomy" stackId="a" fill="#ffc658" />
        <Bar dataKey="blocto" stackId="a" fill="#ff5733" />
        <Bar dataKey="pimlico erc-20" stackId="a" fill="#33ff57" />
        <Bar dataKey="candide" stackId="a" fill="#3357ff" />
        <Bar dataKey="Unknown" stackId="a" fill="#ff33ac" />
      </BarChart>
    </ResponsiveContainer>
  );
}
