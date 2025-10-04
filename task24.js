import React, { Component, useState } from "react";
import { TextField, Button, Typography, Box } from "@mui/material";


class SignupForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: "",
      dob: "",
      contact: "",
      email: "",
      password: "",
      errors: {},
      submitted: false,
    };
  }

  validateForm = () => {
    const { name, age, dob, contact, email, password } = this.state;
    let errors = {};
    let isValid = true;

    if (!name) {
      errors.name = "Name is required";
      isValid = false;
    }
    if (!age || isNaN(age) || age < 18) {
      errors.age = "Valid age (18+) required";
      isValid = false;
    }
    if (!dob) {
      errors.dob = "Date of birth is required";
      isValid = false;
    }
    if (!contact || !/^[0-9]{10}$/.test(contact)) {
      errors.contact = "Valid 10-digit contact required";
      isValid = false;
    }
    if (!email || !/\S+@\S+\.\S+/.test(email)) {
      errors.email = "Valid email required";
      isValid = false;
    }
    if (!password || password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    this.setState({ errors });
    return isValid;
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };

  handleSubmit = (e) => {
    e.preventDefault();
    if (this.validateForm()) {
      this.setState({ submitted: true });
    }
  };

  render() {
    const { errors, submitted } = this.state;

    return (
      <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: "10px", mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Signup Form (Class Component)
        </Typography>
        <form onSubmit={this.handleSubmit}>
          <TextField
            fullWidth
            label="Name"
            name="name"
            onChange={this.handleChange}
            error={!!errors.name}
            helperText={errors.name}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Age"
            name="age"
            type="number"
            onChange={this.handleChange}
            error={!!errors.age}
            helperText={errors.age}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Date of Birth"
            name="dob"
            type="date"
            InputLabelProps={{ shrink: true }}
            onChange={this.handleChange}
            error={!!errors.dob}
            helperText={errors.dob}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Contact"
            name="contact"
            onChange={this.handleChange}
            error={!!errors.contact}
            helperText={errors.contact}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            onChange={this.handleChange}
            error={!!errors.email}
            helperText={errors.email}
            sx={{ mb: 2 }}
          />
          <TextField
            fullWidth
            label="Password"
            name="password"
            type="password"
            onChange={this.handleChange}
            error={!!errors.password}
            helperText={errors.password}
            sx={{ mb: 2 }}
          />
          <Button type="submit" variant="contained" color="primary">
            Signup
          </Button>
        </form>
        {submitted && (
          <Typography color="green" sx={{ mt: 2 }}>
            ✅ Form is submitted!
          </Typography>
        )}
      </Box>
    );
  }
}

function LoginForm() {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [errors, setErrors] = useState({});
  const [submittedData, setSubmittedData] = useState(null);

  const validateForm = () => {
    let errors = {};
    let isValid = true;

    if (!formData.email || !/\S+@\S+\.\S+/.test(formData.email)) {
      errors.email = "Valid email required";
      isValid = false;
    }
    if (!formData.password || formData.password.length < 6) {
      errors.password = "Password must be at least 6 characters";
      isValid = false;
    }

    setErrors(errors);
    return isValid;
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateForm()) {
      setSubmittedData(formData);
    }
  };

  return (
    <Box sx={{ p: 3, border: "1px solid #ccc", borderRadius: "10px" }}>
      <Typography variant="h5" gutterBottom>
        Login Form (Function Component)
      </Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          fullWidth
          label="Email"
          name="email"
          onChange={handleChange}
          error={!!errors.email}
          helperText={errors.email}
          sx={{ mb: 2 }}
        />
        <TextField
          fullWidth
          label="Password"
          name="password"
          type="password"
          onChange={handleChange}
          error={!!errors.password}
          helperText={errors.password}
          sx={{ mb: 2 }}
        />
        <Button type="submit" variant="contained" color="secondary">
          Login
        </Button>
      </form>
      {submittedData && (
        <Box sx={{ mt: 2 }}>
          <Typography variant="body1">✅ User Data:</Typography>
          <Typography>Email: {submittedData.email}</Typography>
          <Typography>Password: {submittedData.password}</Typography>
        </Box>
      )}
    </Box>
  );
}


function App() {
  return (
    <div style={{ padding: "20px", maxWidth: "500px", margin: "auto" }}>
      <SignupForm />
      <LoginForm />
    </div>
  );
}

export default App;
