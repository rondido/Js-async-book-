const url = "https://jsonplaceholder.typicode.com/posts";

fetch(url, {
  method: "POST",
  body: JSON.stringify({
    title: "test title",
    body: "test body",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
