// 함수 표현식 : 익명 함수 형태로 함수 선언 -> 변수 참조
// 익명 함수 -> function(){} : 이름이 없는 함수

const intro = function () {
    console.log('안녕하세요. 서윤입니다!😎💙');
}
intro();

// 매개변수
const intro2 = function(userTeam,userName = '박수완'){
    console.log(`${userTeam} 팀장은 ${userName}입니다😄💙`);
}
intro2('우리팀');

// 매개변수 + return문
const intro3 =function (userName) {
    return `우리팀의 ${userName}😇`
}
console.log(intro3('김동민'));

