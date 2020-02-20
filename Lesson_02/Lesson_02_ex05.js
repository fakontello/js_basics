'use strict';

/**
 * Функция складывает параметры
 * @param {number} a 
 * @param {number} b
 * @returns {number} 
 */
function getSum(a, b) {
    return a + b
}

/**
 * Функция вычитает параметры
 * @param {number} a 
 * @param {number} b
 * @returns {number} 
 */
function getSub(a, b) {
    return a - b
}

/**
 * Функция умножает параметры
 * @param {number} a 
 * @param {number} b
 * @returns {number} 
 */
function getMult(a, b) {
    return a * b
}

/**
 * Функция выполняет деление параметров
 * @param {number} a 
 * @param {number} b
 * @returns {number} 
 */
function getDivision(a, b) {
    return a / b
}

/**
 * Функция принимает два числа и осуществляет над ними математическую операцию
 * @param {number} arg1 
 * @param {number} arg2 
 * @param {string} operation может быть "+", "-", "/", "*"
 * @throws {Error}
 * @returns {number}
 */
function mathOperation(arg1, arg2, operation) {
    switch(operation) {
        case "+":
            return(getSum(arg1, arg2));
        case "-":
            return(getSub(arg1, arg2));
        case "*":
            return(getMult(arg1, arg2));
        case "/":
            return(getDivision(arg1, arg2));
        default:
            throw new Error("Операция " + operation + " не распознана");
    }
}

console.log(mathOperation(2, 4, "*"));
console.log(mathOperation(3, 6, "/"));
console.log(mathOperation(4, 8, "-"));
console.log(mathOperation(5, 10, "+"));
console.log(mathOperation(6, 12, "sdfsd"));