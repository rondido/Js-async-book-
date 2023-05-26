const url = "https://jsonplaceholder.typicode.com/users";

$.ajax({
  url: url,
  type: "GET",
  success: function onData(data) {
    console.log(data);
  },
  error: function onError(error) {
    console.error(error);
  },
});
