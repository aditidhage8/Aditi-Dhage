<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Form Validation Example</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    form { max-width: 500px; margin: auto; }
    label { display: block; margin-top: 15px; }
    input, select { width: 100%; padding: 8px; margin-top: 5px; }
    .error { color: red; font-size: 0.9em; }
    button { margin-top: 20px; padding: 10px 20px; }
  </style>
</head>
<body>
  <h2>Form with Validation</h2>

  <form id="myForm" onsubmit="return validateForm()">
    <!-- Name -->
    <label>Name:</label>
    <input type="text" id="name" placeholder="Enter your name">
    <span class="error" id="nameError"></span>

    <!-- Email -->
    <label>Email:</label>
    <input type="text" id="email" placeholder="Enter your email">
    <span class="error" id="emailError"></span>

    <!-- Contact -->
    <label>Contact Number:</label>
    <input type="text" id="contact" placeholder="Enter 10-digit contact">
    <span class="error" id="contactError"></span>

    <!-- Age -->
    <label>Age:</label>
    <input type="number" id="age" placeholder="Enter your age">
    <span class="error" id="ageError"></span>

    <!-- Designation -->
    <label>Designation:</label>
    <input type="text" id="designation" placeholder="Enter your designation">
    <span class="error" id="designationError"></span>

    <!-- Multiple Files -->
    <label>Upload Files:</label>
    <input type="file" id="files" multiple>
    <span class="error" id="filesError"></span>

    <!-- Date of Birth -->
    <label>Date of Birth:</label>
    <input type="date" id="dob">
    <span class="error" id="dobError"></span>

    <button type="submit">Submit</button>
  </form>

  <script>
    function validateForm() {
     
      document.querySelectorAll(".error").forEach(e => e.innerText = "");

      let isValid = true;

      
      let name = document.getElementById("name").value.trim();
      if (!/^[A-Za-z ]{2,}$/.test(name)) {
        document.getElementById("nameError").innerText = "Enter valid name (letters only)";
        isValid = false;
      }

    
      let email = document.getElementById("email").value.trim();
      if (!/^[a-zA-Z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$/.test(email)) {
        document.getElementById("emailError").innerText = "Enter valid email";
        isValid = false;
      }

     
      let contact = document.getElementById("contact").value.trim();
      if (!/^\d{10}$/.test(contact)) {
        document.getElementById("contactError").innerText = "Enter valid 10-digit contact number";
        isValid = false;
      }

     
      let age = parseInt(document.getElementById("age").value);
      if (isNaN(age) || age < 1 || age > 120) {
        document.getElementById("ageError").innerText = "Enter valid age (1-120)";
        isValid = false;
      }

     
      let designation = document.getElementById("designation").value.trim();
      if (!/^[A-Za-z ]{2,}$/.test(designation)) {
        document.getElementById("designationError").innerText = "Enter valid designation";
        isValid = false;
      }

      let files = document.getElementById("files").files;
      if (files.length === 0) {
        document.getElementById("filesError").innerText = "Please select at least one file";
        isValid = false;
      }

      let dob = document.getElementById("dob").value;
      if (dob === "") {
        document.getElementById("dobError").innerText = "Please select DOB";
        isValid = false;
      }

      if (isValid) {
        alert("Form submitted successfully!");
      }

      return false; 
    }
  </script>
</body>
</html>
