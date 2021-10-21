import "./ExpenseItem.css";

function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-US", { month: "long" });
  const day = props.date.toLocaleString("en-US", { day: "2-digit" });
  const year = props.date.getFullYear();
  // const expenseDate = new Date(2021, 2, 28);
  // const expenseTitle = "Car Insurance";
  // const expenseAmount = 200.25;
  return (
    <div className="expense-item">
      {/* <div>{props.date.toISOString()}</div> */}
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{day}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <p className="expense-item__price">{props.amount}</p>
      </div>
    </div>
    // <div className="expense-item">
    //   <div>{expenseDate.toISOString()}</div>
    //   <div className="expense-item__description">
    //     <h2>{expenseTitle}</h2>
    //     <p className="expense-item__price">{expenseAmount}</p>
    //   </div>
    // </div>
  );
}

export default ExpenseItem;
