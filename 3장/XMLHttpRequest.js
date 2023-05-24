const xhr = new XMLHttpRequest();
xhr.onreadystatechange = function () {
  if (xhr.readyState == xhr.DONE) {
    if (xhr.status === 200 || xhr.status === 201) {
      console.log(xhr.responseText);
    } else {
      console.error(xhr.responseText);
    }
  }
};

xhr.open("GET", "https://jsonplaceholder.typicode.com/users");
xhr.send();
