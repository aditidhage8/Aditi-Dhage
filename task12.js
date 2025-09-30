
let str1 = ' gfuh ieiuei ';

// 1. Extract first five letters from a string
let firstFive = str1.trim().substring(0, 5);
console.log("First five letters:", firstFive); 
// 2. Get the length of a string and make it uppercase
let str2 = 'hduej dij';
console.log("Length:", str2.length);
console.log("Uppercase:", str2.toUpperCase());

// 3. Take a string, make it lowercase and trim it
let str3 = ' biji jdo ';
let lowerTrimmed = str3.toLowerCase().trim();
console.log("Lowercase + Trimmed:", lowerTrimmed);

// 4. Replace specified word in a string
let sentence = "I love JavaScript";
let replacedSentence = sentence.replace("JavaScript", "Python");
console.log("After replace:", replacedSentence);

// NUMBER
let num1 = 42;
let num2 = Number("56"); 
console.log("Number sum:", num1 + num2);

// BOOLEAN
let isJavaScriptFun = true;
let explicitBool = Boolean(1); 
console.log("Boolean value:", isJavaScriptFun, explicitBool);

// 5. Random implicit coercion statement
let result = 89 + 'hello' + 90 / 9; 
// 90/9 = 10 → 89 + 'hello' → '89hello' + 10 → '89hello10'
console.log("Implicit coercion result:", result);

// EXPLICIT COERCION EXAMPLES
let strNumber = "123";
let convertedNum = Number(strNumber); 
console.log("Converted Number:", convertedNum);

let boolValue = false;
let convertedString = String(boolValue);
console.log("Converted String:", convertedString);
    