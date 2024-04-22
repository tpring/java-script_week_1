//3. 불리언(Boolean)
//참(true)과 거짓(false)
let bool1 = true;
let bool2 = false;

console.log(bool1); // true
console.log(typeof bool1); // "boolean"

console.log(bool2); // false
console.log(typeof bool2); // "boolean"

//if : 나중에 살펴보기

//undefined (변수를 선언하고 값을 햘당 x )
let x;
console.log(x); // undefined

//null : 값이 존재하지 않음을 '명시적'으로 나타내는 방법
// null = undefined

let y = null;

//객체(Object)
let person = {
    name: 'Alice',
    age: 20,
    isMarried: true
 };

person.name // 'Alice'
person.age // 20

console.log(typeof person); // "Object"

//배열(Array)
let numbers = [1, 2, 3, 4, 5];
let fruits = ["apple", "banana", "orange"];