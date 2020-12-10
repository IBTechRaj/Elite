import React from "react";
// import PropTypes from "prop-types";
import { connect } from "react-redux";
import Supplier from "../components/Supplier";
import "./SupplierList.css";

// import { removeBook, changeFilter } from "../actions";
// import CategoryFilter from "../components/CategoryFilter";

function mapStateToProps(state) {
  const { suppliers } = state;
  return { suppliers };
}

// const mapDispatchToProps = dispatch => ({
//   removeBook: id => dispatch(removeBook(id)),
//   changeFilter: value => dispatch(changeFilter(value)),
// });

const SupplierList = ({ suppliers }) => {
  // const handleFilterChange = e => {
  //   const { value } = e.target;
  //   changeFilter(value);
  // };

  // const filteredBooks = () =>
  //   filter === "All" ? books : books.filter(book => book.category === filter);

  return (
    <div className="container supplier-list">
      <h1>Suppliers</h1>
      <h3>Supplier Name Help Desk No Help Desk Email</h3>
      {/* <CategoryFilter handleChange={handleFilterChange} /> */}
      <div>
        {suppliers.map(supplier => (
          <Supplier key={supplier.id} supplier={supplier} />
        ))}
      </div>
    </div>
  );
};

// BooksList.propTypes = {
//   books: PropTypes.arrayOf(
//     PropTypes.shape({
//       id: PropTypes.number.isRequired,
//       title: PropTypes.string.isRequired,
//       category: PropTypes.string.isRequired
//     }).isRequired
//   ).isRequired,
//   removeBook: PropTypes.func.isRequired,
//   changeFilter: PropTypes.func.isRequired,
//   filter: PropTypes.string.isRequired
// };

export default connect(mapStateToProps)(SupplierList);
