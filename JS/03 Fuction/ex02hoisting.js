// 호이스팅 : 선언문이 코드의 선두로
//           끌어올려진 것처럼 동작하는 현상

// 소스코드 처리 과정 : 평가 -> 실행
// 소스코드 평가 : 모든 선언문(변수, 함수 등) 등록
// 소스코드 실행

// 변수 호이스팅
console.log(lunchMenu);
// undefined -> 선언O,할당X
var lunchMenu ='수육';
console.log(lunchMenu);
// console.log(dinnerMenu);
// dinnerMenu is not defined -> 선언X

// 함수 호이스팅
// 함수가 만들어지기 전인 위에서도 실행됨
deFunc('위');
function deFunc(value) {
    console.log(value,'함수 선언문');
}
deFunc('아래');
// 함수 표현식 형태로 exFunc 함수 선언
// 함수 호이스팅 안일어남!!!
// exFunc('위'); 
const exFunc = function(value) {
    console.log(value,'함수표현식');
}
exFunc('아래');
