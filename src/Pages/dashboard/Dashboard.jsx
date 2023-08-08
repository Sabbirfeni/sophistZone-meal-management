import React from "react";
import DashboardWidget from "../../components/dashboardWidgets/DashboardWidget";
import './dashboard.scss';
import { dashboardWidgets } from '../../constants/dummy';
import DailyMealRateChart from "../../components/mealRateCharts/DailyMealRateChart";
import MonthlyMealRateChart from "../../components/mealRateCharts/MealHistoryChart";
import MonthlyDepositeExpenseChart from "../../components/mealRateCharts/MonthlyDepositeExpenseChart";
import UsersTable from "../../components/Table/UsersTable";
import TransactionTable from "../../components/Table/TransactionTable";
import useAuth from "../../contexts/useAuth";

export default function Dashboard() {
  const { isLogin, currentUser } = useAuth();
  console.log(currentUser)
  return (
    <>
      <div className="widgets div-gap">
      {dashboardWidgets.map((data, index) => (
        <DashboardWidget key={`${data.title}`} {...data}/>
      ))}
      </div>
      <div className="meal-rate-charts div-gap">
        <DailyMealRateChart/>
        <MonthlyMealRateChart/>
        <MonthlyDepositeExpenseChart/>
      </div>
      <div className="flex flex-wrap div-gap">
        <UsersTable rows={6} columns={3}/>
        <TransactionTable rows={6} columns={3}/>
      </div>
  
    </>
  );
}