"use client";

import React, { useState, useEffect } from 'react';

const CostsDashboard = () => {
  const [todayCost, setTodayCost] = useState(0);
  const [weekCost, setWeekCost] = useState(0);
  const [monthCost, setMonthCost] = useState(0);
  const [taskBreakdown, setTaskBreakdown] = useState([]);

  useEffect(() => {
    // Fetch data from local JSON file or Supabase here
    // For now, using placeholder data
    setTodayCost(10.50);
    setWeekCost(55.75);
    setMonthCost(210.20);
    setTaskBreakdown([
      { task: 'Task 1', model: 'Model A', tokens: 1000, cost: 2.50 },
      { task: 'Task 2', model: 'Model B', tokens: 2500, cost: 5.00 },
      { task: 'Task 3', model: 'Model A', tokens: 1500, cost: 3.00 },
    ]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Costs Dashboard</h1>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold">Today's Cost</h2>
          <p className="text-xl">${todayCost.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold">This Week's Cost</h2>
          <p className="text-xl">${weekCost.toFixed(2)}</p>
        </div>
        <div className="bg-white shadow-md rounded-md p-4">
          <h2 className="text-lg font-semibold">This Month's Cost</h2>
          <p className="text-xl">${monthCost.toFixed(2)}</p>
        </div>
      </div>

      <div className="mb-4">
        <h2 className="text-lg font-semibold mb-2">Per-Task Breakdown</h2>
        <table className="table-auto w-full">
          <thead>
            <tr>
              <th className="px-4 py-2">Task</th>
              <th className="px-4 py-2">Model</th>
              <th className="px-4 py-2">Tokens</th>
              <th className="px-4 py-2">Cost</th>
            </tr>
          </thead>
          <tbody>
            {taskBreakdown.map((item, index) => (
              <tr key={index}>
                <td className="border px-4 py-2">{item.task}</td>
                <td className="border px-4 py-2">{item.model}</td>
                <td className="border px-4 py-2">{item.tokens}</td>
                <td className="border px-4 py-2">${item.cost.toFixed(2)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div>
        <h2 className="text-lg font-semibold mb-2">Cost by Model</h2>
        {/* Placeholder for Pie Chart */}
        <p>Pie chart will go here</p>
      </div>

      <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
        Export to CSV
      </button>
    </div>
  );
};

export default CostsDashboard;