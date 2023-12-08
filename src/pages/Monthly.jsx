import { useEffect, useState } from "react";
import Header from "../components/Header";
import axios from "axios";
import Pagination from "../components/Pagination";

function Monthly() {
  const [expenses, setExpenses] = useState([]);
  const [loading, setLoadong] = useState(false);
  const [currentPage, setCurrentPage] = useState(1);
  const [expensesPerPage, setExpensesPerPage] = useState(10);

  const indexOfLastExpense = currentPage * expensesPerPage;
  const indexOfFirstExpense = indexOfLastExpense - expensesPerPage;
  const currentExpenses = expenses.slice(
    indexOfFirstExpense,
    indexOfLastExpense
  );

  const paginate = (pageNumber) => setCurrentPage(pageNumber);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await axios.get(
          "https://jsonplaceholder.typicode.com/posts"
        );
        console.log(response);
        setExpenses(response.data);
        setLoadong(true);
      } catch (e) {
        console.log(e);
      }
    };
    fetchPosts();
  }, []);
  return (
    <>
      <div className="w-full min-h-[100svh] flex flex-col">
        <Header />
        {loading ? (
          <div className="flex flex-col bg-[#242424]">
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2 p-3">
              <>
                {currentExpenses.map((expense) => (
                  <div
                    key={expense.id}
                    className="grow bg-[#393939] p-3 flex flex-col items-center text-[whitesmoke] rounded"
                  >
                    <div>ID - {expense.id}</div>
                    <div>UserId - {expense.userId}</div>
                    <div>Title - {expense.title}</div>
                    <div>Body - {expense.body}</div>
                  </div>
                ))}
              </>
            </div>
            <div className="flex justify-center mb-4">
              <Pagination
                expensesPerPage={expensesPerPage}
                totalExpenses={expenses.length}
                paginate={paginate}
              />
            </div>
          </div>
        ) : (
          <div className="grow bg-[#242424] flex justify-center items-center text-3xl text-[whitesmoke]">
            List is empty
          </div>
        )}
      </div>
    </>
  );
}

export default Monthly;
