// 2. 문자열(String)(문자의 나열)

// '  ' = "  "
let name = 'Alice';
let message = "Hello, world!";

//2-1. 문자열 길이(length) 확인하기
let str = "Hello, world!";
console.log(str.length); // 13

//2-2. 문자열 결합(concatenation)
let str1 = "Hello, ";
let str2 = "world!";
let result = str1.concat(str2);
//console.log(result); // "Hello, world!"

//2-3. 문자열 자르기(substr, slice)
let str3 = "Hello, world!";
console.log(str3.substr(7, 5)); // "world"
console.log(str3.slice(7, 12)); // "world"

//2-4. 문자열 검색(search)
let st4 = "Hello, world1";
console.log(str4.search("world")); // 7

//2-5 문자열 대체(replace)
let str5 = "Hello, world!";
let result1 = str5.replace("world", "JavaScript");
console.log(result1); // "Hello, JavaScript!"

//2-6. 문자열 분할(split)
let str6 = "apple, banana, kiwi";
let result2 = str6.split(",");
console.log(result2); // ["apple", " banana", " kiwi"]