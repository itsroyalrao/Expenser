import PropTypes from "prop-types";
import onMobile from "../helper/onMobile";

function Card({ title }) {
  return (
    <div className="bg-[whitesmoke] h-72 rounded flex flex-col items-center">
      <div className="w-full flex justify-between px-4 py-3 capitalize">
        {title}
        <div
          className={
            onMobile()
              ? "fas fa-ellipsis-v px-2 flex items-center"
              : "fas fa-ellipsis-v cursor-pointer p-2 hover:bg-gray-300 hover:text-white flex items-center rounded-full"
          }
        ></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
