import { useEffect, useState } from "react";
import PropTypes from "prop-types";

import allExpenses from "../helper/allExpenses";
import ShowLeaderboard from "./ShowLeaderboard";
import Pagination from "./Pagination";

function HomeExpenses({ leaderboard }) {
  let rank = 0;
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expensesPerPage] = useState(8);

  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = expenses.slice(
    indexOfFirstExpense,
    indexOfLastExpense
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const email = localStorage.getItem("user");
    allExpenses(email, setExpenses, setLoading);
  }, []);
  return (
    <>
      {loading && (
        <div className="grow flex flex-col items-center text-[whitesmoke] px-2 sm:px-4 py-3">
          <div className="w-full grid grid-cols-3 text-lg">
            <div className="border break-words px-2 sm:py-2">Expense type</div>
            <div className="border break-words px-2 sm:py-2">Amount</div>
            <div className="border break-words px-2 sm:py-2">Description</div>
          </div>
          <div className="w-full flex flex-col text-base space-y-4">
            <div>
              {currentExpenses.map((expense) => {
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
            <div className="flex justify-center">
              <Pagination
                expensesPerPage={expensesPerPage}
                totalExpenses={expenses.length}
                paginate={paginate}
              />
            </div>
          </div>

          <Pagination />

          <ShowLeaderboard leaderboard={leaderboard} rank={rank} />
        </div>
      )}
    </>
  );
}

HomeExpenses.propTypes = {
  leaderboard: PropTypes.array,
};

export default HomeExpenses;
