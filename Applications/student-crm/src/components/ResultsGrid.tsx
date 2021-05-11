import React, { useLayoutEffect, useRef } from "react";
import { DataSourceSummaryScope, SummaryOperand } from "igniteui-react-core";
import { EditModeType, GroupSummaryDisplayMode, IgrColumnSummaryDescription, IgrDataGrid, IgrTextColumn } from "igniteui-react-grids";
import { IStudent } from "../business/Student";

interface Props {
    student?: IStudent;
}

export const ResultsGrid = ({student}: Props) => {

    const grid = useRef<IgrDataGrid>(null);

    useLayoutEffect(() => {
        if (grid && grid.current){
            grid.current.summaryDescriptions.clear();            
            grid.current.summaryDescriptions.add(createGridAvgSummary("math"));
            grid.current.summaryDescriptions.add(createGridAvgSummary("languageArts"));
            grid.current.summaryDescriptions.add(createGridAvgSummary("reading"));
            grid.current.summaryDescriptions.add(createGridAvgSummary("science"));
            grid.current.summaryDescriptions.add(createGridAvgSummary("socialStudies"));
        }
    });

    const createGridAvgSummary = (field: string): IgrColumnSummaryDescription  => {
        const avgSummary = new IgrColumnSummaryDescription();
        avgSummary.field = field;
        avgSummary.operand = SummaryOperand.Average;
        avgSummary.formatOverride = new Intl.NumberFormat("en-EN", { minimumFractionDigits: 2, maximumFractionDigits: 2});
        return avgSummary;
    }

    return (
        <div className="container">
            <span style={{ margin: '.5em 0 .5em 0' }}>{"Id: " + student?.id + " / Name: " + student?.name + " / Classroom: " + student?.classNumber}</span>
            <IgrDataGrid dataSource={student?.subjects} ref={grid}
                         height="100%" width="100%"
                         editMode={EditModeType.None}
                         summaryScope={DataSourceSummaryScope.Root}
                         groupSummaryDisplayMode={GroupSummaryDisplayMode.RowBottom}
                         autoGenerateColumns={false}>
                <IgrTextColumn borderRightWidth="1" border="#dddddd" field="month" headerText="Month" />
                <IgrTextColumn borderRightWidth="1" border="#dddddd" field="math" headerText="Math" />
                <IgrTextColumn borderRightWidth="1" border="#dddddd" field="languageArts" headerText="Language Arts" />
                <IgrTextColumn borderRightWidth="1" border="#dddddd" field="reading" headerText="Reading" />
                <IgrTextColumn borderRightWidth="1" border="#dddddd" field="science" headerText="Science" />
                <IgrTextColumn borderRightWidth="1" border="#dddddd" field="socialStudies" headerText="Social Studies" />
            </IgrDataGrid>
        </div>
    );
}