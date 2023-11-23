import PropTypes from "prop-types";
import { useEffect } from "react";
import totalExpense from "../helper/totalExpense";

function TotalExpense({ email, total, setTotal }) {
  useEffect(() => {
    totalExpense(email, setTotal);
  }, [email, setTotal]);

  return (
    <>
      {total && (
        <div className="w-full grow flex flex-col">
          <div className="w-full flex justify-between items-center bg-blue-500 text-white px-4 py-2">
            <div className="flex justify-center items-center">
              <div>Amount &nbsp; = &nbsp;</div>
              <div className="fas fa-inr text-base tracking-wider">{total}</div>
            </div>
            <div className="fas fa-sort"></div>
          </div>
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
