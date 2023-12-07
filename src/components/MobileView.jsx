import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { displayRazorpay } from "../helper/displayRazorpay";

function MobileView({ clicked, setClicked }) {
  return (
    <div className="flex justify-between items-center bg-[rgb(0,94,72)] px-5 py-4 sticky top-0 text-lg">
      <div className="text-xl font-bold tracking-wide">Xpenser</div>
      <div className="flex flex-col items-center pr-2">
        <i
          className={
            clicked ? "fas fa-times scale-125" : "fas fa-bars scale-125"
          }
          onClick={() => setClicked(!clicked)}
        />
        {clicked && (
          <div className="w-[75%] h-full flex flex-col space-y-2 fixed top-[60px] right-0 bg-[#121212] p-3">
            <Link to={"/"} className="flex items-center space-x-2 p-2 rounded">
              <i className="fas fa-home" />
              <div className="capitalize">Home</div>
            </Link>
            <Link
              to={"/daily"}
              className="flex items-center space-x-2 p-2 rounded"
            >
              <i className="fas fa-clock" />
              <div className="capitalize">Daily</div>
            </Link>
            <Link
              to={"/weekly"}
              className="flex items-center space-x-2 p-2 rounded"
            >
              <i className="fas fa-redo" />
              <div className="capitalize">Weekly</div>
            </Link>
            <Link
              to={"/monthly"}
              className="flex items-center space-x-2 p-2 rounded"
            >
              <i className="fas fa-calendar" />
              <div className="capitalize">Monthly</div>
            </Link>
            {/* <Link
              to={"/total"}
              className="flex items-center space-x-2 p-2 rounded"
            >
              <i className="fas fa-calculator" />
              <div className="capitalize">Total</div>
            </Link> */}
            <Link
              className="flex justify-center text-[whitesmoke] bg-blue-600 px-3 py-2 rounded active:bg-blue-700"
              onClick={() => {
                displayRazorpay();
              }}
            >
              Upgrade
            </Link>
            <Link
              to={"/login"}
              className="flex justify-center text-[whitesmoke] bg-red-600 px-3 py-2 rounded active:bg-red-700"
            >
              Logout
            </Link>
          </div>
        )}
      </div>
    </div>
  );
}

MobileView.propTypes = {
  clicked: PropTypes.bool,
  setClicked: PropTypes.func,
};

export default MobileView;
