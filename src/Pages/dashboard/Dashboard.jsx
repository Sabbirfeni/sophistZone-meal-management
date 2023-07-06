import React from "react";
import DashboardWidget from "../../components/dashboardWidgets/DashboardWidget";
import './dashboard.scss';
import { dashboardWidgets } from '../../constants/dummy';
import DailyMealRateChart from "../../components/mealRateCharts/DailyMealRateChart";
import MonthlyMealRateChart from "../../components/mealRateCharts/MealHistoryChart";
import MonthlyDepositeExpenseChart from "../../components/mealRateCharts/MonthlyDepositeExpenseChart";
import Table from "../../components/Table/Table";
import ShortTable from "../../components/Table/ShortTable";

export default function Dashboard() {

  return (
    <>
      <div className="widgets">
      {dashboardWidgets.map((data, index) => (
        <DashboardWidget key={`${data.title}`} {...data}/>
      ))}
      </div>
      <div className="meal-rate-charts">
        <DailyMealRateChart/>
        <MonthlyMealRateChart/>
        <MonthlyDepositeExpenseChart/>
      </div>
      <div className="flex gap-4">
        <ShortTable/>
        <ShortTable/>
      </div>
  
    </>
  );
}