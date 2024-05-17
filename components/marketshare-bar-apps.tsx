import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/exporting')(Highcharts);

type DataEntry = {
    DATE: string;
    NUM_UNIQUE_SENDERS: number;
    PROJECT: string;
};

interface SBChartProps {
    data: DataEntry[];
}

interface SeriesData {
    [key: string]: {
        name: string;
        data: Array<[number, number]>;
        color: string;
    };
}

function prepareData(data: DataEntry[]) {
    const seriesData: SeriesData = {};
    const totalSendersByDate: { [key: string]: number } = {};
    const colors: Record<string, string> = {
        Cyberconnect: '#2A9D8F',
        CYBER: '#15514A',
        xFANTV: '#F386FF',
        G1: '#EA5230',
        direct_transfer: '#FAC748',
        Other: '#525252',
        CapX: '#B42318',
        USDC: '#118AB2',
        Fantazy: '#F7E3AF',
        "The Noise NFT": '#B6D6CC',
        "Burn Address": '#171717',
        "Minishard NFT": '#758E4F',
        Superfluid: '#1DB227',
        ALFA: '#0400F5',
        DEGEN: '#A36EFD',
        DEGENx: '#532E9F',
        Piggybox: '#5ED2DA'
    };

    data.forEach(item => {
        if (!seriesData[item.PROJECT]) {
            seriesData[item.PROJECT] = {
                name: item.PROJECT,
                data: [],
                color: colors[item.PROJECT] || `#${Math.floor(Math.random() * 16777215).toString(16)}`
            };
        }
        if (!totalSendersByDate[item.DATE]) {
            totalSendersByDate[item.DATE] = 0;
        }
        totalSendersByDate[item.DATE] += item.NUM_UNIQUE_SENDERS;
    });

    data.forEach(item => {
        const percentage = (item.NUM_UNIQUE_SENDERS / totalSendersByDate[item.DATE]) * 100;
        seriesData[item.PROJECT].data.push([new Date(item.DATE).getTime(), percentage]);
    });

    return Object.values(seriesData);
}

export function MSChart({ data }: SBChartProps) {
    const series = prepareData(data);

    const options = {
        chart: {
            type: 'column'
        },
        title: {
            text: ' '
        },
        xAxis: {
            type: 'datetime'
        },
        yAxis: {
            title: {
                text: ' '
            },
            labels: {
                format: '{value}%'
            }
        },
        tooltip: {
            pointFormat: '<span style="color:{point.color}">\u25CF</span> {series.name}: <b>{point.y:.2f}%</b><br/>',
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'percent',
                pointPadding: 0,
                groupPadding: 0
            }
        },
        legend: {
            enabled: false
        },
        series
    };

    return (
        <HighchartsReact
            highcharts={Highcharts}
            options={options}
        />
    );
};


