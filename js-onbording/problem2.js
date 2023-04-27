function problem2(cryptogram) {
  var answer = "";
  let cryptogramarr = cryptogram.split("");
  for (let i = 0; i < cryptogramarr.length; i++) {
    console.log(cryptogramarr[i] === cryptogramarr[i + 1]);
    if (cryptogramarr[i] === cryptogramarr[i + 1]) {
      console.log(cryptogramarr.splice(i, 2));
      i--;
    }
  }
  console.log(cryptogramarr);
}

problem2("browoanoommnaon");
