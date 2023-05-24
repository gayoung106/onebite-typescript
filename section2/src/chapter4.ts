//타입별칭 + 값을 초기화 하듯이 = 으로 써야함 / 타입별칭의 이름은 중복이 되면 안됨
type User = {
  id: number;
  name: string;
  nickname: string;
  birth: string;
  bio: string;
  location: string;
};
// 단독 함수 안에서 기존의 타입별칭 이름은 사용해도 무관, 그대신 그 안에서만 써야함
function func() {
  type User = {};
}

let user: User = {
  id: 1,
  name: "송가영",
  nickname: "gazero",
  birth: "2002.02.02",
  bio: "hi",
  location: "seoul",
};

let user2: User = {
  id: 2,
  name: "송가영",
  nickname: "gazero",
  birth: "2002.02.02",
  bio: "hi",
  location: "seoul",
};

//인덱스 시그니처: 키와 밸류를 기준으로 규칙을 정하는 문법
type CountryCodes = {
  [key: string]: string;
};

let countryCodes: CountryCodes = {
  Korea: "ko",
  UinitedState: "us",
  UnitedKingdom: "uk",
};
type CountryNumberCodes = {
  [key: string]: number;
};

let countryNumberCodes: CountryNumberCodes = {
  Korea: 410,
  UnitedState: 840,
  UnitedKingdom: 829,
};

//주의 할 점 ! 정해진 규칙을 위반하지만 않으면 오류 발생안함 그래서 그냥 빈 값으로 둬도 오류가 발생하지 않음
let countryNumberCodes2: CountryNumberCodes = {};
