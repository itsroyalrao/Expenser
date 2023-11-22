import PropTypes from "prop-types";

function Card({ title }) {
  return (
    <div className="bg-white h-72 rounded flex justify-center">
      <div className="w-full flex justify-between px-4 py-3 capitalize">
        {title}
        <div className="fas fa-ellipsis-v"></div>
      </div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
