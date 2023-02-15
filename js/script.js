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
    if (num < string.length && boolean === true){
        result = string.substring(0, num);
        return result;
    } else if (num < string.length && boolean === false){
        resultIfFalse = string.substring(string.length - num);
        return resultIfFalse;
    }
    if (symbol.length > 1){
        return 'error, symbol length is greater then 1';
    }
    if (string.length == num && boolean === true){
        result = string;
        return result;
    } else if (string.length == num && boolean === false){
        resultIfFalse = string;
        return resultIfFalse;
    }
    
    for (let i = string.length; i < num; ++i){
        if (boolean === true){
            result += symbol;
        } else {
            resultIfFalse += symbol;
            if(resultIfFalse.length + string.length == num){
                resultIfFalse += string;
                break;
            }
        }
    }
    if (boolean === true){
        return result;
    } else {
        return resultIfFalse;
    }
    
};
console.log(padString('hello', 3, '*', false));
console.log(padString('hello', 8, '`'));
console.log(padString('string', 3));