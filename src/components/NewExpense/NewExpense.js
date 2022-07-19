import { useState } from "react";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
  const [isVisible, setVisible] = useState(false);

  const saveExpenseHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      id: Math.random().toString(),
    };
    setVisible(false);
    props.onAddExpense(expenseData);
  };

  const showExpenseFormHandler = (event) => {
    setVisible(true);
  };

  const hideExpenseFormHandler = (event) =>{
    setVisible(false);
  }

  return (
    <div className="new-expense">
      {!isVisible ? (
        <button type="submit" onClick={showExpenseFormHandler}>
          Add New Expense
        </button>
      ) : (
        <ExpenseForm onSaveExpenseData={saveExpenseHandler} onCancel={hideExpenseFormHandler} />
      )}
    </div>
  );
};

export default NewExpense;
