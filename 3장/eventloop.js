function delay() {
  for (let i = 0; i < 1000000; i++);
}

function 도망() {
  delay();
  console.log("🏃🏻‍♀️: 얼른 도망가야겠다!! (후다닥)");
}

function 예보() {
  delay();
  console.log("👮🏻‍♀️: 폭풍이 100ms 뒤에 몰려온다고 합니다. 조심하세요🚨");
  도망();
}

function 폭풍() {
  console.log("👻: 하하 내가 왔다💨 ... 어라 늦었네..😤");
}

setTimeout(폭풍, 100);
예보();
