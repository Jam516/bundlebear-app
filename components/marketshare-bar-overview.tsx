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
        <Bar dataKey="base" stackId="a" fill="#90C2E7" />
        <Bar dataKey="polygon" stackId="a" fill="#A982ED" />
        <Bar dataKey="arbitrum" stackId="a" fill="#3454D1" />
        <Bar dataKey="linea" stackId="a" fill="#121212" />
        <Bar dataKey="optimism" stackId="a" fill="#D1345B" />
        <Bar dataKey="celo" stackId="a" fill="#FCFF52" />
        <Bar dataKey="avalanche" stackId="a" fill="#823038" />
        <Bar dataKey="bsc" stackId="a" fill="#F0B90B" />
        <Bar dataKey="ethereum" stackId="a" fill="#333333" />
      </BarChart>
    </ResponsiveContainer>
  );
}
