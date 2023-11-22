import PropTypes from "prop-types";

function Card({ title }) {
  return (
    <div className="bg-white h-72 rounded flex justify-center items-center">
      <div className="capitalize">{title}</div>
    </div>
  );
}

Card.propTypes = {
  title: PropTypes.string,
};

export default Card;
