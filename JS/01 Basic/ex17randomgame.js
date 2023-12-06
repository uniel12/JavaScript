// 1. 랜덤 숫자를 하나 뽑기 (1~100)
// Math.random(): 0~1 사이의 난수 생성
let randomNum = parseInt(Math.random()*100)+1;
// let randomNum = (Math.random()*100).toFixed(0);
 console.log(randomNum);

// 2. 사용자에게 숫자를 입력받기
//    조건에 따라 다른 팝업창 출력
//    입력숫자 > 랜덤숫자 ->'입력한 숫자보다 작은 수 입니다.'
//    입력숫자 < 랜덤숫자 ->'입력한 숫자보다 큰 수 입니다.'
//    입력숫자 = 랜덤숫자 ->'정답입니다. 축하합니다.💞'
while(true){
    let inputNum=Number(prompt("랜덤숫자를 맞추세요"));
if(inputNum>randomNum){
    alert("입력한 숫자보다 작은 수 입니다.");
}else if(inputNum<randomNum){
    alert('입력한 숫자보다 큰 수 입니다.');
}else{
    alert('정답입니다. 축하합니다.💞');
    break;
}

}