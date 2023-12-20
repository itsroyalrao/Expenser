import PropTypes from "prop-types";
import { onMobile } from "../helper/onMobile";
import { useState } from "react";

import addExpense from "../helper/addExpense";

function Popup({ showPopup, setShowPopup, email, setTotal }) {
  const [expenseType, setExpenseType] = useState("");
  const [amount, setAmount] = useState("");
  const [description, setDescription] = useState("");

  return (
    <div
      className={
        onMobile()
          ? "w-[100dvw] h-[100svh] sm:min-h-fit fixed top-0 flex justify-center items-center z-20 overflow-auto"
          : "w-[100dvw] h-[100dvh] fixed top-0 flex justify-center items-center z-20 overflow-auto"
      }
    >
      <div
        className={
          onMobile()
            ? "bg-[#323232] w-[90%] h-[60%] p-[5%] sm:pt-[15%] flex flex-col justify-between items-center rounded sm:w-full sm:h-fit sm:space-y-2"
            : "bg-[#323232] w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] h-[70%] px-12 py-6 flex flex-col justify-between items-center cursor-pointer rounded"
        }
      >
        <div className="w-full flex justify-between items-center">
          <div className="text-green-600 font-bold text-2xl tracking-wide">
            Add expense
          </div>
          <div
            className={
              onMobile()
                ? "fas fa-times scale-150  text-green-600"
                : "fas fa-times scale-150 cursor-pointer text-green-600"
            }
            onClick={() => setShowPopup(!showPopup)}
          />
        </div>
        <div className="flex flex-col w-full space-y-1">
          <div className="flex flex-col w-full">
            <div className="text-green-600 w-fit">Expense type</div>
            <input
              type="text"
              list="expenseTypes"
              className="w-full p-2 outline-none bg-gray-300 rounded focus:scale-105"
              autoFocus
              value={expenseType}
              onChange={(e) => setExpenseType(e.target.value)}
            />
            <datalist id="expenseTypes">
              <option value="Food" />
              <option value="Clothes" />
              <option value="Travel" />
              <option value="Fuel" />
            </datalist>
          </div>
          <div className="flex flex-col w-full">
            <div className="text-green-600 w-fit">Amount</div>
            <input
              type="number"
              className="w-full p-2 outline-none bg-gray-300 rounded focus:scale-105"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="text-green-600 w-fit">Description</div>
            <textarea
              type="text"
              className="w-full p-2 outline-none bg-gray-300 rounded focus:scale-105"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            />
          </div>
        </div>
        <button
          className={
            onMobile()
              ? "w-full bg-green-600 p-2 flex justify-center text-[whitesmoke] text-lg font-bold tracking-wider rounded active:scale-105"
              : "w-full bg-green-600 p-2 flex justify-center text-[whitesmoke] text-lg font-bold tracking-wider rounded  hover:scale-105 focus:scale-105"
          }
          onClick={() => {
            addExpense(expenseType, amount, description, email, setTotal);

            setExpenseType("");
            setAmount("");
            setDescription("");
          }}
        >
          Save
        </button>
      </div>
    </div>
  );
}

Popup.propTypes = {
  showPopup: PropTypes.bool,
  setShowPopup: PropTypes.func,
  email: PropTypes.string,
  setTotal: PropTypes.func,
};

export default Popup;
