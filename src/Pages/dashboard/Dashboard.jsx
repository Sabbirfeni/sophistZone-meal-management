import React from "react";
import DashboardWidget from "../../components/dashboardWidgets/DashboardWidget";
import './dashboard.scss';
import { dashboardWidgets } from '../../constants/dummy';
import DailyMealRateChart from "../../components/mealRateCharts/DailyMealRateChart";
import MonthlyMealRateChart from "../../components/mealRateCharts/MealHistoryChart";
import MonthlyDepositeExpenseChart from "../../components/mealRateCharts/MonthlyDepositeExpenseChart";
import UserList from '../../components/UserList/UserList';
import Table from '../../components/Table/Table';
import Users from "../../components/users/Users";

export default function Dashboard() {
  const users = [
    { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
    { name: 'Niloy', deposit: 2345, expense: 232, meal: 23, give: 23, get: 0 },
    { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
    { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
    { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
    { name: 'Niloy', deposit: 2345, expense: 232, meal: 23, give: 23, get: 0 },
    { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
    { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
    { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
    { name: 'Sabbir', deposit: 2345, expense: 232, meal: 23, give: 34, get: 0 },
    { name: 'Rashed', deposit: 2345, expense: 232, meal: 23, give: 0, get: 54 },
]
const expense = [
  { month: 'Jun', total: 4000, prevTotal: 299 },
  { month: 'Jun', total: 4000, prevTotal: 299 },
  { month: 'Jun', total: 4000, prevTotal: 299 },
  { month: 'Jun', total: 4000, prevTotal: 299 },
  { month: 'Jun', total: 4000, prevTotal: 299 },
  { month: 'Jun', total: 4000, prevTotal: 299 },
  { month: 'Jun', total: 4000, prevTotal: 299 },
  { month: 'Jun', total: 4000, prevTotal: 299 },
  { month: 'Jun', total: 4000, prevTotal: 299 },
]
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
      <div className="flex flex-wrap gap-4">
        <Table data={users} tableName='Users' columnNo={3} />
        <Table data={expense} tableName='Latest Expense' columnNo={3} view='short'/>
      </div>
      <Users/>
      {/* <YearlyMealChart/> */}
    </>
  );
}