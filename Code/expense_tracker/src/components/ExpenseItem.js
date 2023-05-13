import "./ExpenseItem.css";

function ExpenseItem() {

  const expenseDate=new Date(2023,4,10);
  const expenseName ="Car Insuarnce";
  const expensePrice = 294.67;
  return (
    <div className="expense-item">
      <div>{expenseDate.toLocaleDateString()}</div>
      <div className="expense-item__description">
        <h2>{expenseName}</h2>
        <div className="expense-item__price">${expensePrice}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
