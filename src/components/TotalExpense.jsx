import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import allExpenses from "../helper/allExpenses";

function TotalExpense({ email, total, setTotal }) {
  const [showExpenses, setShowExpenses] = useState([]);
  console.log(showExpenses);

  useEffect(() => {
    allExpenses(email, setTotal, setShowExpenses, "totalExpense");
  }, [email, setTotal]);

  return (
    <>
      {total && (
        <div className="w-full grow flex flex-col overflow-hidden relative">
          <div className="w-full flex justify-between items-center bg-blue-500 text-white px-4 py-2 sticky top-0">
            <div className="flex justify-center items-center">
              <div>Amount &nbsp; = &nbsp;</div>
              <div className="fas fa-inr text-base tracking-wider">{total}</div>
            </div>
            <div className="fas fa-sort"></div>
          </div>
          <Link
            to={"/totalExpensePage"}
            className="grid px-5 py-2 cursor-pointer"
          >
            <div className="w-full grid grid-cols-3">
              <div className="border px-2 overflow-hidden">S.no</div>
              <div className="border px-2 overflow-hidden">Amount</div>
              <div className="border px-2 overflow-hidden">Type</div>
            </div>
            {showExpenses.map((expense, i) => (
              <div key={expense._id} className="grid grid-cols-3">
                <div className="border px-2 overflow-hidden">{i + 1 + "."}</div>
                <div className="border px-2 overflow-hidden">
                  {expense.amount}
                </div>
                <div className="border px-2 overflow-hidden">
                  {expense.expenseType}
                </div>
              </div>
            ))}
          </Link>
        </div>
      )}
    </>
  );
}

TotalExpense.propTypes = {
  email: PropTypes.string,
  total: PropTypes.number,
  setTotal: PropTypes.func,
};

export default TotalExpense;
