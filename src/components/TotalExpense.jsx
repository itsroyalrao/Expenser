import PropTypes from "prop-types";
import { useEffect } from "react";
import { Link } from "react-router-dom";

import totalExpense from "../helper/totalExpense";

function TotalExpense({ email, total, setTotal }) {
  useEffect(() => {
    totalExpense(email, setTotal);
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
            className="grid gap-1 p-2 cursor-pointer"
          >
            <div className="bg-slate-600 p-2 rounded">one</div>
            <div className="bg-slate-600 p-2 rounded">two</div>
            <div className="bg-slate-600 p-2 rounded">three</div>
            <div className="bg-slate-600 p-2 rounded">four</div>
            <div className="bg-slate-600 p-2 rounded">five</div>
            <div className="bg-slate-600 p-2 rounded">six</div>
            <div className="bg-slate-600 p-2 rounded">seven</div>
            <div className="bg-slate-600 p-2 rounded">eight</div>
            <div className="bg-slate-600 p-2 rounded">nine</div>
            <div className="bg-slate-600 p-2 rounded">ten</div>
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
