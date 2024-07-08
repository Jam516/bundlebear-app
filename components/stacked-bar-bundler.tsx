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
          tickFormatter={(value) =>
            usd ? `$${value.toLocaleString()}` : value.toLocaleString()
          }
        />
        <Tooltip />
        <Legend />
        {/* <ReferenceLine y={0} stroke="#000" /> */}
        <Bar dataKey="pimlico" stackId="a" fill="#7115AA" />
        <Bar dataKey="alchemy" stackId="a" fill="#118AB2" />
        <Bar dataKey="etherspot" stackId="a" fill="#FAC748" />
        <Bar dataKey="stackup" stackId="a" fill="#1D2F6F" />
        <Bar dataKey="unipass" stackId="a" fill="#B6D6CC" />
        <Bar dataKey="candide" stackId="a" fill="#F5D491" />
        <Bar dataKey="biconomy" stackId="a" fill="#FF4E17" />
        <Bar dataKey="coinbase" stackId="a" fill="#D3E1FF" />
        <Bar dataKey="Unknown" stackId="a" fill="#707070" />
        <Bar dataKey="particle" stackId="a" fill="#F386FF" />
        <Bar dataKey="cometh" stackId="a" fill="#5F6D81" />
      </BarChart>
    </ResponsiveContainer>
  );
}
