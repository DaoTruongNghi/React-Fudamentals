import React, { useState } from "react";
import Card from "../UI/card";
// import ExpenseItem from "./expenseItem";
import ExpensesFilter from "./expensesFilter";
import ExpenseList from "./expenseList";
import ExpenseChart from "./expenseChart";
// import "./expense.css";

//para can be props
const Expense = (props) => {
  // console.log(expenses);
  // const expenses = props.expenses;

  //App. js: <Expense props = {expense}/>

  const [filteredYear, setFilteredYear] = useState(2020);

  //Thay vì tạo ra một state mới cho việc cập nhật mà nó đến từ 1 luồng,
  //ta có thể tạo một biến theo hình thức cũ và sử dụng nguồn vào của state hiện có, tính toán động.
  let filterTextInfo = "2019, 2021 & 2022";

  if (filteredYear === "2019") {
    filterTextInfo = "2020, 2021 & 2022";
  } else if (filteredYear === "2021") {
    filterTextInfo = "2019, 2020 & 2022";
  } else {
    filterTextInfo = "2019, 2020 &2021";
  }

  const filterExpenseHandler = (selectedYear) => {
    setFilteredYear(selectedYear);
    console.log(selectedYear);
  };

  const filteredExpenses = props.expenses.filter((expense) => {
    return expense.date.getFullYear().toString() === filteredYear;
  });

  return (
    <Card className="expense">
      <ExpensesFilter
        selected={filteredYear}
        onChangeFilter={filterExpenseHandler}
      />
      <ExpenseChart expenses={filteredExpenses} />
      <p>Data for years {filterTextInfo} is hidden.</p>
      <ExpenseList items={filteredExpenses} />
    </Card>
  );
};
export default Expense;

/* <ExpenseItem
    title={expenses[0].title}
    amount={expenses[0].amount}
    date={expenses[0].date}
  />

  <ExpenseItem
    title={expenses[1].title}
    amount={expenses[1].amount}
    date={expenses[1].date}
  />

  <ExpenseItem
    title={expenses[2].title}
    amount={expenses[2].amount}
    date={expenses[2].date}
  />

  <ExpenseItem
    title={expenses[3].title}
    amount={expenses[3].amount}
    date={expenses[3].date}
  /> */
