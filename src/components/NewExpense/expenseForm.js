import React, { useState } from "react";
import "./expenseForm.css";

const ExpenseForm = (props) => {
  // Cách 1
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Cách 2
  // const [userInput, setUserInput] = useState({
  //   setEnteredTitle: "",
  //   setEnteredAmount: "",
  //   setEnteredDate: "",
  // });

  const titleChangeHandler = (event) => {
    // Cách 1
    setEnteredTitle(event.target.value);

    // Cách 2
    // setUserInput({
    //   ...userInput,
    //   setEnteredTitle: event.target.value,
    // });

    // Trong trường hợp các giá trị phụ thuộc vào giá trị trước đó, truyền vào hàm cập nhật một function trả về chức năng đó
    // setUserInput((preUserInput) => {
    //   return {
    //     ...preUserInput,
    //     setEnteredTitle: event.target.value,
    //   };
    // });
  };
  const amountChangeHandler = (event) => {
    // Cách 1
    setEnteredAmount(event.target.value);

    // Cách 2
    // setUserInput({
    //   ...userInput,
    //   setEnteredAmount: event.target.value,
    // });
  };
  const dateChangeHandler = (event) => {
    // Cách 1
    setEnteredDate(event.target.value);

    // Cách 2
    // setUserInput({
    //   ...userInput,
    //   setEnteredDate: event.target.value,
    // });
  };

  // Alternative: Creating A Shared Handler Function(thay thế: chức năng xử lý chung)

  // const inputChangeHandler = (identifier, value) => {
  //   if (identifier === "title") {
  //     setEnteredTitle(value);
  //   } else if (identifier === "date") {
  //     setEnteredDate(value);
  //   } else {
  //     setEnteredAmount(value);
  //   }
  // };

  // Handling " form " submission :
  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount,
      date: new Date(enteredDate),
    };

    props.onSaveExpenseData(expenseData);

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            onChange={titleChangeHandler}
            value={enteredTitle}
            type="text"
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            onChange={amountChangeHandler}
            value={enteredAmount}
            type="number"
            min="0.01"
            step="0.01"
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            onChange={dateChangeHandler}
            value={enteredDate}
            type="date"
            min="2019-01-01"
            max="2022-12-31"
          />
        </div>
      </div>
      <div className="new-expense__actions">
        <button onClick={props.onChangeCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
// Phân tích Code
// import React, {useState} from 'react';

// import './styles.css';

// // don't change the Component name "App"
// export default function App() {

//     const [inputMessage, setInputMessage] = React.useState('Invalid message');

//     const checkMessageHandler = (event) => {
//        const value = event.target.value;
//        if(value.trim().length < 3) {
//            setInputMessage('Invalid message');
//        } else {
//            setInputMessage('Valid message');
//        }

//     }
//     return (
//         <form>
//             <label>Your message</label>
//             <input onChange = {checkMessageHandler} type="text" />
//             <p>{inputMessage}</p>
//         </form>
//     );
// }
