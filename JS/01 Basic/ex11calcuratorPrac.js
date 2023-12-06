// 1. 사용자로부터 숫자를 입력받는다.
// prompt로 받아온 데이터는 문자열임 -> 형변환 후 선언된 변수 num에 할당
let num = Number(prompt('100이상의 숫자를 입력해주세요'));
// console.log(num);

// 2. 입력 받은 수를 가지고 연산을 통해 결과값을 얻는다.
// 방법1
let res = num-num%100;
// 방법2
let res2 = parseInt(num/100)*100;

// 3. 결과값을 형태에 맞춰 출력한다.
// console.log(`백의 자리 이하 버린 결과 >> ${res}`);
console.log(`백의 자리 이하 버린 결과 >> ${res2}`);