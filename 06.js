// 연산자 (+, -, *, /, %)

//1. 더하기 연산자
console.log(1+1)          //2
console.log("2" + "3");   // "23"
console.log("2" + 3);     // "23"
console.log(2 + "3");     // "23"

//2. 빼기 연산자
console.log(5 - 2);       // 3
console.log("5" - "2");   // 3
console.log("5" - 2);     // 3
console.log(5 - "2");     // 3
console.log("five" - 2);  // NaN

//3. 곱하기 연산자
console.log(2 * 3);       // 6
console.log("2" * "3");   // 6
console.log("2" * 3);     // 6
console.log(2 * "3");     // 6
console.log("two" * 3);   // NaN

//4. 나누기 연산자
console.log(6 / 3);       // 2
console.log("6" / "3");   // 2
console.log("6" / 3);     // 2
console.log(6 / "3");     // 2
console.log("six" / 3);   // NaN

//할당 연산자(assignment operators)

//1. 등호 연산자(=)
let x = 10;
console.log(x);   // 10

//2. 더하기 등호 연산자(+=)

x += 5;
console.log(x);   // 15

