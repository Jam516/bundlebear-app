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
}

type TransformedEntry = {
  DATE: string;
  [key: string]: string | number;
};

export function SBChart({ data, xaxis, yaxis, segment }: SBChartProps) {

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
          tickFormatter={(value) => `${value.toLocaleString()}`}
        />
        <Tooltip />
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
        <Bar dataKey="alchemy" stackId="a" fill="#1167b1" />
        <Bar dataKey="etherspot" stackId="a" fill="#FAC748" />
        <Bar dataKey="circle" stackId="a" fill="#008000" />
        <Bar dataKey="nani" stackId="a" fill="#FFC6FF" />
        <Bar dataKey="coinbase_smart_wallet" stackId="a" fill="#C4DD45" />
        <Bar dataKey="thirdweb_default" stackId="a" fill="#D110A9" />
        <Bar dataKey="thirdweb_managedaccount" stackId="a" fill="#D110A9" />
        <Bar dataKey="lumx" stackId="a" fill="#6E05FF" />
      </BarChart>
    </ResponsiveContainer>
  );
}
