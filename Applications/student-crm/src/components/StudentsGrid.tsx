import React from "react";
import { GridActivationMode, GridSelectionMode, IgrDataGrid, IgrGridSelectedItemsChangedEventArgs, IgrTextColumn } from "igniteui-react-grids";
import { IStudent } from "../business/Student";

interface Props {
    dataSource: any;
    onSelectedStudentChanged: ((e: IStudent) => void);
}

export const StudentsGrid = ({dataSource, onSelectedStudentChanged}: Props) => {

    function handleSelection(s: IgrDataGrid, e: IgrGridSelectedItemsChangedEventArgs) {
        onSelectedStudentChanged(e.currentItems.item(0));
    }

    return (
        <div className="container">
            <IgrDataGrid dataSource={dataSource} autoGenerateColumns={false} 
                         selectionMode={GridSelectionMode.SingleRow} 
                         activationMode={GridActivationMode.None} 
                         selectedItemsChanged={handleSelection} >
                <IgrTextColumn field="id" headerText="ID Number" />
                <IgrTextColumn field="name" headerText="Name" />
                <IgrTextColumn field="classNumber" headerText="Classroom" />
            </IgrDataGrid>
        </div>
    );
}