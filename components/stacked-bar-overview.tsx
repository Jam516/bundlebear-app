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

export function SBChart({ data, xaxis, yaxis, segment, usd }: SBChartProps) {

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
        <Bar dataKey="base" stackId="a" fill="#90C2E7" />
        <Bar dataKey="polygon" stackId="a" fill="#A982ED" />
        <Bar dataKey="arbitrum" stackId="a" fill="#3454D1" />
        <Bar dataKey="worldchain" name="world chain" stackId="a" fill="#121212" />
        <Bar dataKey="optimism" stackId="a" fill="#D1345B" />
        <Bar dataKey="arbitrum_nova" stackId="a" fill="#FF7700" />
        <Bar dataKey="celo" stackId="a" fill="#FCFF52" />
        <Bar dataKey="avalanche" stackId="a" fill="#823038" />
        <Bar dataKey="bsc" stackId="a" fill="#F0B90B" />
        <Bar dataKey="linea" stackId="a" fill="#fff069" />
        <Bar dataKey="ethereum" stackId="a" fill="#777780" />
        <Bar dataKey="gnosis" stackId="a" fill="#0d8f75" />
      </BarChart>
    </ResponsiveContainer>
  );
}
