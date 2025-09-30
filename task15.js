<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Conditional Statements Example</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .box { margin-bottom: 20px; padding: 10px; border: 1px solid #333; border-radius: 5px; }
    button { margin-top: 10px; }
  </style>
</head>
<body>
  <h2>Conditional Statements in JavaScript</h2>

  <!-- 1. Multiple of 3 -->
  <div class="box">
    <h4>1. Check if number is multiple of 3</h4>
    <input type="number" id="numInput" placeholder="Enter a number">
    <button onclick="checkMultiple()">Check</button>
    <p id="multipleResult"></p>
  </div>

  <!-- 2. Substring exists -->
  <div class="box">
    <h4>2. Check if sub-word exists in string</h4>
    <input type="text" id="mainString" placeholder="Enter main string"><br><br>
    <input type="text" id="subWord" placeholder="Enter sub word">
    <button onclick="checkSubstring()">Check</button>
    <p id="substringResult"></p>
  </div>

  <!-- 3. Simple "Complex" Interest -->
  <div class="box">
    <h4>3. Calculate Interest ((P/R) * T) / 100</h4>
    <input type="number" id="p" placeholder="Enter Principal"><br><br>
    <input type="number" id="r" placeholder="Enter Rate"><br><br>
    <input type="number" id="t" placeholder="Enter Time"><br><br>
    <button onclick="calculateInterest()">Calculate</button>
    <p id="interestResult"></p>
  </div>

  <script>
    
    function checkMultiple() {
      let num = document.getElementById("numInput").value;
      if (num % 3 === 0) {
        document.getElementById("multipleResult").innerText = num + " is a multiple of 3.";
      } else {
        document.getElementById("multipleResult").innerText = num + " is NOT a multiple of 3.";
      }
    }

    
    function checkSubstring() {
      let mainStr = document.getElementById("mainString").value;
      let sub = document.getElementById("subWord").value;
      
      if (mainStr.includes(sub)) {
        document.getElementById("substringResult").innerText = "'" + sub + "' exists in the string.";
      } else {
        document.getElementById("substringResult").innerText = "'" + sub + "' does NOT exist in the string.";
      }
    }

   
    function calculateInterest() {
      let p = parseFloat(document.getElementById("p").value);
      let r = parseFloat(document.getElementById("r").value);
      let t = parseFloat(document.getElementById("t").value);

      if (isNaN(p) || isNaN(r) || isNaN(t)) {
        document.getElementById("interestResult").innerText = "Please enter valid numbers!";
      } else {
        let interest = ((p / r) * t) / 100;
        document.getElementById("interestResult").innerText = "Calculated Interest = " + interest.toFixed(2);
      }
    }
  </script>
</body>
</html>
