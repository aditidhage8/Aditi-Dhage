<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>DOM, BOM, Hoisting Example</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .container { display: flex; gap: 20px; }
    .card {
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
      padding: 15px;
      text-align: center;
      background: #f9f9f9;
    }
    .card img { width: 100%; border-radius: 10px; }
  </style>
</head>
<body>
  <h2>3 Cards Created Using JS (DOM + BOM + Hoisting)</h2>
  <div class="container" id="cardContainer"></div>

  <script>
    showMessage();

    function showMessage() {
      console.log("✅ Hoisting Example: Function can be called before declaration!");
    }

   
    alert("Welcome! Your screen width is: " + window.innerWidth + "px");

    let cardData = [
      { title: "Card 1", img: "https://via.placeholder.com/200x120", desc: "This is the first card." },
      { title: "Card 2", img: "https://via.placeholder.com/200x120", desc: "This is the second card." },
      { title: "Card 3", img: "https://via.placeholder.com/200x120", desc: "This is the third card." }
    ];

    let container = document.getElementById("cardContainer");

    for (let i = 0; i < cardData.length; i++) {
      let card = document.createElement("div");
      card.className = "card";

     
      card.innerHTML = `
        <img src="${cardData[i].img}" alt="Card image">
        <h3>${cardData[i].title}</h3>
        <p>${cardData[i].desc}</p>
      `;

      
      container.appendChild(card);
    }
  </script>
</body>
</html>
