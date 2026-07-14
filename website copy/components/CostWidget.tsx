"use client";

import React, { useState, useEffect } from 'react';

const CostWidget = () => {
  const [currentCost, setCurrentCost] = useState(0);

  useEffect(() => {
    // Fetch real-time cost data here (e.g., from local storage or an API)
    // For now, using placeholder data
    setCurrentCost(1.25);
  }, []);

  return (
    <div className="fixed bottom-4 right-4 bg-white shadow-md rounded-md p-2">
      Current Session Cost: ${currentCost.toFixed(2)}
    </div>
  );
};

export default CostWidget;