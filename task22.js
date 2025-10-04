import React, { useState } from "react";
import PropTypes from "prop-types";


const DisplayData = ({ title, data }) => {
  return (
    <div style={{ border: "1px solid #ccc", padding: "10px", margin: "10px 0" }}>
      <h3>{title}</h3>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </div>
  );
};

// Default Props
DisplayData.defaultProps = {
  title: "Default Title",
  data: {}
};


DisplayData.propTypes = {
  title: PropTypes.string,
  data: PropTypes.oneOfType([PropTypes.object, PropTypes.array])
};


const App = () => {
  
  const [employees, setEmployees] = useState([
    { name: "Alice", age: 25, salary: 50000 },
    { name: "Bob", age: 30, salary: 60000 },
    { name: "Charlie", age: 28, salary: 55000 }
  ]);

  
  const updateEmployee = () => {
    const newEmployees = [...employees];
    newEmployees[2] = { ...newEmployees[2], name: "Chuck", salary: 58000 };
    setEmployees(newEmployees);
  };

  
  const [product, setProduct] = useState({
    name: "Laptop",
    price: 1000,
    stock: 10,
    category: "Electronics"
  });

  
  const updateProduct = () => {
    setProduct(prev => ({
      ...prev,
      price: prev.price + 200,
      stock: prev.stock - 3
    }));
  };


  const [dataTypes, setDataTypes] = useState({
    stringVar: "Hello",
    numberVar: 42,
    booleanVar: true,
    arrayVar: [1, 2, 3],
    objectVar: { a: 1, b: 2 },
    nullVar: null,
    undefinedVar: undefined
  });

  return (
    <div style={{ padding: "20px" }}>
      <h2>React State & Props Example</h2>

      {/* Array of objects */}
      <button onClick={updateEmployee}>Update 3rd Employee</button>
      <DisplayData title="Employees Array" data={employees} />

      {/* Object state */}
      <button onClick={updateProduct}>Update Product</button>
      <DisplayData title="Product Object" data={product} />

      {/* Various Data Types */}
      <DisplayData title="State with Different Data Types" data={dataTypes} />
    </div>
  );
};

export default App;
