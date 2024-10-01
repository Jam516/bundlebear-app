import React from 'react';
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
require('highcharts/modules/exporting')(Highcharts);

type DataEntry = {
    DATE: string;
    NUM_OPS: number;
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
        Piggybox: '#00D632',
        "Anichess Orb Token Claim": '#43D0D7'
    };
    data.forEach(item => {
        if (!seriesData[item.PROJECT]) {
            seriesData[item.PROJECT] = {
                name: item.PROJECT,
                data: [],
                color: colors[item.PROJECT] || `#${Math.floor(Math.random() * 16777215).toString(16)}`
            };
        }
        seriesData[item.PROJECT].data.push([new Date(item.DATE).getTime(), item.NUM_OPS]);
    });

    return Object.values(seriesData);
}

export function SBOPChart({ data }: SBChartProps) {
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
            }
        },
        tooltip: {
            shared: true
        },
        plotOptions: {
            column: {
                stacking: 'normal',
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


