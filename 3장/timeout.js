const testButton = document.querySelector("button");
const loadingBox = document.getElementById("loading");
const resultBox = document.querySelector("#result");
let result;

function isLoading() {
  loadingBox.innerText = "로딩 중";
}

function someProcessTakeLongTime() {
  for (let i = 0; i < 100000000; i++) {
    result += i;
  }
}

function hideIsLoading() {
  loadingBox.innerHTML = "";
}

function showResult() {
  resultBox.innerHTML = "결과입니다.";
}

testButton.addEventListener("click", () => {
  isLoading();
  setTimeout(() => {
    someProcessTakeLongTime();
    hideIsLoading();
    showResult();
  }, 0);
});
