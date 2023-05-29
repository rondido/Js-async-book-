function getData(url = "") {
  fetch(url, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => res.json())
    .then((res) => console.log(res))
    .catch((error) => console.log(error.message));
}

getData("https://jsonplaceholder.typicode.com/posts/1");

//async
async function getData(url = "") {
  try {
    const response = await fetch(url);
    const res = await response.json();
    console.log(res);
  } catch (error) {
    console.log(error);
  }
}

getData("https://jsonplaceholder.typicode.com/posts/1");

//then
async function getData(url = "") {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
}

getData("https://jsonplaceholder.typicode.com/posts/1", {}).then((data) => {
  console.log(data);
});

async function getData(url = "") {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return response.json();
  } catch (error) {
    console.log(error.message);
  }
}

getData("https://jsonplaceholder.typicode.com/posts/1", {}).then((data) => {
  console.log(data);
});
