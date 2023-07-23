// import React, { PureComponent, useEffect, useState } from "react";
// import './YearlyMealChart.scss';
// import { AreaChart, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { useStateContext } from '../../contexts/ContextProvider';
// export default function YearlyMealChart() {
//   const { screenSize } = useStateContext();
//   const [ chartMargin, setAllSize ] = useState({ right: 20, left: 20 });

//   useEffect(() => {
//     screenSize < 600 && setAllSize({ right: 25, left: 25 })
//   }, [screenSize])
//   const data = [
//     {
//       name: 'Sabbir',
//       Deposit: 850,
//       Expense: 330
//     },
//     {
//       name: 'Rashed',
//       Deposit: 390,
//       Expense: 300
//     },
//     {
//       name: 'Hridoy',
//       Deposit: 600,
//       Expense: 400
//     },
//     {
//       name: 'Sharif',
//       Deposit: 280,
//       Expense: 550
//     },
//     {
//       name: 'Niloy',
//       Deposit: 390,
//       Expense: 300
//     },
//     {
//       name: 'Arko',
//       Deposit: 700,
//       Expense: 400
//     }
//   ];
//   return (
//     <div className="yearly-meal-rate-chart-container">
//     <div>Last Six Month Meal Rate</div>
//     <ResponsiveContainer className='yearly-meal-rate-chart' minWidth={300} height={300}>
//       <AreaChart data={data}
//         margin={{ top: 10, right: chartMargin.right , left: chartMargin.left, bottom: 0 }}>
//         <defs>
//           <linearGradient id="Deposit" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="5%" stopColor="#57cdff" stopOpacity={0.8}/>
//             <stop offset="95%" stopColor="#57cdff" stopOpacity={0}/>
//           </linearGradient>
//           <linearGradient id="Expense" x1="0" y1="0" x2="0" y2="1">
//             <stop offset="5%" stopColor="#ffc987" stopOpacity={0.8}/>
//             <stop offset="95%" stopColor="#ffc987" stopOpacity={0}/>
//           </linearGradient>
//         </defs>
//         <XAxis dataKey="name" fontSize='12px'/>
//         <CartesianGrid strokeDasharray="3 3" />
//         <Tooltip />
//         <Area type="monotone" dataKey="Deposit" stroke="#57cdff" fillOpacity={1} fill="url(#Deposit)" />
//         <Area type="monotone" dataKey="Expense" stroke="#ffc987" fillOpacity={1} fill="url(#Expense)" />
//       </AreaChart>
//     </ResponsiveContainer>
//     </div>
//   );
// }





import React, { PureComponent, useEffect, useState } from "react";
import '../../assets/styles/chart.scss';
import { AreaChart, BarChart, Bar, Area, LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { useStateContext } from '../../contexts/ContextProvider';
export default function YearlyMealChart() {
  const { screenSize } = useStateContext();
  const [ chartMargin, setAllSize ] = useState({ right: 20, left: 20 });

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
    <div className="chart-container div-shadow">
    <div>Last Six Month Meal Rate</div>
    {/* <ResponsiveContainer className='yearly-meal-rate-chart' minWidth={300} height={300}>
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
        <XAxis dataKey="name" fontSize='12px'/>
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Area type="monotone" dataKey="Deposit" stroke="#57cdff" fillOpacity={1} fill="url(#Deposit)" />
        <Area type="monotone" dataKey="Expense" stroke="#ffc987" fillOpacity={1} fill="url(#Expense)" />
      </AreaChart>
    </ResponsiveContainer> */}
    <ResponsiveContainer minWidth={100}>
        <BarChart
          maxWidth={100}
          data={data}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" stroke="#e0e0e0"/>
          <XAxis dataKey="name" fontSize='12px'/>
          <Tooltip />
          <Bar dataKey="Deposit" fill="#8884d8" />
          <Bar dataKey="Expense" fill="#82ca9d" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
