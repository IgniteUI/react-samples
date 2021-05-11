import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { IgrDataChartCategoryModule, IgrDataChartCoreModule, IgrDataChartInteractivityModule, IgrDataChartRadialCoreModule, IgrDataChartRadialModule, IgrDataChartStackedModule, IgrLegendModule } from 'igniteui-react-charts';
import { IgrDataGridModule } from 'igniteui-react-grids';

//REQUIRED - register all Ignite UI modules
IgrDataGridModule.register();
IgrDataChartRadialCoreModule.register();
IgrDataChartRadialModule.register();
IgrDataChartInteractivityModule.register();
IgrLegendModule.register();
IgrDataChartCoreModule.register();
IgrDataChartCategoryModule.register();
IgrDataChartInteractivityModule.register();
IgrDataChartStackedModule.register();

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
