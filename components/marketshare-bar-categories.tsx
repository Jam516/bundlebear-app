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

const toPercent = (decimal: number, decimalPlaces: number = 1) =>
  `${(decimal * 100).toFixed(2)}%`;

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

  const CustomTooltip = ({ active, payload, label }: any) => {
    if (active && payload && payload.length) {
      const total = payload.reduce((sum: number, entry: any) => sum + (entry.value || 0), 0);

      return (
        <div className="custom-tooltip" style={{ backgroundColor: 'white', padding: '10px', border: '1px solid #ccc' }}>
          <p className="label">{`Date: ${label}`}</p>
          {payload.map((entry: any, index: number) => {
            const percentage = (entry.value / total) * 100;
            return (
              <p key={`item-${index}`} style={{ color: entry.color }}>
                {`${entry.name}: ${toPercent(percentage / 100, 2)}`}
              </p>
            );
          })}
        </div>
      );
    }
    return null;
  };

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
        <Tooltip content={<CustomTooltip />} />
        <Legend />
        {/* <ReferenceLine y={0} stroke="#000" /> */}
        <Bar dataKey="DEX" stackId="a" fill="#264653" />
        <Bar dataKey="ERC20" stackId="a" fill="#3454d1" />
        <Bar dataKey="NFT" stackId="a" fill="#ef6461" />
        <Bar dataKey="NFT drop" stackId="a" fill="#e76f51" />
        <Bar dataKey="Watch2Earn" stackId="a" fill="#a982ed" />
        <Bar dataKey="betting" stackId="a" fill="#e9c46a" />
        <Bar dataKey="bridge" stackId="a" fill="#896a67" />
        <Bar dataKey="derivatives" stackId="a" fill="#823038" />
        <Bar dataKey="game" stackId="a" fill="#90c2e7" />
        <Bar dataKey="escrow" stackId="a" fill="#39400b" />
        <Bar dataKey="factory" stackId="a" fill="#4b2640" />
        <Bar dataKey="lending" stackId="a" fill="#f5d491" />
        <Bar dataKey="quest" stackId="a" fill="#f386ff" />
        <Bar dataKey="restaking" stackId="a" fill="#1A0C6D" />
        <Bar dataKey="social" stackId="a" fill="#31D892" />
        <Bar dataKey="native transfer" stackId="a" fill="#2a9d8f" />
        <Bar dataKey="unlabeled" stackId="a" fill="#858585" />
      </BarChart>
    </ResponsiveContainer>
  );
}
