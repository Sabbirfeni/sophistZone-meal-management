import React from "react";
import UserProfile from "../../components/user/UserProfile";
import UserDataChart from "../../components/user/UserDataChart";
import './singleUser.scss';
import MealHistoryChart from '../../components/mealRateCharts/MealHistoryChart';
import MonthlyDepositeExpenseChart from "../../components/mealRateCharts/MonthlyDepositeExpenseChart";
import UserMonthlyMealChart from '../../components/user/userMonthlyMealChart';
import UserMonthlyDepositExpense from "../../components/user/userMonthlyDepositExpense";
import TransactionTable from "../../components/Table/TransactionTable";
export default function SingleUser() {
  return (
    <>
      <div className="singleUser-data-container div-gap">
        <UserProfile/>
        <UserMonthlyMealChart/>
        <UserMonthlyDepositExpense/>
      </div>
      <TransactionTable/>
    </>
  );
}
