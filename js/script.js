'use strict';

const padString = function (string, strLength, symbol, right = true) {
    let result = string;
    let resultIfFalse = '';
    if (typeof string != 'string' || string.trim() === '') return 'error, missing string';
    if (typeof strLength != 'number') return 'error, missing number';
    if (typeof right != 'boolean') return 'error, is not right';
    
    if (strLength < string.length && right) {
        return string.substring(0, strLength);
    } else if (strLength < string.length && !right) {
        return string.substring(string.length - strLength);
    }
    if (string.length == strLength && right || string.length == strLength && !right) {
        return result;
    }
    if (typeof symbol != 'string') return 'error, symbol is not string';
    if (symbol.trim().length > 1) return 'error, symbol greater then 1';
    for (let i = string.length; i < strLength; ++i) {
        if (right) {
            result += symbol;
        } else {
            resultIfFalse += symbol;
            if (resultIfFalse.length + string.length == strLength) {
                resultIfFalse += string;
                break;
            }
        }
    }
    if (right) return result;
    return resultIfFalse;
    

};
console.log(padString('hello', 3, '*', false));
console.log(padString('hello', 10, '`'));
console.log(padString('string', 3));
console.log(padString('qwerty', 3, '=', false));
console.log(padString('qwerty', 3, '='));
console.log(padString('qwerty', 10, '=', false));
console.log(padString('qwerty', 6, '=', false));