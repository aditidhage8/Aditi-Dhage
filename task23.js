import React, { useState, useRef } from 'react';
import { AppBar, Toolbar, Typography, Card, CardContent, CardActions, Button, Accordion, AccordionSummary, AccordionDetails, TextField } from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousel from 'react-bootstrap/Carousel';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  
  const [formData, setFormData] = useState({ name: '', email: '' });
  const [errors, setErrors] = useState({});

  
  const uncontrolledNameRef = useRef();
  const uncontrolledEmailRef = useRef();
  const [uncontrolledMessage, setUncontrolledMessage] = useState('');

  
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  
  const handleSubmit = (e) => {
    e.preventDefault();
    let tempErrors = {};
    if (!formData.name) tempErrors.name = 'Name is required';
    if (!formData.email) tempErrors.email = 'Email is required';
    else if (!/\S+@\S+\.\S+/.test(formData.email)) tempErrors.email = 'Email is invalid';

    setErrors(tempErrors);

    if (Object.keys(tempErrors).length === 0) {
      alert(`Controlled Form Submitted!\nName: ${formData.name}\nEmail: ${formData.email}`);
      setFormData({ name: '', email: '' });
    }
  };

  // Uncontrolled Form Submit
  const handleUncontrolledSubmit = (e) => {
    e.preventDefault();
    const name = uncontrolledNameRef.current.value;
    const email = uncontrolledEmailRef.current.value;
    if (!name || !email) {
      setUncontrolledMessage('All fields are required!');
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      setUncontrolledMessage('Invalid email format!');
    } else {
      setUncontrolledMessage(`Uncontrolled Form Submitted!\nName: ${name}\nEmail: ${email}`);
      uncontrolledNameRef.current.value = '';
      uncontrolledEmailRef.current.value = '';
    }
  };

  return (
    <div>
      {/* Header */}
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6">React UI Practice</Typography>
        </Toolbar>
      </AppBar>

      <div className="container mt-4">

        {/* Cards */}
        <div className="row mb-4">
          {[1, 2, 3].map((i) => (
            <div className="col-md-4 mb-3" key={i}>
              <Card>
                <CardContent>
                  <Typography variant="h5">Card Title {i}</Typography>
                  <Typography variant="body2">This is a simple card using Material UI.</Typography>
                </CardContent>
                <CardActions>
                  <Button size="small">Learn More</Button>
                </CardActions>
              </Card>
            </div>
          ))}
        </div>

        {/* Accordion */}
        {[1, 2].map((i) => (
          <Accordion key={i} className="mb-3">
            <AccordionSummary expandIcon={<ExpandMoreIcon />}>
              <Typography>Accordion Item {i}</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <Typography>This is the content of accordion item {i}.</Typography>
            </AccordionDetails>
          </Accordion>
        ))}

        {/* Carousel */}
        <Carousel className="mb-4">
          {[1, 2, 3].map((i) => (
            <Carousel.Item key={i}>
              <img className="d-block w-100" src={`https://via.placeholder.com/800x300?text=Slide+${i}`} alt={`Slide ${i}`} />
              <Carousel.Caption>
                <h3>Slide {i}</h3>
                <p>This is the description for slide {i}.</p>
              </Carousel.Caption>
            </Carousel.Item>
          ))}
        </Carousel>

        {/* Controlled Form */}
        <h4>Controlled Form</h4>
        <form onSubmit={handleSubmit} className="mb-4">
          <TextField
            fullWidth
            label="Name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            error={!!errors.name}
            helperText={errors.name}
            className="mb-3"
          />
          <TextField
            fullWidth
            label="Email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            error={!!errors.email}
            helperText={errors.email}
            className="mb-3"
          />
          <Button type="submit" variant="contained" color="primary">Submit</Button>
        </form>

        {/* Uncontrolled Form */}
        <h4>Uncontrolled Form</h4>
        <form onSubmit={handleUncontrolledSubmit} className="mb-4">
          <TextField
            fullWidth
            label="Name"
            inputRef={uncontrolledNameRef}
            className="mb-3"
          />
          <TextField
            fullWidth
            label="Email"
            inputRef={uncontrolledEmailRef}
            className="mb-3"
          />
          <Button type="submit" variant="outlined" color="secondary">Submit</Button>
        </form>
        {uncontrolledMessage && <Typography color="error" className="mb-3">{uncontrolledMessage}</Typography>}

      </div>

      {/* Footer */}
      <footer className="bg-dark text-white text-center py-3 mt-4">
        © 2025 React UI Practice. All rights reserved.
      </footer>
    </div>
  );
}

export default App;
