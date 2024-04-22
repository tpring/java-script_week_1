// 형 변환
// 현태 -> 바꾼다.
// 명시적 형 변환, 암시적 형 변환

//1. 임시적 
// 1-1 문자열
let result1 = 1 + "2";   // "12"
//console.log(result1);
//console.log(typeof result1)

let result2 = "1" + true;   // "1true"
//console.log(result2);
//console.log(typeof result2)

//{}, null, undefined + "1" => 문자열

// 1-2. 슷자
let result3 = 1 - "2"; //-1
//console.log(result3);
//console.log(typeof result3)

let result4 = "2" * "3"; //6
//console.log(result4);
//console.log(typeof result4)

//2. 명시적 형 변환
//2-1. bollean(불리언)
console.log(Boolean(0));   // false
console.log(Boolean(""));   // false
console.log(Boolean(null));   // false
console.log(Boolean(undefined));   // false
console.log(Boolean(NaN));   // false
console.log(Boolean("false"));   // true
console.log(Boolean({}));   // true

//2-2 문자열
let result5 = String(123)
console.log(result5);       // "123"

let result6 = String(true)
console.log(result6);      // "true"

let result7 = String(false)
console.log(result7);     // "false"

let result8 = String(null)
console.log(result8);      // "null"

let result9 = String(undefined)
console.log(result9); // "undefined"

let result10 = String({})
console.log(result10);        // "[object Object]"

//1-3 Number
let result11 = Number("123");
console.log(result11); //"123"