// console.log("Hi....");


// Question#1
// function getTime() {
//     var timenow = new Date();
//     console.log(timenow);
// }
// getTime();

//Question#2
// function getName() {
//     var firstName = prompt("Enter your first name");
//     var lastName = prompt("Enter your last name");
//     var fullName = firstName + " " + lastName;
//     console.log(fullName);
// }
// getName();

// Question#3
// function sum() {
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Ente second number ");
//     var result = num1 + num2;
//     console.log(result);
// }
// sum();


// Question#4
// function calculate() {
//     var num1 = +prompt("Enter first number");
//     var num2 = +prompt("Enter second number");
//     var opt = prompt("Enter your operator")
//     if(opt === "+"){
//         console.log(num1 + num2)
//     }
//     else if(opt === "-"){
//         console.log(num1 - num2)
//     }
//     else if(opt === "*"){
//         console.log(num1 * num2)
//     }
//     else if(opt === "/"){
//         console.log(num1 / num2)
//     }
//     else if(opt === "%"){
//         console.log(num1 % num2)
//     }
//     else{
//         alert("Enter a valid operator")
//     }
// }
// calculate();


// / Question#5
// function square(num1){
//     var result = num1 * num1;
//     console.log(result)
// }
// square(4)


// / Question#6
// function facrorialize() {
//     var num = +prompt("Enter your number");
//     if(num === 0 || num === 1)
//     return 1;
//     for(var i = num - 1; i >= 1; i-- ){
//         num = num * i
//     }
//     console.log(num);
//     return num;

// }
// facrorialize();


// / Question#7

// function Counting(){
//     var num1 = +prompt("Enter the starting number for counting");
//     var num2 = +prompt("Enter last number of counting");
//     for(var i = num1; i <= num2; i++){
//         document.write(i + "</br>" )
//     }
// }
// Counting();


// / Question#8
// Ask from sir


//Q9
// var h = 4;

// function calculateArea(width , h) {
// var area = width * h;
// return area
// }
// var r = calculateArea(5, h);
// console.log("Area is " + " " + r +" " + "square.meters")



// / Question#10
// function checkPalindrome(string){
//     var len = string.length;
//     for (var i = 0; i < len / 2; i++){
//         if(string[i] !== string[len - 1 - i]){
//             return "It is not a palindrome"
//         }
//     }
//     return "It is a palindrome"
// }

// var string = prompt("Enter a string").toLocaleLowerCase()

// var value = checkPalindrome(string)
// console.log(value)

// / Question#11
// function upperCase(str){
//     var word = str.split(' ')
//     for (var i = 0; i < word.length; i++){
//         var firstLetter = word[i].charAt(0).toUpperCase();
//         var restOfLetters = word[i].slice(1);
//         word[i] = firstLetter + restOfLetters ;
//        }

//        var newStr = word.join(' ');
//        return newStr;
//     }

//     var str = prompt("Enter a string");
//     var result = upperCase(str);
//     console.log(result)

// / Question#12
// function findLongestWord(str1) {
// var word1 = str1.split(' ');
// var longestWord = " ";
// for(var i = 0; i < word1.length; i++){
//     if(word1[i].length > longestWord){
//         longestWord = word1[i];
//     }
// }
// console.log(longestWord)
// return longestWord;

// }
// findLongestWord("Hello how are");


// / Question#13
// function checkOccurance(str2 , letter){
//     var letter_count=0;
//     for(var i = 0; i < str2.length; i++){
//         if(str2.charAt(i) === letter){
//             letter_count += 1;
//         }
//     }
//     console.log(letter_count)
//     return letter_count
// }
// checkOccurance("How are you feeling today brother" , "o")


// / Question#14   PART-1
// function calcCicumference(radius){
//     var circumferenceOfCircle = 2 * Math.PI * radius;
//     console.log(circumferenceOfCircle)
//     return circumferenceOfCircle
// }
// var radius = +prompt("Enter radius")
// var result = calcCicumference(radius);



// / Question#14    PART-2
// function calcArea(radius){
//         var areaOfCircle =  Math.PI * radius * radius;
//         console.log(areaOfCircle)
//         return areaOfCircle
//     }
//     var radius = +prompt("Enter radius")
//     var result = calcArea(radius);