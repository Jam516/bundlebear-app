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
        <Bar dataKey="zerodev_kernel" stackId="a" fill="#118AB2" />
        <Bar dataKey="blocto" stackId="a" fill="#B6D6CC" />
        <Bar dataKey="candide" stackId="a" fill="#F5D491" />
        <Bar dataKey="fun.xyz" stackId="a" fill="#3D3D3D" />
        <Bar dataKey="Unknown" stackId="a" fill="#707070" />
        <Bar dataKey="safe" stackId="a" fill="#2A9D8F" />
        <Bar dataKey="biconomy" stackId="a" fill="#FF4E17" />
        <Bar dataKey="banana" stackId="a" fill="#F8E9E9" />
        <Bar dataKey="simpleaccount" stackId="a" fill="#69995D" />
        <Bar dataKey="alchemy_lightaccount" stackId="a" fill="#1167b1" />
        <Bar dataKey="alchemy_modularaccount" stackId="a" fill="#1167b1" />
        <Bar dataKey="etherspot" stackId="a" fill="#FAC748" />
        <Bar dataKey="circle" stackId="a" fill="#008000" />
        <Bar dataKey="nani" stackId="a" fill="#FFC6FF" />
        <Bar dataKey="coinbase_smart_wallet" stackId="a" fill="#C4DD45" />
        <Bar dataKey="thirdweb_default" stackId="a" fill="#D110A9" />
        <Bar dataKey="lumx" stackId="a" fill="#6E05FF" />
      </BarChart>
    </ResponsiveContainer>
  );
}
