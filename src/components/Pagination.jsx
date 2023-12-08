import PropTypes from "prop-types";

function Pagination({ expensesPerPage, totalExpenses, paginate }) {
  const pageNumbers = [];
  for (let i = 1; i <= Math.ceil(totalExpenses / expensesPerPage); i++) {
    pageNumbers.push(i);
  }

  return (
    <>
      <div className="flex bg-green-600">
        {pageNumbers.map((page) => (
          <div key={page}>
            <div
              className="text-2xl text-white px-5 py-3 border hover:bg-white hover:text-green-600 cursor-pointer"
              onClick={() => paginate(page)}
            >
              {page}
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

Pagination.propTypes = {
  expensesPerPage: PropTypes.any,
  totalExpenses: PropTypes.any,
  paginate: PropTypes.any,
};

export default Pagination;
