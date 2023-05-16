import "./ExpenseForm.css";
import { useState } from 'react'

const ExpenseForm = () => {

  const [name, setName] = useState('');
  const [price, setPrice] = useState('');
  const [date, setDate] = useState('');

  const onNameChangeHander = (event) => {
    console.log(event);
    setName(event.target.value);
  };
  const onPriceChangeHander = (event) => {
    setPrice(event.target.value);
  };
  const onDateChangeHander = (event) => {
    setDate(event.target.value);
  };
  const onExpenseSubmit = (event) => {
    event.preventDefault();
    const expenseData = {
      name: name,
      price: price,
      date: new Date(date)
    }
    console.log(expenseData);
    setName(' ');
    setPrice(' ');
    setDate(' ');
  }
  return (
    <form onSubmit={onExpenseSubmit}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Name</label>
          <input type="text" value={name} onChange={onNameChangeHander} />
        </div>
        <div className="new-expense__control">
          <label>Price</label>
          <input type="number" value={price} min="0.01" step="0.01" onChange={onPriceChangeHander} />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input type="date" value={date} min="2019-01-01" max="2023-12-31" onChange={onDateChangeHander} />
        </div>
      </div>
      <div className="new-expense__actions">
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
