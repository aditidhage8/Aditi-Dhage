<!DOCTYPE html>
<html>
<head>
    <title>JS Objects & Arrays Example</title>
</head>
<body>
    <h2>JavaScript Objects & Arrays Demo</h2>
    <p id="firstThree"></p>

    <script>
        // 1. Create an object for animal, car
        let animal = {
            name: "Dog",
            type: "Mammal",
            sound: "Bark"
        };

        let car = {
            brand: "Tesla",
            model: "Model S",
            year: 2024
        };

        console.log("Animal:", animal);
        console.log("Car:", car);

        // 2. Find duplicate characters in a string (optional)
        let str = "programming";
        let chars = str.split('');
        let duplicates = chars.filter((item, index) => chars.indexOf(item) !== index);
        console.log("Duplicate characters:", [...new Set(duplicates)]);

        // 3. Reverse a string (use array method)
        let strToReverse = "JavaScript";
        let reversed = strToReverse.split('').reverse().join('');
        console.log("Reversed string:", reversed);

        // 4. Find highest and lowest value in array
        let numbers = [45, 12, 78, 23, 89, 4];
        let highest = Math.max(...numbers);
        let lowest = Math.min(...numbers);
        console.log("Highest value:", highest);
        console.log("Lowest value:", lowest);

        // 5. Sorting of an array (optional)
        let sortedArray = [...numbers].sort((a, b) => a - b);
        console.log("Sorted Array:", sortedArray);

        // 6. Display first 3 elements in UI
        let firstThree = numbers.slice(0, 3);
        document.getElementById("firstThree").innerText = "First 3 Elements: " + firstThree.join(", ");

        // 7. Remove 4th element (index 3) and add 2 new elements there
        let fruits = ["Apple", "Banana", "Cherry", "Mango", "Orange"];
        console.log("Before splice:", fruits);
        fruits.splice(3, 1, "Grapes", "Pineapple"); // remove Mango, add Grapes & Pineapple
        console.log("After splice:", fruits);
    </script>
</body>
</html>
