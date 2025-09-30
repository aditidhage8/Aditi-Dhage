<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <title>Advanced JS Example (ES6)</title>
</head>
<body>
  <h2>Advanced JavaScript (ES6) Examples</h2>
  <script>
    
    const numbers = [5, 12, 25, 30, 18, 8];

    const firstGreaterThan20 = numbers.find(num => num > 20);
    const firstLessThan20 = numbers.find(num => num < 20);

    console.log("First number > 20:", firstGreaterThan20); 
    console.log("First number < 20:", firstLessThan20);    

    
    const users = [
      {id: 1, name: "Alice"},
      {id: 2, name: "Bob"},
      {id: 3, name: "Charlie"},
      {id: 4, name: "David"}
    ];

    const filterId = 3; 
    const userWithId = users.filter(user => user.id === filterId);

    console.log("User with ID 3:", userWithId);

    
    const arr = [90, 89, 56, 45];

    arr.forEach(num => {
      const type = (num % 2 === 0) ? "Even" : "Odd";
      console.log(num, "is", type);
    });

    
    
    const square = x => x * x;
    console.log("Square of 5:", square(5));

    
    const arr2 = [...numbers, 100, 200];
    console.log("Spread Array:", arr2);

    
    const sum = (...nums) => nums.reduce((acc, curr) => acc + curr, 0);
    console.log("Sum using rest operator:", sum(1, 2, 3, 4));

    
    console.log("Any number > 50:", numbers.some(num => num > 50));
    console.log("All numbers < 50:", numbers.every(num => num < 50));

    
    class Person {
      constructor(name, age) {
        this.name = name;
        this.age = age;
      }
      greet = () => console.log(`Hello, my name is ${this.name} and I am ${this.age} years old.`);
    }

    const person1 = new Person("Alice", 25);
    person1.greet();

  </script>
</body>
</html>
