import React, { useEffect, useState } from 'react';
import './App.css';
import { defineCustomElements } from "igniteui-dockmanager/loader";
import { IgcDockManagerComponent, IgcDockManagerPaneType,  IgcSplitPaneOrientation } from "igniteui-dockmanager";

import { StudentService } from "./services/StudentService";
import { StudentsGrid } from "./components/StudentsGrid";
import { IStudent } from './business/Student';
import { MonthlyTotalScores } from './components/MonthlyTotalScores';
import { SubjectChart } from './components/SubjectChart';
import { AverageScores } from './components/AverageScores';
import { ResultsGrid } from './components/ResultsGrid';
import { DockManagerHelpers } from './common/DockManagerHelpers';

//REQUIRED - needed for dock manager web component
/* eslint-disable */
declare global {
  namespace JSX {
    // tslint:disable-next-line:interface-name
    interface IntrinsicElements {
      "igc-dockmanager": any;
    }
  }
}
/* eslint-enable */

defineCustomElements();

function App() {

  const [students, setStudents] = useState<IStudent[]>();
  const [selectedStudent, setSelectedStudent] = useState<IStudent>();

  useEffect(() =>{

    const data = StudentService.getStudents(60);
    setSelectedStudent(data[0]);
    setStudents(data);

    const studentsListPane = DockManagerHelpers.createContentPane('studentsListPane', 'Student List');
    const monthlyTestScoresPane = DockManagerHelpers.createContentPane('monthlyTestScoresPane', 'Monthly Total Score');
    const mathPane = DockManagerHelpers.createContentPane('mathPane', 'Math');
    const languageArtsPane = DockManagerHelpers.createContentPane('languageArtsPane', 'Language Arts');
    const readingPane = DockManagerHelpers.createContentPane('readingPane', 'Reading');
    const sciencePane = DockManagerHelpers.createContentPane('sciencePane', 'Science');
    const socialStudiesPane = DockManagerHelpers.createContentPane('socialStudiesPane', 'Social Studies');
    const averageScoresPane = DockManagerHelpers.createContentPane('averageScoresPane', 'Average Scores by Subject');
    const resultsGridPane = DockManagerHelpers.createContentPane('resultsGridPane', 'Monthly Test Scores');

    const tabPane = DockManagerHelpers.createTabPane(IgcSplitPaneOrientation.vertical, [monthlyTestScoresPane, mathPane, languageArtsPane, readingPane, sciencePane, socialStudiesPane], 200);

    const splitPane1 = DockManagerHelpers.createSplitPane(IgcSplitPaneOrientation.vertical, [ studentsListPane ], 120);
    const splitPane2 = DockManagerHelpers.createSplitPane(IgcSplitPaneOrientation.horizontal, [ tabPane, averageScoresPane ]);
    const splitPane3 = DockManagerHelpers.createSplitPane(IgcSplitPaneOrientation.vertical, [ splitPane2, resultsGridPane ], 270);

    const dockManager: IgcDockManagerComponent = document.getElementById("dockManager") as IgcDockManagerComponent;

    dockManager.layout = {
      rootPane: {
        type: IgcDockManagerPaneType.splitPane,
        orientation: IgcSplitPaneOrientation.horizontal,
        panes: [ splitPane1, splitPane3 ],
      }
    };
  },[]);

  return (
    <div  className="container">
      <igc-dockmanager id="dockManager">
        <div slot="studentsListPane" className="dockManagerPane"><StudentsGrid dataSource={students} onSelectedStudentChanged={(e) => setSelectedStudent(e)}/></div>
        <div slot="monthlyTestScoresPane" className="dockManagerPane"><MonthlyTotalScores dataSource={selectedStudent?.subjects}/></div>
        <div slot="mathPane" className="dockManagerPane"><SubjectChart dataSource={selectedStudent?.subjects} subject="math" brush="#e57373"/></div>
        <div slot="languageArtsPane" className="dockManagerPane"><SubjectChart dataSource={selectedStudent?.subjects} subject="languageArts" brush="#ba68c8"/></div>
        <div slot="readingPane" className="dockManagerPane"><SubjectChart dataSource={selectedStudent?.subjects} subject="reading" brush="#64b5f6"/></div>
        <div slot="sciencePane" className="dockManagerPane"><SubjectChart dataSource={selectedStudent?.subjects} subject="science" brush="#4db6ac"/></div>
        <div slot="socialStudiesPane" className="dockManagerPane"><SubjectChart dataSource={selectedStudent?.subjects} subject="socialStudies" brush="#ffd54f"/></div>
        <div slot="averageScoresPane" className="dockManagerPane"><AverageScores dataSource={selectedStudent?.subjects} /></div>
        <div slot="resultsGridPane" className="dockManagerPane"><ResultsGrid student={selectedStudent} /></div>
      </igc-dockmanager>
    </div>
  );
}

export default App;
