'use strict';

function digitsOfNumber(number) {
    if (!Number.isInteger(number) || number < 0 || number > 999) {
        console.log('Укажите целое число от 0 до 999:');
        return {};
    }

    return {
        hundreds: Math.floor(number / 100),
        dozens: Math.floor(number / 10) % 10,
        units: number % 10, 
    }
}

console.log(digitsOfNumber(1001));
console.log(digitsOfNumber(123));
console.log(digitsOfNumber('1001'));