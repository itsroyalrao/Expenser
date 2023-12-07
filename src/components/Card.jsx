import PropTypes from "prop-types";
import { useState } from "react";
import onMobile from "../helper/onMobile";
import TodaysExpense from "./TodaysExpense";
import TotalExpense from "./TotalExpense";
import DailyExpense from "./DailyExpense";
import WeeklyExpense from "./WeeklyExpense";
import MonthlyExpense from "./MonthlyExpense";
import YearlyExpense from "./YearlyExpense";

function Card({ email, title, total, setTotal }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="bg-[#323232] h-72 rounded flex flex-col items-center py-2 relative">
      <div className="w-full flex justify-between px-4 pb-2 font-bold capitalize tracking-wide text-green-600">
        {title}
        {/* <div
          className={
            onMobile()
              ? showOptions
                ? "fas fa-times flex items-center"
                : "fas fa-ellipsis-v flex items-center"
              : showOptions
              ? "fas fa-times cursor-pointer px-[6px] hover:bg-gray-300 flex items-center rounded-full"
              : "fas fa-ellipsis-v cursor-pointer px-3 hover:bg-gray-300 flex items-center rounded-full"
          }
          onClick={() => setShowOptions(!showOptions)}
        /> */}
      </div>
      {/* {showOptions && (
        <div className="absolute right-0 top-10 bg-gray-300 p-3 rounded-s z-20">
          <div className="bg-red-600 p-2 text-white rounded">Remove card</div>
        </div>
      )} */}

      {title === "today's expense" ? (
        <TodaysExpense email={email} />
      ) : title === "total expense" ? (
        <TotalExpense email={email} total={total} setTotal={setTotal} />
      ) : title === "average daily expense" ? (
        <DailyExpense email={email} />
      ) : title === "average weekly expense" ? (
        <WeeklyExpense email={email} />
      ) : title === "average monthly expense" ? (
        <MonthlyExpense email={email} />
      ) : (
        <YearlyExpense email={email} />
      )}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  email: PropTypes.string,
  total: PropTypes.number,
  setTotal: PropTypes.func,
};

export default Card;
