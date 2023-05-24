//객체 리터럴 타입
//구조적 타입 시스템 = Property based type system

let user: {
  id?: number; //선택적 property
  name: string;
} = {
  id: 1,
  name: "송가영",
};

let dog: {
  name: string;
  color: string;
} = {
  name: "사월이",
  color: "white",
};

user = {
  name: "홍길동",
};

let config: {
  readonly apiKey: string; // readonly를 붙이면 추후에 할당이 불가함 (수정불가)
} = {
  apiKey: "MY API KEY",
};

// config.apiKey = "MY API KEY";
