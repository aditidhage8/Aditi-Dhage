import React, { useState } from "react";
import PropTypes from "prop-types";
const EmployeeList = ({ employees }) => {
  return (
    <div>
      <h3>Employee List</h3>
      {employees.map((emp, index) => (
        <div key={index} style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
          <p><strong>Name:</strong> {emp.name}</p>
          <p><strong>Age:</strong> {emp.age}</p>
          <p><strong>Salary:</strong> ${emp.salary}</p>
          <p><strong>Designation:</strong> {emp.designation}</p>
        </div>
      ))}
    </div>
  );
};


class ProductCard extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      product: props.product
    };
  }

  updateProduct = () => {
    this.setState(prevState => ({
      product: {
        ...prevState.product,
        price: prevState.product.price + 50,
        stock: prevState.product.stock - 1
      }
    }));
  };

  render() {
    const { product } = this.state;
    return (
      <div style={{ border: "1px solid #333", padding: "10px", marginTop: "20px" }}>
        <h3>Product Details</h3>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <button onClick={this.updateProduct}>Update Product</button>
      </div>
    );
  }
}

ProductCard.defaultProps = {
  product: { name: "Default Product", price: 0, stock: 0, category: "General" }
};

ProductCard.propTypes = {
  product: PropTypes.shape({
    name: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    stock: PropTypes.number.isRequired,
    category: PropTypes.string
  })
};


const App = () => {
  
  const [employees] = useState([
    { name: "Alice", age: 25, salary: 50000, designation: "Developer" },
    { name: "Bob", age: 30, salary: 60000, designation: "Designer" },
    { name: "Charlie", age: 28, salary: 55000, designation: "Tester" }
  ]);

  
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 1000,
    stock: 10,
    category: "Electronics"
  });

  const updateProduct = () => {
    setProduct(prev => ({
      ...prev,
      price: prev.price + 100,
      stock: prev.stock - 2
    }));
  };

  return (
    <div style={{ padding: "20px" }}>
      <h2>React ES6: State, Props, Components Example</h2>

      {/* Employee List */}
      <EmployeeList employees={employees} />

      {/* Product Card (Class Component) */}
      <ProductCard product={product} />

      {/* Product Update (Functional Component example with useState) */}
      <div style={{ border: "1px solid #666", padding: "10px", marginTop: "20px" }}>
        <h3>Functional Product Update</h3>
        <p><strong>Name:</strong> {product.name}</p>
        <p><strong>Price:</strong> ${product.price}</p>
        <p><strong>Stock:</strong> {product.stock}</p>
        <p><strong>Category:</strong> {product.category}</p>
        <button onClick={updateProduct}>Update Product</button>
      </div>
    </div>
  );
};

export default App;
