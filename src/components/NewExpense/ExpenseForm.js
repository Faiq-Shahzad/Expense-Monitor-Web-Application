import { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [titleVal, setTitleVal] = useState("");
  const [amountVal, setAmountVal] = useState();
  const [dateVal, setDateVal] = useState();

  const titleChangeHandler = (event) => {
    setTitleVal(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setAmountVal(event.target.value);
  };

  const dateChangeHandler = (event) => {
    setDateVal(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      title: titleVal,
      amount: +amountVal,
      date: new Date(dateVal),
    };

    props.onSaveExpenseData(expenseData);

    setTitleVal("");
    setAmountVal("");
    setDateVal("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" value={titleVal} onChange={titleChangeHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={amountVal}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2022-12-31"
            value={dateVal}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="cancel" onClick={props.onCancel}>
            Cancel
          </button>
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
