import PropTypes from "prop-types";
import onMobile from "../helper/onMobile";

function Card({ title }) {
  return (
    <div className="bg-[whitesmoke] h-72 rounded flex flex-col items-center">
      <div className="w-full flex justify-between px-4 py-2 capitalize">
        {title}
        <div
          className={
            onMobile()
              ? "fas fa-ellipsis-v flex items-center"
              : "fas fa-ellipsis-v cursor-pointer px-2 hover:bg-gray-300 flex items-center rounded-full"
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
