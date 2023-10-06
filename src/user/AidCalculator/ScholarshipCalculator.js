import React, { useState } from 'react';

const ScholarshipCalculator = () => {
  const [income, setIncome] = useState('');
  const [expenses, setExpenses] = useState('');
  const [scholarshipPercentage, setScholarshipPercentage] = useState(null);

  const calculateScholarship = () => {

    const incomeFloat = parseFloat(income);
    const expensesFloat = parseFloat(expenses);

    if (!isNaN(incomeFloat) && !isNaN(expensesFloat)) {
      const scholarshipPercentage = ((incomeFloat - expensesFloat) / incomeFloat) * 100;
      setScholarshipPercentage(scholarshipPercentage.toFixed(2)); // Rounded to 2 decimal places
    }
  };

  return (
    <div>
      <h2>Scholarship Percentage Calculator</h2>
      <div>
        <label>Annual Income:</label>
        <input
          type="number"
          value={income}
          onChange={(e) => setIncome(e.target.value)}
        />
      </div>
      <div>
        <label>Annual Expenses:</label>
        <input
          type="number"
          value={expenses}
          onChange={(e) => setExpenses(e.target.value)}
        />
      </div>
      <button onClick={calculateScholarship}>Calculate</button>
      {scholarshipPercentage !== null && (
        <div>
          <p>Scholarship Percentage: {scholarshipPercentage}%</p>
        </div>
      )}
    </div>
  );
};

export default ScholarshipCalculator;
