// const 예보 = "👮🏻‍♀️: 폭풍이 몰려오고 있으니 조심하세요🚨";
// const 도망 = "🏃🏻‍♀️: 얼른 도망가야겠다... 헉 벌써 왔어!!😱";
// const 폭풍 = "👻: 하하 이미 도착했다고~!💨";

// console.log(예보);
// console.log(폭풍);
// console.log(도망);

// 비동기식 처리 코드

const 예보 = "👮🏻‍♀️: 폭풍이 몰려오고 있으니 조심하세요🚨";
const 도망 = "🏃🏻‍♀️: 얼른 도망가야겠다!! (후다닥)";
const 폭풍 = "👻: 하하 내가 왔다💨 ... 어라 늦었네..😤";

console.log(예보);

setTimeout(() => {
  console.log(폭풍);
}, 1000);

console.log(도망);
