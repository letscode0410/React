import "./ExpenseItem.css";
import ExpenseDate from "./ExpenseDate";
import Card from "./Card"

function ExpenseItem(props) {

  const month = props.date.toLocaleDateString('en-US',{month:'long'});
  const day = props.date.toLocaleDateString('en-US',{day:'2-digit'});
  const year = props.date.getFullYear();
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date}/>
      <div className="expense-item__description">
        <h2>{props.name}</h2>
        <div className="expense-item__price">${props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
