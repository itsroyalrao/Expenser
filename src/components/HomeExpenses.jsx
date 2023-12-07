import { useEffect, useState } from "react";
import allExpenses from "../helper/allExpenses";

function HomeExpenses() {
  const [expenses, setExpenses] = useState(null);
  const [amount, setAmount] = useState(null);

  useEffect(() => {
    const email = localStorage.getItem("user");
    allExpenses(email, setAmount, setExpenses);
  }, []);
  return (
    <>
      {expenses && (
        <div className="grow flex flex-col items-center text-[whitesmoke] px-2 sm:px-4 py-3">
          <div className="w-full grid grid-cols-3 text-lg">
            <div className="border break-words px-2 sm:py-2">Expense type</div>
            <div className="border break-words px-2 sm:py-2">Amount</div>
            <div className="border break-words px-2 sm:py-2">Description</div>
          </div>
          <div className="w-full flex flex-col text-base">
            {expenses.map((expense) => {
              return (
                <div key={expense._id} className="w-full grid grid-cols-3">
                  <div className="border break-words px-2 sm:py-2">
                    {expense.expenseType}
                  </div>
                  <div className="border break-words px-2 sm:py-2">
                    {expense.amount}
                  </div>
                  <div className="border break-words px-2 sm:py-2">
                    {expense.description ? expense.description : "Expense"}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default HomeExpenses;
