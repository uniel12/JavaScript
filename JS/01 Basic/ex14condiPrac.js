// 1. 색상을 입력받을 입력창 만들기
let userColor= prompt('원하는 색상을 입력하세요.')
console.log(userColor);

// 2. 빨강 -> red, 초록 -> green, 파랑 -> blue
//    그외 -> '잘못 입력하셨습니다' (알림 팝업창)
// if-else문
// if(userColor =="빨강"){
//     document.querySelector('body').style.backgroundColor='red';
// }else if(userColor =="초록"){
//     document.querySelector('body').style.backgroundColor='green';
// }else if(userColor=="파랑"){
//     document.querySelector('body').style.backgroundColor='blue';
// }else{
//     alert('잘못 입력하셨습니다!')
// }

// switch문
let resultColor;

switch(userColor){ 
    case '빨강' : resultColor ='red'; break;
    case '초록' : resultColor ='green'; break;
    case '파랑' : resultColor ='blue'; break;
    case '노랑' : resultColor ='yellow'; break;
    case '핑크' : resultColor ='pink'; break;
    default : alert('잘못 입력하셨습니다!');
}
    
document.querySelector('body').style.backgroundColor= resultColor;
// 배경색 바꾸는 코드는 ex02 참고!
// document.querySelector('body').style.backgroundColor='black';


