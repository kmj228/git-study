/*
모든 변수는 의미가 명확한 이름과
일관된 스타일을 사용하는게 좋음

※ js는 암시적 형변환이 일어난다.
*/

// Boolean 타입의 변수 이름은 대화식(질문 형태)으로 지어주는게 일반적

var isRun = true;
var isWait = false;
var isSmaller = 10 < 5;
var isEqual = 10 == 10;

if (isEqual) {
    console.log("isEqual = " + isEqual);
}

console.log("isSmaller = " + isSmaller);