import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "./Budget.css";

function BudgetTracker() {
  const [budget, setBudget] = useState("");
  const [expense, setExpense] = useState("");
  const [category, setCategory] = useState("");
  const [expenses, setExpenses] = useState([]);
  const [balance, setBalance] = useState(0);

  const handleBudgetChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setBudget(value);
    }
  };

  const handleExpenseChange = (e) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setExpense(value);
    }
  };

  const handleCategoryChange = (e) => {
    setCategory(e.target.value);
  };

  const addExpense = () => {
    if (expense > 0 && category.trim() !== "") {
      // Update the expenses array with the new expense
      const newExpense = { amount: expense, category };
      setExpenses([...expenses, newExpense]);

      // Clear the input fields
      setExpense("");
      setCategory("");
    }
  };

  const deleteExpense = (index) => {
    const updatedExpenses = [...expenses];
    updatedExpenses.splice(index, 1);
    setExpenses(updatedExpenses);
  };

  useEffect(() => {
    // Calculate total expenses
    const totalExpenses = expenses
      .map((exp) => exp.amount)
      .reduce((acc, curr) => acc + curr, 0);

    // Calculate the balance
    const updatedBalance = budget - totalExpenses;
    setBalance(updatedBalance);
  }, [budget, expenses]);

  return (
    <div class="cccontainerbudget">
      <h1>Budget Tracker</h1>
      <div class="budget">
        <label htmlFor="budget" className="sset">
          Set Budget : Rs{" "}
        </label>
        <input
          type="text"
          id="budget"
          value={budget}
          onChange={handleBudgetChange}
          className="input-field"
        />
      </div>
      <br></br>
      <div class="budget">
        <label htmlFor="expense" className="exxp">
          Expense Amt : Rs{" "}
        </label>
        <input
          type="text"
          id="expense"
          value={expense}
          onChange={handleExpenseChange}
          className="input-field"
        />
        <br></br>
        <br></br>
        <label htmlFor="category" className="cca">
          Category :{" "}
        </label>
        <select
          id="category"
          value={category}
          onChange={handleCategoryChange}
          className="select-field"
        >
          <option value="">Select Category</option>
          <option value="Food">Food</option>
          <option value="Transportation">Transportation</option>
          <option value="Accommodation">Accommodation</option>
          <option value="Shopping">Shopping</option>
          <option value="Flights">Flights</option>
          <option value="Groceries">Groceries</option>
          <option value="Gas">Gas</option>
          <option value="Others">Others</option>
        </select>
        <br></br>
        <br></br>
      </div>
      <button onClick={addExpense}> Add Expense</button>
      <br></br>
      <div class="container111">
        <h2>Expenses</h2>
        <ul>
          {expenses.map((exp, index) => (
            <li key={index} className="lisstt">
              Rs {exp.amount} ({exp.category}){" "}
              <button onClick={() => deleteExpense(index)}> Delete </button>
            </li>
          ))}
        </ul>
        <h2>Remaining Budget: Rs {balance}</h2>
      </div>
      <Link to="/">
        <button className="ll">close </button>
      </Link>
    </div>
  );
}
export default BudgetTracker;
