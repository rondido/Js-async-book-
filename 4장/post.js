function postData(url = "", data = {}) {
  fetch(url, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error.message));
}

postData("https://jsonplaceholder.typicode.com/posts", {
  title: "Post test",
  body: "fetch의 Post 메소드를 테스트 중입니다.",
  userId: 2,
});

//async

async function postData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error.message);
  }
}

postData("https://jsonplaceholder.typicode.com/posts", {
  title: "Post test",
  body: "fetch의 Post 메소드를 테스트 중입니다.",
  userId: 2,
});

async function postData(url = "", data = {}) {
  try {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
}

postData("https://jsonplaceholder.typicode.com/posts", {
  title: "Post test",
  body: "fetch의 Post 메소드를 테스트 중입니다.",
  userId: 2,
}).then((data) => {
  console.log(data);
});
