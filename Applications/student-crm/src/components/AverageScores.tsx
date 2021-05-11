import React, { useEffect, useState } from "react";
import { IgrCategoryAngleAxis, IgrDataChart, IgrNumericRadiusAxis, IgrRadialLineSeries } from "igniteui-react-charts";
import { IStudent } from "../business/Student";
import { ISubject } from "../business/Subject";

interface Props {
    dataSource: any;
}

export const AverageScores = ({ dataSource }: Props) => {

    const [radialData, setRadialData] = useState<any>();

    useEffect(() => {

        if (dataSource) {
            var data = convertDataForRadial(dataSource);
            setRadialData(data);
        }

    }, [dataSource]);

    const convertDataForRadial = (data: ISubject[]): any => {
        const Sub1Avg = (Math.round(data.reduce((total: any, next: { math: any }) => total + next.math, 0) / data.length * 10)) / 10;
        const Sub2Avg = (Math.round(data.reduce((total: any, next: { languageArts: any }) => total + next.languageArts, 0) / data.length * 10)) / 10;
        const Sub3Avg = (Math.round(data.reduce((total: any, next: { reading: any }) => total + next.reading, 0) / data.length * 10)) / 10;
        const Sub4Avg = (Math.round(data.reduce((total: any, next: { science: any }) => total + next.science, 0) / data.length * 10)) / 10;
        const Sub5Avg = (Math.round(data.reduce((total: any, next: { socialStudies: any }) => total + next.socialStudies, 0) / data.length * 10)) / 10;
        const avgs = [
            { "Result": Sub1Avg, "Subject": "math" },
            { "Result": Sub2Avg, "Subject": "languageArts" },
            { "Result": Sub3Avg, "Subject": "reading" },
            { "Result": Sub4Avg, "Subject": "science" },
            { "Result": Sub5Avg, "Subject": "socialStudies" }
        ];
        return avgs;
    }

    return (
        <div className="container">
            <IgrDataChart dataSource={radialData} width="100%" height="100%"
                gridMode="BeforeSeries"
                brushes="#09f" outlines="#09f"
                isHorizontalZoomEnabled={true} isVerticalZoomEnabled={true} >
                <IgrCategoryAngleAxis name="angleAxis" label="Subject" />
                <IgrNumericRadiusAxis name="radiusAxis" innerRadiusExtentScale={0.1}
                    strokeThickness={1} tickStrokeThickness={1}
                    minimumValue={0} maximumValue={100} />
                <IgrRadialLineSeries name="result"
                    valueMemberPath="Result" valueAxisName="radiusAxis"
                    angleAxisName="angleAxis" title="Score" showDefaultTooltip="true" />
            </IgrDataChart>
        </div>
    );
}