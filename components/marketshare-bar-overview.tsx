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

type TransformedEntry = {
  DATE: string;
  [key: string]: string | number;
};

const toPercent = (decimal: number) => `${(decimal * 100).toLocaleString()}%`;

const getPercent = (value: number, total: number) => {
  const ratio = total > 0 ? value / total : 0;

  return toPercent(ratio);
};

export function MSChart({ data, xaxis, yaxis, segment }: SBChartProps) {

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
      <BarChart
        data={transformedData}
        stackOffset="expand"
        barCategoryGap={0}
      >
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
          tickFormatter={toPercent}
        />
        <Tooltip
          formatter={(value: number, name, entry) => {
            // Calculate the total value for the current group
            const total = Object.keys(entry.payload)
              .filter(key => key !== 'DATE' && key !== xaxis)
              .reduce((acc, key) => acc + (entry.payload[key] || 0), 0);

            // Return the formatted percentage
            return getPercent(value, total);
          }}
        />
        <Legend />
        <Bar dataKey="ethereum" stackId="a" fill="#333333" />
        <Bar dataKey="polygon" stackId="a" fill="#A982ED" />
        <Bar dataKey="optimism" stackId="a" fill="#D1345B" />
        <Bar dataKey="arbitrum" stackId="a" fill="#3454D1" />
        <Bar dataKey="base" stackId="a" fill="#90C2E7" />
        <Bar dataKey="avalanche" stackId="a" fill="#823038" />
      </BarChart>
    </ResponsiveContainer>
  );
}
