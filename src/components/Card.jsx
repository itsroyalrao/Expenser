import PropTypes from "prop-types";
import onMobile from "../helper/onMobile";
import { useState } from "react";

function Card({ title }) {
  const [showOptions, setShowOptions] = useState(false);

  return (
    <div className="bg-[whitesmoke] h-72 rounded flex flex-col items-center relative">
      <div className="w-full flex justify-between px-4 py-2 capitalize">
        {title}
        <div
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
        />
      </div>
      {showOptions && (
        <div className="absolute right-0 top-10 bg-gray-300 p-3 rounded-s">
          <div className="bg-red-600 p-2 text-white rounded">Remove card</div>
        </div>
      )}
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
  showPopup: PropTypes.bool,
  setShowPopup: PropTypes.func,
};

export default Card;
