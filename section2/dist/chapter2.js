// 배열
let numArr = [1, 2, 3];
let strArr = ["hello", "im", "gazero"];
//제네릭 스타일로
let boolArr = [true, false, true];
// 배열에 들어가는 요소들의 타입이 다양한 경우
let multArr = [1, "hello"];
//다차원 배열의 타입을 정의하는 방법
let doubleArr = [
    [1, 2, 3],
    [4, 5],
];
//튜플
//길이와 타입이 고정된 배열(자바스크립트에는 없음)
let tup1 = [1, 2];
let tup2 = [1, "hello", true];
tup1.push(1);
export {};
