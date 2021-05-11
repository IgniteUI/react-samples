import React from "react";
import { IgrCategoryXAxis, IgrColumnSeries, IgrDataChart, IgrNumericYAxis } from "igniteui-react-charts";

interface Props {
    dataSource: any;
    subject: string;
    brush: string;
}

export const SubjectChart = ({dataSource, subject, brush}: Props) => {

    return (
        <div className="container">
            <IgrDataChart dataSource={dataSource}
                          width="100%" height="100%"
                          isHorizontalZoomEnabled={true}
                          isVerticalZoomEnabled={true} >
                <IgrCategoryXAxis name="xAxis" label="month" interval="1" title="Month"/>
                <IgrNumericYAxis name="yAxis" minimumValue={0} maximumValue={100} title="Score" />
                <IgrColumnSeries name="series1" outline="transparent" brush={brush}
                                 xAxisName="xAxis" yAxisName="yAxis"
                                 valueMemberPath={subject} />
            </IgrDataChart>
        </div>
    );
}