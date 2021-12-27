/** @format */

const url = window.location.hostname.includes("localhost")
  ? "http://localhost:8081/api/auth/"
  : "https://restsnode.herokuapp.com/api/auth/";

const formulario = document.querySelector("form");

formulario.addEventListener("submit", (ev) => {
  ev.preventDefault();

  const formData = {};

  for (let el of formulario.elements) {
    if (el.name.length > 0) {
      formData[el.name] = el.value;
    }

    fetch(url + "login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(formData),
    })
      .then((resp) => resp.json())
      .then(({ msg, token }) => {
        if (msg) {
          return console.error(msg);
        }
        localStorage.setItem("token", token);
      })
      .catch((err) => {
        console.log(err);
      });
  }
});

function onSignIn(googleUser) {
  var id_token = googleUser.getAuthResponse().id_token;
  const data = { id_token };
  fetch(url + "google", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(data),
  })
    .then((resp) => resp.json())
    .then(({ token }) => {
      localStorage.setItem("token", token);
    })
    .catch((err) => console.log(err));
}

function signOut() {
  var auth2 = gapi.auth2.getAuthInstance();
  auth2.signOut().then(function () {
    console.log("User signed out.");
  });
}
