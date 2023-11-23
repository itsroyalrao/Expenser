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
        <div className="w-full grow flex justify-center items-center">
          <div className="fas fa-inr bg-green-600 text-white px-6 py-4 rounded-md">
            {" "}
            {total}
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
