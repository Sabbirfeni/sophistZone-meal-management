import React, { PureComponent, useEffect, useState } from "react";
import './MonthlyMealRateChart.scss';
import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
export default function YearlyMealChart() {
  const { screenSize } = useStateContext();
  const [ chartMargin, setAllSize ] = useState({ right: 30, left: 30 });

  useEffect(() => {
    screenSize < 600 && setAllSize({ right: 25, left: 25 })
  }, [screenSize])
  const data = [
    {
      name: 'Sabbir',
      Deposit: 850,
      Expense: 330
    },
    {
      name: 'Rashed',
      Deposit: 390,
      Expense: 300
    },
    {
      name: 'Hridoy',
      Deposit: 600,
      Expense: 400
    },
    {
      name: 'Sharif',
      Deposit: 280,
      Expense: 550
    },
    {
      name: 'Niloy',
      Deposit: 390,
      Expense: 300
    },
    {
      name: 'Arko',
      Deposit: 700,
      Expense: 400
    }
  ];
  return (
    <div className="monthly-meal-rate-chart-container">
    <div>Last Six Month Meal Rate</div>
    <ResponsiveContainer className='monthly-meal-rate-chart' minWidth={300} height={300}>
      <AreaChart data={data}
        margin={{ top: 10, right: chartMargin.right , left: chartMargin.left, bottom: 0 }}>
        <defs>
          <linearGradient id="Deposit" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#57cdff" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#57cdff" stopOpacity={0}/>
          </linearGradient>
          <linearGradient id="Expense" x1="0" y1="0" x2="0" y2="1">
            <stop offset="5%" stopColor="#ffc987" stopOpacity={0.8}/>
            <stop offset="95%" stopColor="#ffc987" stopOpacity={0}/>
          </linearGradient>
        </defs>
        <XAxis dataKey="name" />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Deposit" stroke="#57cdff" fillOpacity={1} fill="url(#Deposit)" />
        <Area type="monotone" dataKey="Expense" stroke="#ffc987" fillOpacity={1} fill="url(#Expense)" />
      </AreaChart>
    </ResponsiveContainer>
    </div>
  );
}
