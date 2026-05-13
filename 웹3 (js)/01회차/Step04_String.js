/*
모든 변수는 의미가 명확한 이름과
일관된 스타일을 사용하는게 좋음

※ js는 암시적 형변환이 일어난다.
*/

var myName = "민재";
var yourName = "기웅";

var myAddr = "의왕더샵캐슬";
var yourAddr = "안성롯데캐슬센트럴시티";

console.log(myName + "은(는) " + myAddr + "에 삽니다");
console.log(yourName + "은(는) " + yourAddr + "에 삽니다");


var info = `${myName}은(는) ${myAddr}에 삽니다`;
console.log(info);