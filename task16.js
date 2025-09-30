<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Loops Examples</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .box { margin-bottom: 20px; padding: 10px; border: 1px solid #444; border-radius: 5px; }
    button { margin-top: 10px; }
  </style>
</head>
<body>
  <h2>Loops in JavaScript</h2>

  <!-- 1. Even numbers -->
  <div class="box">
    <h4>1. Display even numbers up to N</h4>
    <input type="number" id="evenInput" placeholder="Enter N">
    <button onclick="displayEvenNumbers()">Show</button>
    <p id="evenResult"></p>
  </div>

  <!-- 2. Vowel or Consonant -->
  <div class="box">
    <h4>2. Check vowel or consonant</h4>
    <input type="text" id="charInput" maxlength="1" placeholder="Enter a character">
    <button onclick="checkVowel()">Check</button>
    <p id="charResult"></p>
  </div>

  <!-- 3. Count even & odd numbers -->
  <div class="box">
    <h4>3. Count of even and odd numbers from 1 to 999</h4>
    <button onclick="countEvenOdd()">Count</button>
    <p id="countResult"></p>
  </div>

  <!-- 4. Count char occurrences -->
  <div class="box">
    <h4>4. Count occurrence of character in string</h4>
    <input type="text" id="mainStr" placeholder="Enter string"><br><br>
    <input type="text" id="searchChar" maxlength="1" placeholder="Enter character">
    <button onclick="countChar()">Count</button>
    <p id="charCountResult"></p>
  </div>

  <!-- 5. Sum and average of array -->
  <div class="box">
    <h4>5. Sum and Average of array elements [1, 9, 8]</h4>
    <button onclick="sumAndAvg()">Calculate</button>
    <p id="sumAvgResult"></p>
  </div>

  <!-- 6. Largest number in array -->
  <div class="box">
    <h4>6. Largest number in array [1, 9, 8]</h4>
    <button onclick="largestInArray()">Find</button>
    <p id="largestResult"></p>
  </div>

  <script>
    
    function displayEvenNumbers() {
      let n = parseInt(document.getElementById("evenInput").value);
      let result = [];
      for (let i = 2; i <= n; i++) {
        if (i % 2 === 0) result.push(i);
      }
      document.getElementById("evenResult").innerText = "Even numbers: " + result.join(", ");
    }

   
    function checkVowel() {
      let ch = document.getElementById("charInput").value.toLowerCase();
      let vowels = ['a', 'e', 'i', 'o', 'u'];
      if (vowels.includes(ch)) {
        document.getElementById("charResult").innerText = ch + " is a vowel.";
      } else {
        document.getElementById("charResult").innerText = ch + " is a consonant.";
      }
    }

    
    function countEvenOdd() {
      let evenCount = 0, oddCount = 0;
      for (let i = 1; i <= 999; i++) {
        if (i % 2 === 0) evenCount++;
        else oddCount++;
      }
      document.getElementById("countResult").innerText = 
        "Even Count: " + evenCount + ", Odd Count: " + oddCount;
    }

   
    function countChar() {
      let str = document.getElementById("mainStr").value;
      let search = document.getElementById("searchChar").value;
      let count = 0;
      for (let i = 0; i < str.length; i++) {
        if (str[i] === search) count++;
      }
      document.getElementById("charCountResult").innerText = 
        "Count of '" + search + "' = " + count;
    }

   
    function sumAndAvg() {
      let arr = [1, 9, 8];
      let sum = 0;
      for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
      }
      let avg = sum / arr.length;
      document.getElementById("sumAvgResult").innerText = 
        "Sum = " + sum + ", Average = " + avg;
    }

    
    function largestInArray() {
      let arr = [1, 9, 8];
      let largest = arr[0];
      for (let i = 1; i < arr.length; i++) {
        if (arr[i] > largest) {
          largest = arr[i];
        }
      }
      document.getElementById("largestResult").innerText = 
        "Largest number = " + largest;
    }
  </script>
</body>
</html>
