// 변수 : 데이터를 담을 공간
let num = 3;
/*
let -> 변수 선언 키워드
num -> 변수 이름
3 -> 변수에 할당된 값
*/

// 변수 선언
let num2;
// 변수에 값 할당
num2 = 5;
/*
재선언 : 같은 변수 이름으로 다시 변수를 선언하는 것
재할당 : 선언된 변수에 다시 값을 할당하는 것
*/

// var : 재선언 O, 재할당 O
var var1 =1;
console.log('var 최초 선언',var1);
var var1 =2;
console.log('var 다시 선언',var1);
var1 =3;
console.log('var 값 업데이트',var1);

// let : 재선언 X, 재할당 O
let let1 = 1;
console.log('let 최초 선언',let1);
// let let1 =2;
let1 = 2;
console.log('let 값 업데이트',let1);

// const : 재선언 X, 재할당 X
const con1 = 1;
console.log('const 최초 선언',con1);
// const con1 = 2;
// con1 = 2;
