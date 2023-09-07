/*. Write a program that asks the user for a number. If the number is even, print "The number is even." Otherwise, print "The number is odd."*/

let number = prompt("enter any number  from 0 to 10");
if(number%2 == 0)
console.log("The number is even ")

else 
console.log("The number is odd")




/*2. Write a program that asks the user for two numbers. If the first number is greater than the second number, print "The first number is greater than the second number." Otherwise, print "The second number is greater than the first number."*/

let number1 = prompt("Enter the first number");
let number2 = prompt("Enter the second number");

if
(number1 > number2)
console.log("Number1 is greater than number2")

else
console.log("number1 is smaller than number2")





/*3. Write a program that asks the user for a number.
 If the number is less than 10, print "The number is less than 10.
 " Otherwise, print "The number is greater than or equal to 10."*/

let Number = prompt("Enter any number")

if
(Number < 10)
console.log("The number is less than 10 ")

else
console.log("The number is greater than or equal to 10")




/*4. Write a program that prints the numbers from 1 to 10.*/

/*function number1to10(){
for (let i=1 ; 1 <= 10 ; i++ ){

console.log("i") } 
 } 
     number1to10() */    /* Server is laggign*/




/*5. Write a program that prints the even numbers from 1 to 10.
for(i=1; i<=20;i)*/

function printEvenNumbers(){
    for (let n = 2; n <= 10; n += 2 )
    {
        console.log(n);
    }
}
    printEvenNumbers();
    


  /*  6. Write a program that prints the odd numbers from 1 to 10.*/
function printOddnumbers()
{
 for (let o = 1; o <= 10; o += 2)
    {
        console.log(o);
    }
}
printOddnumbers();
