import React, { useState } from "react";
import logo from "./logo.svg";
// import ExpenseItem from "./components/expenseItem";
import Expense from "./components/Expense/expense";
import NewExpense from "./components/NewExpense/newExpense";
import "./App.css";

const DUMMY_EXPENSES = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  {
    id: "e2",
    title: "New TV",
    amount: 799.49,
    date: new Date(2021, 2, 12),
  },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

const App = () => {
  const [expenses, setExpenses] = useState(DUMMY_EXPENSES);

  const addNewExpenseHandler = (expense) => {
    // console.log("In App.js");
    // console.log(enteredNewExpenseData);

    setExpenses((prevExpenses) => {
      return [...prevExpenses, expense];
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <div>
        <NewExpense onNewExpenseData={addNewExpenseHandler} />
        <Expense expenses={expenses} />
      </div>
      {/* transform */}
      {/* React.createElement('div', {}, 
      React.createElement(Expense, {expenses={expenses}})
      ); */}
      {/* Trước đây trong React phải dùng thao tác nhập vì nó trông như thế này, bây giờ trong modern React, sử dụng JSX và nó tự động biến đối sau hậu trường thành như trên và thậm chí hơn thế nữa trong trình duyệt */}
    </div>
  );
};

export default App;
