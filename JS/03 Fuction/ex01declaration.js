// 함수 : 특정 기능을 수행하는 소스 코드를 하나로 묶어서
//        필요할 때마다 사용하기 위한 구조

// 함수 선언
function intro() {
    console.log("안녕하세요! 서윤입니다😎💙");
}
// 함수 호출
intro();

// 매개변수
// 기본값 설정 가능
function intro2(userTeam,userName = '박수완') {
    // if(userName ===undefined){
    //     userName='박수완';
    // }
    console.log(`${userTeam} 팀장은 ${userName}입니다😄💙`);
}
intro2('우리팀','누굴까');

// 매개변수 + return문

function intro3(userName) {
    return `우리팀의 ${userName}😇`
}
intro3('김동민'); // 출력X
console.log(intro3('김동민')); //출력O
console.log(intro3('김광민')); //출력O

