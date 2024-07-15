"use client"
import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend, TooltipItem } from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

interface PieChartProps {
    data: { NAME: string;[key: string]: string | number }[];
    yaxis: string;
    pct: boolean;
}

const PieChartC: React.FC<PieChartProps> = ({ data, yaxis, pct }) => {
    const presetColors: { [key: string]: string } = {
        'ARBITRUM': '#3454D1',
        'ETHEREUM': '#333333',
        'BASE': '#90C2E7',
        'OPTIMISM': '#D1345B',
        'POLYGON': '#A982ED',
        'Gas.zip': '#3A6EA5',
        'Other': '#FF9F40'
    };

    const defaultColors = [
        '#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0', '#9966FF',
        '#4CAF50', '#E91E63', '#9C27B0', '#795548'
    ];

    const getColor = (name: string, index: number) => {
        return presetColors[name] || defaultColors[index % defaultColors.length];
    };

    const chartData = {
        labels: data.map((item) => item.NAME),
        datasets: [
            {
                data: data.map((item) => item[yaxis as keyof typeof item]),
                backgroundColor: data.map((item, index) => getColor(item.NAME, index)),
            },
        ],
    };

    const options = {
        responsive: true,
        maintainAspectRatio: false,
        plugins: {
            legend: {
                position: 'right' as const,
            },
            title: {
                display: true,
                text: 'Pie Chart',
            },
            tooltip: {
                callbacks: {
                    label: (context: TooltipItem<'pie'>) => {
                        const label = context.label || '';
                        const value = context.parsed;
                        const total = context.dataset.data.reduce((a: number, b: number) => a + b, 0);
                        const percentage = ((value / total) * 100).toFixed(2);

                        if (pct) {
                            return `${label}: ${percentage}%`;
                        } else {
                            return `${label}: ${value.toLocaleString()}`;
                        }
                    },
                },
            },
        },
    };

    return (
        <div style={{ height: '350px' }}>
            <Pie data={chartData} options={options} />
        </div>
    );
};

export default PieChartC;