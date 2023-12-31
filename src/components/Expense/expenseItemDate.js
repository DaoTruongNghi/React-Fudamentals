import React from "react";
import "./expenseItemDate.css";

const ExpenseItemDate = (props) => {
  if (!props.date) {
    return <div className="expense-date">Ngày không hợp lệ</div>;
  }

  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();

  return (
    <div className="expense-date">
      <div className="expense-date__month">{month}</div>
      <div className="expense-date__year">{year}</div>
      <div className="expense-date__day">{day}</div>
    </div>
  );
};
export default ExpenseItemDate;
