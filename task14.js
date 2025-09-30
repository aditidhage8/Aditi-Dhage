<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>JavaScript Functions Demo</title>
  
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet">
  <style>
    #myDiv {
      width: 200px;
      height: 100px;
      border: 2px solid black;
      margin: 20px 0;
      text-align: center;
      line-height: 100px;
      font-weight: bold;
    }
  </style>
</head>
<body onload="pageOnLoad()">

  <div class="container mt-4">
    <h2>JavaScript Examples</h2>
    <p id="dateDisplay"></p>
    <p id="mathResult"></p>

    <div id="myDiv">I am a Div</div>
    <button class="btn btn-primary" onclick="setDivBackground('lightblue')">Set Div Background</button>
    <button class="btn btn-success" onclick="randomBackground()">Random Body Color</button>
  </div>

  
  <div class="modal fade" id="myModal" tabindex="-1" aria-hidden="true">
    <div class="modal-dialog">
      <div class="modal-content">
        <div class="modal-header">
          <h5 class="modal-title">Welcome!</h5>
          <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
        </div>
        <div class="modal-body">
        </div>
        <div class="modal-footer">
          <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Close</button>
        </div>
      </div>
    </div>
  </div>

  
  <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"></script>

  <script>
   
    function multiplyThree(a, b, c) {
      return a * b * c;
    }

   
    function divideNumbers(a, b) {
      if (b === 0) return "Error: Division by zero!";
      return a / b;
    }

   
    function setDivBackground(color) {
      document.getElementById("myDiv").style.backgroundColor = color;
    }

    
    function randomBackground() {
      let r = Math.floor(Math.random() * 256);
      let g = Math.floor(Math.random() * 256);
      let b = Math.floor(Math.random() * 256);
      document.body.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;
    }

    
    function pageOnLoad() {
      
      let today = new Date();
      document.getElementById("dateDisplay").innerHTML = "Today's Date: " + today;

     
      let product = multiplyThree(2, 3, 4);
      let division = divideNumbers(10, 2);
      document.getElementById("mathResult").innerHTML =
        "Multiply 2×3×4 = " + product + "<br>" +
        "Divide 10 ÷ 2 = " + division;

      let myModal = new bootstrap.Modal(document.getElementById('myModal'));
      myModal.show();
    }
  </script>
</body>
</html>
