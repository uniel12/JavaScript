// 배열에 데이터를 추가하거나
// 삭재하는 관련 함수

let Team = ['동민','수완','광민'];
console.log('최초배열',Team);
// 1. 마지막 인덱스 데이터 추가 : push(value);
Team.push('윤');
console.log('마지막 추가',Team);

// 2. 마지막 인덱스 데이터 삭제 : pop();
Team.pop();
console.log('마지막 삭제',Team);

// 3. 첫 번째 인덱스 데이터 추가 : unshift(value);
Team.unshift('윤');
console.log('첫 번째 추가',Team);

// 4. 첫 번째 인덱스 데이터 삭제 : shift();
Team.shift();
console.log('첫 번째 삭제',Team);

// 5. 원하는 위치에 데이터 추가 또는 삭제
//    : splice(start, deleteCount, items)
// 5.1 추가 -> deletecount - 0으로
Team.splice(1, 0, '팀장 수완');
console.log('splice 추가',Team);
// 5.2 삭제 -> items 생략
Team.splice(1, 1);
console.log('splice 삭제',Team);
// 5.3  추가 + 삭제
Team.splice(1,1,'수완','윤');
console.log('splice 추가+삭제',Team);
