// 배열에 저장된 데이터를 반복문으로 출력하기

// 1. for문
let nameList = ['서윤','김광민','박수완','김동민'];
for(let i =0; i<nameList.length; i++){
    console.log(nameList[i]);
}

// 2. for of문
let foodList = ['삼겹살','수제비','불고기'];
for(let i of foodList){
    console.log(i);
}

// 3. forEach문
let coffeeList =['아메리카노','카페라떼','소주(순이)'];
coffeeList.forEach((element,index)=>{
    console.log(index,element);
})

// 값을 가져오는 변수의 이름은 상관 없음
// coffeeList.forEach((value,i)=>{
//     console.log(i,value);
// })

// coffeeList.forEach((e,i)=>{
//     console.log(i,e);
// })
