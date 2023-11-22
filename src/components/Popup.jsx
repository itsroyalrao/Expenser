import PropTypes from "prop-types";
import onMobile from "../helper/onMobile";

function Popup({ showPopup, setShowPopup }) {
  return (
    <div className="w-[100dvw] h-[100dvh] fixed top-0 flex justify-center items-center z-20">
      <div
        className={
          onMobile()
            ? "bg-gray-300 w-[90%] h-[60%] p-[5%] pt-[10%] shadow-lg shadow-gray-600 flex flex-col justify-between items-center rounded relative md:w-[60%] md:h-[90%]"
            : "bg-gray-300 w-[80%] sm:w-[60%] md:w-[50%] lg:w-[40%] xl:w-[30%] 2xl:w-[20%] h-[70%] px-12 pt-12 pb-6 shadow-lg shadow-gray-600 flex flex-col justify-between items-center cursor-pointer rounded relative"
        }
      >
        <div
          className={
            onMobile()
              ? "fas fa-times scale-150 absolute top-3 right-3 bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 bg-clip-text text-transparent "
              : "fas fa-times scale-150 absolute top-3 right-3 cursor-pointer bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 bg-clip-text text-transparent "
          }
          onClick={() => setShowPopup(!showPopup)}
        />
        <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 bg-clip-text text-transparent font-bold text-2xl tracking-wide">
          Add expense
        </div>
        <div className="flex flex-col w-full space-y-1">
          <div className="flex flex-col w-full">
            <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 bg-clip-text text-transparent w-fit">
              Expense type
            </div>
            <input
              type="text"
              list="expenseTypes"
              className="w-full p-2 outline-none rounded focus:scale-105"
            />
            <datalist id="expenseTypes">
              <option value="food" />
              <option value="clothes" />
              <option value="travel" />
              <option value="fuel" />
            </datalist>
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 bg-clip-text text-transparent w-fit">
              Amount
            </div>
            <input
              type="number"
              className="w-full p-2 outline-none rounded focus:scale-105"
            />
          </div>
          <div className="flex flex-col w-full">
            <div className="bg-gradient-to-r from-blue-700 via-purple-700 to-orange-700 bg-clip-text text-transparent w-fit">
              Description
            </div>
            <textarea
              type="text"
              className="w-full p-2 outline-none rounded focus:scale-105"
            />
          </div>
        </div>
        <button
          className={
            onMobile()
              ? "w-full bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 p-2 flex justify-center text-[whitesmoke] text-lg font-bold tracking-wider rounded active:scale-105"
              : "w-full bg-gradient-to-br from-blue-600 via-purple-600 to-orange-600 p-2 flex justify-center text-[whitesmoke] text-lg font-bold tracking-wider rounded  hover:scale-105"
          }
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
};

export default Popup;
