const Submit = document.getElementById("btns");

const Name = document.getElementById("name");
const Surname = document.getElementById("surname");
const email = document.getElementById("email");
const password = document.getElementById("password");

Submit &&
  Submit.addEventListener("click", (e) => {
    e.preventDefault();
    // if (Name.value === "") {

    // }

    Name.value
      ? Name.value
      : (document.getElementById("name_validation").innerText =
          "Zehmet olmazsa adi daxil edin!!");

    Surname.value
      ? Surname.value
      : (document.getElementById("surname_validation").innerText =
          "Zehmet olmazsa soyadiniz daxil edin");
    email.value
      ? email.value
      : (document.getElementById("email_validation").innerText =
          "Zehmet olmazsa Email daxil edin");
    console.log(password.value.length);
    if (password.value.length > 10) {
      document
        .getElementById("password_validation")
        .classList.add("strong_password");
    } else if (password.value.length < 4) {
      document
        .getElementById("password_validation")
        .classList.add("weak_password");
    } else if (password.value.length > 4 && password.value.length < 10) {
      document
        .getElementById("password_validation")
        .classList.add("medium_password");
    }
  });

Submit.addEventListener("click", (e) => {
  e.preventDefault();
  document.getElementById("load").classList.add("spinner-border");
  setTimeout(() => {
    document.getElementById("load").classList.remove("spinner-border");
  }, 2000);
});

window.addEventListener("load", () => {
  document.getElementById("loader").style.display = "none";
});
