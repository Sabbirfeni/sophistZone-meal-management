import React from "react";
import './DailyMealRateChart.scss';
import { BsThreeDotsVertical } from 'react-icons/bs';
import { CircularProgressbar } from "react-circular-progressbar";
import 'react-circular-progressbar/dist/styles.css';
import { BiArrowFromBottom } from 'react-icons/bi';

export default function DailyMealRateChart() {
  const value = 50.45
  return (
    <div className="daily-meal-rate-chart div-shadow box-padding">
      <div className="title-bar">
        <h1 className="title">Total Revenue</h1>
        <BsThreeDotsVertical fontSize='small'/>
      </div>
      <div className="progress-bar-container">
        <div className="progress-bar">
          <CircularProgressbar styles={{text: {fontSize: '14px'}}}  value={50.45} text={`${value}/-`} strokeWidth={6}/>
        </div>
        <h2 className="progress-bar-title">Meal Rate</h2>
      </div>
      <div className="summery">
        <div className="item">
          <div className="item-title">Targeted</div>
          <div className="item-result positive">
            <BiArrowFromBottom fontSize='small'/>
            <div className="result-amount">3/-</div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Last Week</div>
          <div className="item-result negative">
            <BiArrowFromBottom fontSize='small'/>
            <div className="result-amount">3/-</div>
          </div>
        </div>
        <div className="item">
          <div className="item-title">Last Month</div>
          <div className="item-result positive">
            <BiArrowFromBottom fontSize='small'/>
            <div className="result-amount">3/-</div>
          </div>
        </div>
      </div>
    </div>
  );
}
