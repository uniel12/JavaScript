// 조건문 : 주어진 조건을 비교, 판단하여 결과를 얻는 구문

// 1. 조건(삼항) 연산자 : ===
let coffeeMenu = prompt('메뉴를 입력하세요.')
// true/ false일 때 사용
coffeeMenu === '아메리카노'
?console.log('주문하신 음료가 나왔습니다.')
: console.log(`${coffeeMenu} 현재 대기시간 5분 입니다.`);
// 조건이 하나일 때 사용
coffeeMenu ==='수박주스' && console.log('이벤트중인 메뉴입니다.');

// 2. if문
let num =15;
if (num > 10 ){
    console.log('10보다 큰 수입니다.');
}else {
    console.log('10보다 작은 수입니다.');
}

