import React from "react";
import DashboardWidget from "../../components/dashboardWidgets/DashboardWidget";
import './dashboard.scss';
import { dashboardWidgets } from '../../constants/dummy';
import DailyMealRateChart from "../../components/mealRateCharts/DailyMealRateChart";
import MonthlyMealRateChart from "../../components/mealRateCharts/MonthlyMealRateChart";

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
      </div>
    </>
  );
}