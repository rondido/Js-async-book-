function nameWords(name, words) {
  for (let i = 0; i < name.length - 1; i++) {
    const temp = name.slice(i, i + 2);
    console.log(temp);
    words[temp] = words[temp] + 1 || 1;
  }
}

function duplicate(name, words) {
  for (let i = 0; i < words.length; i++) {
    if (name.includes(words[i])) {
      return true;
    }
  }

  return false;
}

function problem6(forms) {
  var answer = [];
  const words = {};
  const dupWords = [];
  for (let i = 0; i < forms.length; i++) {
    const name = forms[i][1];
    nameWords(name, words);
  }
  console.log(words);

  Object.entries(words).forEach((value) => {
    const [word, count] = value;
    if (count >= 2) {
      dupWords.push(word);
    }
  });

  forms.forEach((user) => {
    const [email, name] = user;

    if (duplicate(name, dupWords)) {
      answer.push(email);
    }
  });

  return answer.sort();
}
problem6([
  ["jm@email.com", "제이엠"],
  ["jason@email.com", "제이슨"],
  ["woniee@email.com", "워니"],
  ["mj@email.com", "엠제이"],
  ["nowm@email.com", "이제엠"],
]);
