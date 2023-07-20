import React from "react";
import UserProfile from "../../components/user/UserProfile";
import UserDataChart from "../../components/user/UserDataChart";
import './singleUser.scss';
import MealHistoryChart from '../../components/mealRateCharts/MealHistoryChart';
import MonthlyDepositeExpenseChart from "../../components/mealRateCharts/MonthlyDepositeExpenseChart";

export default function SingleUser() {
  return (
    <>
      <div className="singleUser-data-container div-gap">
        <UserProfile/>
        <MealHistoryChart/>
        <MonthlyDepositeExpenseChart/>
        {/* <UserDataChart/> */}
      </div>
    </>
  );
}
