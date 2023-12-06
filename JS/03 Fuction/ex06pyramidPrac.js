// 1. 출력될 이모티콘과 행의 개수를 입력 받는다.
let emoji= prompt('이모티콘을 입력하세요.')
let rowNum = Number(prompt('출력할 행의 개수를 입력하세요.'))

// 2. 이모티콘을 행의 개수만큼 행의 길이가 늘어남에 따라
//    증가하는 형태로 HTML내에 출력하는 함수를 생성한다.

// 2-1. 함수 선언문 - pyramid1
function pyramid1(emoji,rowNum) {
    for(let k =1; k<=rowNum; k++){
        for(let i=1; i<=k;i++){
        document.write(emoji);
        }
    document.write("<br>")
    }
}
pyramid1(emoji,rowNum);
// 2-2. 함수 표현식 - pyramid2
const pyramid2= function(emogi,rowNum) {
    for(let k =1; k<=rowNum; k++){
        for(let i=1; i<=k;i++){
        document.write(emogi);
        }
    document.write("<br>")
    }
}
pyramid2(emoji,rowNum);
// 2-3. 화살표 함수 - pyramid3
const pyramid3=(emogi,rowNum) => {
    for(let k =1; k<=rowNum; k++){
        for(let i=1; i<=k;i++){
        document.write(emogi);
        }
    document.write("<br>")
}
}
pyramid3(emoji,rowNum);