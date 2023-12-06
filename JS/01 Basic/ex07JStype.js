// 1. number : 정수, 실수 등 산술 연산이 가능한 자료형
let num1 = 1.23;
let num2 = 5;
console.log('num1',num1);
console.log('num2',num2);

// 2. string : 문자열로 이루어진 자료형
let str1 ='JavaScript';
let str2 ='10';
console.log('str1',str1);
console.log('str2',str2);

// 2.1 Template literals(템플릿 리터럴)
// : 표현식 / 문자열 삽입, 여러줄 문자열 등 다양한 기능을 제공
//`(백틱)-> 1 왼쪽 물결과 함께 있는 기호
console.log('재미있는 시간 : '+str1 );
console.log(`재미있는 시간 : ${str1}`);
console.log(`안녕하세요.
반갑습니다.`);
console.log(`"I'm fine"`);

// 3. boolean : 참/거짓으로 표현되는 논리 형태의 자료형
let isFale = true;
let isRich = false;
console.log('여성인가요?',isFale);
console.log('부자인가요?',isRich);

// 4. undefined : 값이 할당된 적이 없거나 
//                존재하지 않는 속성일 때의 유형
//                변수를 선언하고 값을 할당하지 않은 상태
let val1;
console.log(val1);
// 5. null : 아무런 값을 나타내지 않을 때의 자료형
//           의도적으로 비어있는 상태
let val2 = null
console.log(val2);