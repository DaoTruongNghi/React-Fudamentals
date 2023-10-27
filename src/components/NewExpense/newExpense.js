import React, { useState } from "react";
import "./newExpense.css";
import ExpenseForm from "./expenseForm";
const NewExpense = (props) => {
  const [isEditing, setIsEditing] = useState(false);
  const saveExpenseDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };

    props.onNewExpenseData(expenseData);
  };

  const startEditingHandler = () => {
    setIsEditing(true);
  };

  const cancelEditingHandler = () => {
    setIsEditing(false);
  };
  return (
    <div className="new-expense">
      {!isEditing && (
        <button onClick={startEditingHandler}>Add New Expense</button>
      )}

      {isEditing && (
        <ExpenseForm
          onChangeCancel={cancelEditingHandler}
          onSaveExpenseData={saveExpenseDataHandler}
        />
      )}
    </div>
  );
};

export default NewExpense;
