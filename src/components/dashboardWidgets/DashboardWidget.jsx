import React from "react";
import './dashboardWidget.scss';


export default function DashboardWidget({ title, counter, link, percentage, upIcon, downIcon, widgetIcon }) {
  return (
    <div className="widget div-shadow">
      <div className="left">
        <span className="title">{title}</span>
        <span className="counter">{counter}</span>
        <span className="link">{link}</span>
      </div>
      <div className="right">
        <div className="percentage positive">
          {percentage }%
          {upIcon}
        </div>
        {widgetIcon}
        
      </div>
    </div>
  );
}
