<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Movie Cards with Async JS</title>
  <style>
    body { font-family: Arial, sans-serif; margin: 20px; }
    .container { display: flex; flex-wrap: wrap; gap: 20px; }
    .card {
      width: 200px;
      border: 1px solid #ccc;
      border-radius: 10px;
      box-shadow: 2px 2px 10px rgba(0,0,0,0.2);
      padding: 10px;
      text-align: center;
      background: #f9f9f9;
    }
    .card img { width: 100%; border-radius: 10px; }
    input, button { margin: 10px 0; padding: 8px; width: 200px; }
  </style>
</head>
<body>
  <h2>Movie Cards (Async API + Callback Demo)</h2>

  <input type="text" id="userInput" placeholder="Enter your name">
  <button onclick="getDataFromUser(displayUser)">Submit</button>
  <p id="callbackResult"></p>


  <div class="container" id="movieContainer"></div>

  <script>
    
    const movieApp = {
      apiKey: "demo", 
      container: document.getElementById("movieContainer"),
      
      
      fetchMovies: function(searchTerm) {
        console.log("'this' inside fetchMovies:", this);
        
        fetch(`https://www.omdbapi.com/?s=${searchTerm}&apikey=${this.apiKey}`)
          .then(response => response.json())
          .then(data => {
            console.log("Fetched Data:", data); // debugging
            if (data.Search) this.displayMovies(data.Search);
            else this.container.innerHTML = "<p>No movies found</p>";
          })
          .catch(error => console.error("Error fetching movies:", error));
      },

      
      displayMovies: function(movies) {
        this.container.innerHTML = ""; 
        movies.forEach(movie => {
          let card = document.createElement("div");
          card.className = "card";
          card.innerHTML = `
            <img src="${movie.Poster !== "N/A" ? movie.Poster : "https://via.placeholder.com/200x300"}" alt="Movie Poster">
            <h4>${movie.Title}</h4>
            <p>Year: ${movie.Year}</p>
          `;
          this.container.appendChild(card);
        });
      }
    };

    
    window.onload = function() {
      movieApp.fetchMovies("Avengers"); 
    }

    function getDataFromUser(callback) {
      let name = document.getElementById("userInput").value.trim();
      if (name === "") {
        alert("Please enter a name!");
        return;
      }
      
      setTimeout(() => {
        callback(name); 
      }, 500);
    }

    
    function displayUser(name) {
      document.getElementById("callbackResult").innerText = `Hello, ${name}! Welcome to Movie App 🎬`;
    }

  </script>
</body>
</html>
