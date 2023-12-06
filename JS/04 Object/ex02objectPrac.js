// 1. 포맷에 맞춰 팀원들의 정보를 채워넣기
//    객체명은 person1,person2,person3, ...
let format ={
    name : '',
    bday : '',
    Sub : '',
    hobby : '',
    favorite : ''
}

let person1 = {
    name : '양세영',
    bday : '11월 18일',
    Sub : 'JavaScript',
    hobby : 'JavaScript',
    favorite : 'JavaScript'
}
let person2 ={
    name : '서윤',
    bday : '11월 03일',
    Sub : 'JavaScript',
    hobby : 'JavaScript',
    favorite : 'JavaScript'
}

let person3 ={
    name : '박수완',
    bday : '0월 0일',
    Sub : 'JavaScript',
    hobby : 'JavaScript',
    favorite : 'JavaScript'
}
let person4 ={
    name : '김동민',
    bday : '0월 0일',
    Sub : 'JavaScript',
    hobby : 'JavaScript',
    favorite : 'JavaScript'
}
let person5 ={
    name : '김동민',
    bday : '0월 0일',
    Sub : 'JavaScript',
    hobby : 'JavaScript',
    favorite : 'JavaScript'
}

let personList = [person1,person2,person3,person4,person5]
console.log(personList);

// 2. HTML 내 출력하기
// XX의 생일은 XXXX,좋아하는 과목은 XX입니다.
// 취미는 XX, 좋아하는 건 XX입니다.
// document.write(
// `${personList[0].name}의 생일은 ${personList[0].bday},
// 좋아하는 과목은 ${personList[0].Sub}입니다.
// <br>
// 취미는 ${personList[0].hobboy},
//  좋아하는 건 ${personList[0].favorite}입니다.`)

for(let person of personList){
    document.write(
        `${person.name}의 생일은 ${person.bday},
        좋아하는 과목은 ${person.Sub}입니다.
        <br>
        취미는 ${person.hobby},
         좋아하는 건 ${person.favorite}입니다.
        <br><br>`)
}