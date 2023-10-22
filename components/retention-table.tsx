import React from 'react';

type CohortData = {
    COHORT: string;
    MONTH_NUMBER?: number;
    WEEK_NUMBER?: number;
    DAY_NUMBER?: number;
    PERCENTAGE: string;
    TOTAL_USERS: number;
};

type Timeframe = 'week' | 'day' | 'month';

type RetentionTableProps = {
    data: CohortData[];
    timeframe: string;
};

export const RetentionTable: React.FC<RetentionTableProps> = ({ data, timeframe }) => {

    const organizeData = (data: CohortData[]): Record<string, Record<number, string>> => {
        const organizedData: Record<string, Record<number, string>> = {};

        data.forEach(entry => {
            const numberKey = timeframe === 'month' ? 'MONTH_NUMBER' : (timeframe === 'week' ? 'WEEK_NUMBER' : 'DAY_NUMBER');
            const numberValue = entry[numberKey as keyof CohortData] as number | undefined;

            if (numberValue === undefined) return;

            if (!organizedData[entry.COHORT]) {
                organizedData[entry.COHORT] = {};
            }
            organizedData[entry.COHORT][numberValue] = entry.PERCENTAGE;
        });

        console.log(organizedData);
        return organizedData;
    }

    const organizedData = organizeData(data);
    const cohorts = Object.keys(organizedData);
    const maxMonthNumber = Math.max(...data.map(d => d.MONTH_NUMBER ?? d.WEEK_NUMBER ?? d.DAY_NUMBER ?? 0));

    return (
        <table className="w-full border-collapse">
            <thead>
                <tr>
                    <th className="border p-2 bg-gray-200">Cohort</th>
                    {Array.from({ length: maxMonthNumber + 1 }).map((_, idx) => (
                        <th key={idx} className="border p-2 bg-gray-200">{timeframe} {idx}</th>
                    ))}
                </tr>
            </thead>
            <tbody>
                {cohorts.map(cohort => (
                    <tr key={cohort}>
                        <td className="border p-2">{cohort}</td>
                        {Array.from({ length: maxMonthNumber + 1 }).map((_, idx) => (
                            <td
                                key={idx}
                                className={`border p-2 bg-blue-${Math.min(9, Math.ceil(Number(organizedData[cohort][idx] || 0) / 10))}00`}
                            >
                                {organizedData[cohort][idx] ? organizedData[cohort][idx] + '%' : '-'}
                            </td>
                        ))}
                    </tr>
                ))}
            </tbody>
        </table>
    );
}