// 배열 : 여러 데이터를 하나의 묶음으로 다루는 구조

// 1. 배열 선언
let numList =[];
let numList2= new Array(5);
console.log(numList2);
let numList3 = new Array(1,2,3);
console.log(numList3);

// 2. 배열 생성
numList = [4,5,6];
console.log(numList);
// JS에서는 배열공간이 동적,가변적 -> 5개로 선언했어도 초과 가능
numList2= [7,8,9,10,11,12];
console.log(numList2);

// 3. 인덱스 활용
let arrayList =[];
/*
인덱스로 데이터 저장하기
배열이름[인덱스번호]= 데이터;
0->1(Number),1->가나다라(String) 2->True(Boolean)
*/
arrayList[0]=1;
arrayList[1]='가나다라';
arrayList[2]=true;
console.log(arrayList);
// 1번 인덱스 값 확인
console.log(arrayList[1]);

// 4. 배열의 길이 확인
console.log(arrayList.length);

