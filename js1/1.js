//ПЕРШЕ ЗАВДАННЯ

/* var chooseBigger = (a,b) =>{
if (a>b) {
    return a;
    }
else return b;
}
console.log(chooseBigger(1,2)); */


//ДРУГЕ ЗАВДАННЯ 


/* var arr = [1, 3, 6, 5, 11, 4, 2, 16, 21, 20];

var findMax = (array) => {
    var max = array[0];
    array.forEach(element => {
        if (max <= element) {
            max = element;
        }
    });
    return max;
}
var findMin = (array) => {
    var min = array[0];
    array.forEach(element => {
        if (min >= element) {
            min = element;
        }
    });
    return min;
}
console.log(findMax(arr));
console.log(findMin(arr)); */

//ТРЕТЄ ЗАВДАННЯ 

/* var array = [1, 3, 6, 5, 11, 4, 2, 16, 21, 20];
var filterArray = (array,minVal,maxVal) =>{
    var arr1 = [];
    for (let i = 0; i < array.length; i++) {
        const element = array[i];
        if (element < maxVal && element > minVal) {
            arr1.push(element);
        }
    }
    return arr1;
}
console.log(filterArray(array,1,21)); */

//ЧЕТВЕРТЕ ЗАВДАННЯ

/* function wordsCounter(str) { 
    var arr = [];
        var res = str.split(" ");
        res.forEach(element => {
            if(element.length !=0){
                arr.push(element);
            }
        });
    return arr.length;
    }
    console.log(wordsCounter("Hello,   from  Automaton team")); */
  
//П'ЯТЕ ЗАВДАННЯ
/* var calculator = {
    add: function(x, y) {
        return x + y;
    },
    subtraction: function (x, y) {
        return x - y;
    },
    multiply: function(x, y) {
        return x * y;
    },
    divide: function (x, y) {
        return x / y;
    }
};
console.log(calculator.add(4,10));
console.log(calculator.subtraction(4,10));
console.log(calculator.multiply(4,10));
console.log(calculator.divide(4,10));
console.log("x+x*5-y/2 = " + calculator.subtraction(calculator.add(4,calculator.multiply(4,5)),calculator.divide(10,2))); */

//ШОСТЕ ЗАВДАННЯ
/* 
var str = "Implement function that takes two parameters. First one is string, second one is Array of words. function should return Array of objects with 2 properties. First is Word, second is amount of times this word can be found in text. Be careful since word:Anna and anna is the same. you can use method .toLowerCase to make words similar.";
var array = ["is" , "function"];
function taskSix (str , array) {
    var arr = [];
    var counter = 0;
        array.forEach(element => {
            var position = 0;
            while (true) {
                var foundPos = str.indexOf(element.toLowerCase(), position);
                if (foundPos == -1) break;
                position = foundPos + 1; 
                counter ++;
            }
        var object = {Word: element, Number: counter};
        arr.push(object);
        counter = 0;
        });
return arr;
}
var result = taskSix(str , array);
result.forEach(element => {
    console.log(element.Word  + " " + element.Number);
}); */

//СЬОМЕ ЗАВДАННЯ

/* function isOdd (number) {
    return (number % 2 !== 0)
; 
}
function NumberInfo(number){
    return {
        Digit: number,
        IsOdd: function(){ return !(this.Digit % 2); }
    }
}
function taskSeven(array) {
   var arr = [];
   array.forEach(element => {
var obj= new NumberInfo(element);
arr .push(obj);

   });
   return arr;
}
var array = [1 , 2 ,3 ,4 ,5,221,222];
var mass = taskSeven(array);
mass.forEach(element => {
    console.log(element.Digit + " " + element.IsOdd())
}); */