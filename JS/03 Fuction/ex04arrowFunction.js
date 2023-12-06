// 화살표 함수 : 함수 표현식 형태, function 키워드 대신 =>

const intro = ()=>{
    console.log('안녕하세요. 서윤입니다!😎💙');
}
intro();

// 매개변수
const intro2 = (userTeam,userName = '박수완')=>{
    console.log(`${userTeam} 팀장은 ${userName}입니다😄💙`);
}
intro2('우리팀');

// 매개변수 + return문
// const intro3 = (userName)=>{
//     return `우리팀의 ${userName}😇`
// }
const intro3 = userName=>`우리팀의 ${userName}😇`;

console.log(intro3('김동민'));

// 매개변수 1개 ->()생략 가능
// 실행문 1개 -> {},return 생략 가능
