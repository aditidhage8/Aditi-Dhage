
let name = "Aditi";
let age = 21;

let sum = 5 + 10;   
let product = 5 * 4;
let assignExample = sum; 
console.log("Sum:", sum);
console.log("Product:", product);
console.log("Assign Example:", assignExample);


// 1. String - Number => NaN (because "A" can't be converted to a number)
console.log('A' - 1);

// 2. String + Number => String concatenation
console.log('A' + 1);

// 3. Number + String + String => Left to right: 2 + '2' => '22', then '22' + '2' => '222'
console.log(2 + '2' + '2'); 

// 4. String + String + Number => "helloworld" + 89 => "helloworld89"
console.log('hello' + 'world' + 89);

// 5. String - String => NaN (cannot subtract words), NaN + 89 => NaN
console.log('hello' - 'world' + 89); 

// 6. String + Number => String concatenation
console.log('hello' + 78);

// 7. '78' - 90 => Number(78) - 90 => -12, then -12 + '2' => "-122" (string)
console.log('78' - 90 + '2'); 

// 8. 2 - '2' => 0, then 0 + 90 => 90
console.log(2 - '2' + 90); 

// 9. '90'/2 => 45, then 89 - 45 => 44
console.log(89 - '90' / 2); 

// 10. true == false => false (false is 0), 0 > 2 => false
console.log((true == false) > 2); 
