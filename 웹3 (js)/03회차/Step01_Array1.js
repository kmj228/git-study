// Array datatype
// [] 를 사용하여 만듬
// 순서가 중요한 데이터를 담음
// 인덱스는 0부터 시작

var nums = [10, 20, 30, 40];

var names = ["짱구", "짱아", "흰둥이", "철수"];

var members = [
    {name: "짱구", addr: "안양"},
    {name: "짱아", addr: "의왕"},
    {name: "힌둥이", addr: "군포"},
    {name: "철수", addr: "과천"}
]

console.log(nums[0]); // 10
console.log(nums[1]); // 20

console.log(members[3].name); // 철수

// 배열 데이터 삭제 (splice)
names.splice(2, 1); // 2번 인덱스부터 1개 삭제
console.log(names); // [ '짱구', '짱아', '철수' ]

// 배열 데이터 삭제 (pop)
names.pop(); // 가장 마지막 인덱스 삭제
console.log(names); // [ '짱구', '짱아' ]

// 배열 데이터 추가 (push)
names.push("맹구");
console.log(names); // [ '짱구', '짱아', '맹구' ]

// 배열 안의 요소 개수 (length)
console.log(nums.length);

// nums 배열을 활용하여 새 배열 만들기
var nums2 = nums.map(function(arr) {
    return arr * 2;
}) 
console.log(nums2);