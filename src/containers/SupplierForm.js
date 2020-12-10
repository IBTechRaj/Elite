import React from "react";
import { connect } from "react-redux";
// import PropTypes from 'prop-types';
import { createSupplier } from "../actions";
import "./SupplierForm.css";

const CATEGORIES = [
  "Action",
  "Biography",
  "History",
  "Horror",
  "Kids",
  "Learning",
  "Sci-Fi"
];

class SupplierForm extends React.Component {
  constructor() {
    super();
    this.state = { name: "", hdNumber: "", hdMail: "" };
  }

  handleChange = e => {
    const { name, value } = e.target;
    this.setState({
      [name]: value
    });
  };

  handleSubmit = e => {
    e.preventDefault();
    const { name, hdNumber, hdMail } = this.state;
    const { createSupplier } = this.props;

    if (name && hdNumber && hdMail) {
      createSupplier(name, hdNumber, hdMail);
      this.setState({
        name: "",
        hdNumber: "",
        hdMail: ""
      });
    }
  };

  render() {
    const { name, hdNumber, hdMail } = this.state;

    return (
      <div className="supplier-form">
        <div className="ab-title"> ADD SUPPLIER </div>
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="name"
            value={name}
            onChange={this.handleChange}
            placeholder="Supplier Name"
          />
          <input
            type="text"
            name="hdNumber"
            value={hdNumber}
            onChange={this.handleChange}
            placeholder="HelpDesk Number"
          />
          <input
            type="text"
            name="hdMail"
            value={hdMail}
            onChange={this.handleChange}
            placeholder="HelpDesk Email"
          />
          {/* </label> */}
          {/* <select
            name="category"
            value={category}
            onChange={this.handleChange}
            id=""
          >
            <option defaultValue="">Choose a category</option>
            {CATEGORIES.map(category => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select> */}
          <button type="submit" value="ADD SUPPLIER" className="add-suplier">
            Add Book{" "}
          </button>
        </form>
      </div>
    );
  }
}

// BooksForm.propTypes = {
//   createBook: PropTypes.func.isRequired,
// };

export default connect(null, { createSupplier })(SupplierForm);
