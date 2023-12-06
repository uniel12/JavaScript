// 객체 : 여러 데이터를 하나의 변수에 저장할 수 있는 데이터 타입

/*
객체의 구조 
let object ={
    key1 : value1,
    key2 : value2,
    ...
}

key : 객체의 속성(property)
value : 속성의 값
*/

// 객체 생성
let person ={
    "name" : "서윤",
    age : 10,
    favorite : {
        food : "고구마🌱",
        toy : "플라밍고🦩"
    },
    smhrd : ["양세영","이주희","정봉균"]
}

// 객체접근
console.log(person);
console.log("이름 :",person.name);
console.log("나이 :",person.age);
console.log(person.favorite);
console.log("좋아하는 음식 :",person.favorite.food);
console.log("담임 선생님 :",person.smhrd[1]);

// 속성 값 변경 및 추가
person.name = "루피🐩";
console.log("이름 변경 :",person.name);

// 속성에 해당하는 값을 참조
// 변수에 담아도 object의 값이 바뀌진 않는다.
let personName = person.name;
personName="해피🐕‍🦺"
console.log("이름 변경 :",person.name);

// weight에 4kg
person.weight = "4kg";
console.log("무게 정보 추가 :",person.weight);