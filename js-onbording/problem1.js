//for문을 돌려서 [0], [1]
//각각 값을 넣는다?

//올바른 페이지인지 확인
function checkValue(num1, num2) {
  let isTrued;
  if (num1[0] % 2 === 1 && num1[1] % 2 === 0) {
    isTrued = true;
  }
  if (Math.abs(num1[0] - num1[1]) !== 1 || Math.abs(num2[0] - num2[1]) !== 1) {
    isTrued = false;
  }
  return false;
}

function getaddAndMultiMax(page) {
  const max = page.map((element) => {
    // * 1로 숫자로 변환
    const sum = element
      .toString()
      .split("")
      .reduce((acc, cur) => acc + cur * 1, 0);
    const multi = element
      .toString()
      .split("")
      .reduce((acc, cur) => acc * cur * 1, 1);
    return Math.max(sum, multi);
  });
  return Math.max(...max);
}

function problem1() {
  let pobi = [97, 98];
  let crong = [197, 198];
}

problem1();
