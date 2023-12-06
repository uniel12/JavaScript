// 1. 사용자로부터 키와 몸무게 입력받기
let userH = Number(prompt('키를 입력하세요.'))
console.log(`신장 : ${userH}cm`);
let userW = Number(prompt('몸무게를 입력하세요.'))
console.log(`체중 : ${userW}kg`);
// 2. 입력받은 키와 몸무게 기준으로 적정몸무게 및 사용자 몸무게와의 차이를 구하기
let pW = (userH-100)*0.9;
// Math.abs(값) : 절대값 구하기
// 값.toFixed(소수점 몇째자리까지) : 소수점 자리수 제한
let gapW= Math.abs(userW-pW).toFixed(1);
console.log(`적정체중 : (${userH}-100)X0.9= ${pW}kg`);
// 3. 조건에 따라 초과/미달/정상 값을 구하기
let res;

if (userW > pW){
    res="초과";
}else if(userW < pW){
    res="미달";
}else{
    res="정상";
}
console.log(`결과 : 적정체중은 ${pW}kg이며, 현재 적정체중에서 ${gapW}kg
       ${res}인 것을 알 수 있습니다.`);
// 4. 형태에 맞춰 HTML 문서 내에 출력
document.write(`
    신장 : ${userH}cm<br>
    체중 : ${userW}kg<br>
    적정체중 : (${userH}-100)X0.9= ${pW}kg<br>
    결과 : 적정체중은 ${pW}kg이며,현재 적정체중에서 ${gapW}kg<br>
    ${res}인 것을 알 수 있습니다.`);
/*
신장 : XXXcm
체중 : XXkg
적정체중 : (XXX-100)X0.9 =XX16kg
결과 : 적정체중은 XXkg이며, 현재 적정체중에서 Xkg
       초과/미달/정상인 것을 알 수 있습니다.
*/