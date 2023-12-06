// 1. 주어진 데이터를 담은 배열 생성하기
let numList = [23,54,78,13,44];
// 2. 반복문 안에서 최댓값 구하기
let maxNum = numList[0];

// for
for(let i = 0; i<numList.length; i++){
    if(maxNum < numList[i]){
        maxNum = numList[i];
    }
}
console.log('for',maxNum);

// for of
for(let i of numList){
    if(maxNum<i){
        maxNum=i;
    }
}

console.log('for of',maxNum);

//forEach
numList.forEach((element)=>{
        if(maxNum<element){
        maxNum=element;
    }
});
console.log('forEach',maxNum);


// 3. 형태에 맞춰서 알림팝업창으로 출력하기
alert(`최댓값 >> ${maxNum}`);
