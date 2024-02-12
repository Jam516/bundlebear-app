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

export function MSCategoryChart({ data, xaxis, yaxis, segment }: SBChartProps) {

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
        {/* <ReferenceLine y={0} stroke="#000" /> */}
        <Bar dataKey="DEX" stackId="a" fill="#264653" />
        <Bar dataKey="ERC20" stackId="a" fill="#3454d1" />
        <Bar dataKey="NFT" stackId="a" fill="#ef6461" />
        <Bar dataKey="NFT drop" stackId="a" fill="#e76f51" />
        <Bar dataKey="Watch2Earn" stackId="a" fill="#2a9d8f" />
        <Bar dataKey="betting" stackId="a" fill="#e9c46a" />
        <Bar dataKey="bridge" stackId="a" fill="#896a67" />
        <Bar dataKey="derivatives" stackId="a" fill="#823038" />
        <Bar dataKey="game" stackId="a" fill="#90c2e7" />
        <Bar dataKey="escrow" stackId="a" fill="#39400b" />
        <Bar dataKey="factory" stackId="a" fill="#4b2640" />
        <Bar dataKey="lending" stackId="a" fill="#f5d491" />
        <Bar dataKey="quest" stackId="a" fill="#f386ff" />
        <Bar dataKey="restaking" stackId="a" fill="#a982ed" />
        <Bar dataKey="social" stackId="a" fill="#ff4e17" />
        <Bar dataKey="native transfer" stackId="a" fill="#31D892" />
        <Bar dataKey="unlabeled" stackId="a" fill="#858585" />
      </BarChart>
    </ResponsiveContainer>
  );
}
