import React, { useLayoutEffect, useRef } from "react";
import {
    IgrCategoryXAxis, IgrDataChart, IgrLegend, IgrNumericYAxis, IgrStackedColumnSeries, IgrStackedFragmentSeries
} from "igniteui-react-charts";

interface Props {
    dataSource: any;
}

export const MonthlyTotalScores = ({ dataSource }: Props) => {

    const chart = useRef<IgrDataChart>(null);
    const legend = useRef<IgrLegend>(null);

    useLayoutEffect(() =>
    {
        if (chart && chart.current){
            chart.current.legend = legend.current;
        } 
    });

    return (
        <div className="container">
            <div>
                <IgrLegend orientation="Horizontal" ref={legend} />
            </div>
            <div style={{ height: "calc(100% - 35px)" }}>
                <IgrDataChart dataSource={dataSource} ref={chart}
                              height="100%" width="100%" 
                              isHorizontalZoomEnabled={true}
                              isVerticalZoomEnabled={true} >
                    <IgrCategoryXAxis name="xAxis" label="month" interval="1" title="Month" />
                    <IgrNumericYAxis name="yAxis" minimumValue={0} maximumValue={500} title="Score" />
                    <IgrStackedColumnSeries radiusX={0} radiusY={0} name="series" xAxisName="xAxis" yAxisName="yAxis">
                        <IgrStackedFragmentSeries outline="transparent" brush="#e57373" name="series1" valueMemberPath="math" title="Math" />
                        <IgrStackedFragmentSeries outline="transparent" brush="#ba68c8" name="series2" valueMemberPath="languageArts" title="Language Arts" />
                        <IgrStackedFragmentSeries outline="transparent" brush="#64b5f6" name="series3" valueMemberPath="reading" title="Reading" />
                        <IgrStackedFragmentSeries outline="transparent" brush="#4db6ac" name="series4" valueMemberPath="science" title="Science" />
                        <IgrStackedFragmentSeries outline="transparent" brush="#ffd54f" name="series5" valueMemberPath="socialStudies" title="Social Studies" />
                    </IgrStackedColumnSeries>
                </IgrDataChart>
            </div>
        </div>
    );
}