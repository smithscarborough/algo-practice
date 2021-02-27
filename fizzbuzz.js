/* Write a program that accepts a number from the user,
and prints from 1 to that number.  But for multiples of 3, 
print 'Fizz' instead of the number; for multiples of 5, 
print 'Buzz' instead of the number; and for multiples of
both 3 and 5, print 'FizzBuzz' instead of the number. */

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