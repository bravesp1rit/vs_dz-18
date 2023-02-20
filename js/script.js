'use strict';

const padString = function (string, num, symbol, boolean = true){
    let result = string;
    let resultIfFalse = '';
    if (string === undefined || typeof string != 'string' || string.trim() === ''){
        return 'error, missing string';
    }
    if (num === undefined || typeof num  != 'number'){
        return 'error, missing number';
    }
    if (typeof boolean != 'boolean'){
        return 'error, is not boolean';
    }
    if (num < string.length && boolean){
        return string.substring(0, num);
    } else if (num < string.length && !boolean){
        return string.substring(string.length - num);
    }
    if (typeof symbol != 'string' || symbol.trim().length > 1){
        return 'error, symbol is not string or greater then 1';
    }
    if (string.length == num && boolean || string.length == num && !boolean){
        return result;
    }
    for (let i = string.length; i < num; ++i){
        if (boolean){
            result += symbol;
        } else {
            resultIfFalse += symbol;
            if(resultIfFalse.length + string.length == num){
                resultIfFalse += string;
                break;
            }
        }
    }
    if (boolean){
        return result;
    } else {
        return resultIfFalse;
    }
    
};
console.log(padString('hello', 3, '*', false));
console.log(padString('hello', 8, '`'));
console.log(padString('string', 3));
console.log(padString('qwerty', 3, '=', false));
console.log(padString('qwerty', 3, '='));
console.log(padString('qwerty', 10, '=', false));
console.log(padString('qwerty', 6, '=', false));