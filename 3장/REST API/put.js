const url = "https://jsonplaceholder.typicode.com/posts/1";

fetch(url, {
  method: "PUT",
  body: JSON.stringify({
    id: 1,
    title: "updated title",
    body: "updated body",
    userId: 1,
  }),
  headers: {
    "Content-type": "application/json; charset=UTF-8",
  },
})
  .then((response) => response.json())
  .then((json) => console.log(json));
