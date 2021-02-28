/* Write a program that accepts a number from the user,
and prints from 1 up to that number, but for multiples of 3, 
prints 'Fizz' instead of the number; for multiples of 5, 
prints 'Buzz' instead of the number; and for multiples of
both 3 and 5, prints 'FizzBuzz' instead of the number. */

number = prompt('Please enter a number to use for FizzBuzz: ');

for (var i = 1; i <= number; i++) {
    if (i % 3 === 0 && i % 5 === 0) {
        console.log('FizzBuzz');
    } else if (i % 3 === 0) {
        console.log('Fizz');
    } else if (i % 5 === 0) {
        console.log('Buzz');
    } else {
        console.log(i);
    }
}