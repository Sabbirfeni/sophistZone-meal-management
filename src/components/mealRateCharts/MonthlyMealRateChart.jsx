import React, { PureComponent, useEffect, useState } from "react";
import './MonthlyMealRateChart.scss';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
export default function MonthlyMealRateChart() {
  const { screenSize } = useStateContext();
  const [ chartWidth, setChartWidth ] = useState(null);
  useEffect(() => {
    screenSize > 1200 ? setChartWidth('90%') : setChartWidth('100%')
  }, [screenSize])
  const data = [
    {
      name: 'Jan',
      Rate: 45,
      expense: 33
    },
    {
      name: 'Fab',
      Rate: 39,
      expense: 30
    },
    {
      name: 'Mar',
      Rate: 20,
      expense: 40
    },
    {
      name: 'Apr',
      Rate: 28,
      expense: 25
    },
    {
      name: 'May',
      Rate: 39,
      expense: 30
    },
    {
      name: 'Jun',
      Rate: 20,
      expense: 40
    }
  ];
  return (
    <div className="monthly-meal-rate-chart-container">
    <div>Last Six Month Meal Rate</div>
    <ResponsiveContainer className='monthly-meal-rate-chart' minWidth={300} minHeight={240} height={240}>
      <AreaChart data={data}
        margin={{ top: 10, right: 20, left: 20, bottom: 0 }}>
        <defs>
          <linearGradient id="Rate" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#82ca9d" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Rate" stroke="#82ca9d" fillOpacity={1} fill="url(#Rate)" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  );
}
