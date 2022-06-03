// Your challenge is to build out this Coming Soon page and get it looking as close to the design as possible.

// You can use any tools you like to help you complete the challenge. So if you've got something you'd like to practice, feel free to give it a go.

// Your users should be able to:

// - View the optimal layout for the site depending on their device's screen size
// - See hover states for all interactive elements on the page
// - Submit their email address using an `input` field
// - Receive an error message when the `form` is submitted if:
// 	- The `input` field is empty. The message for this error should say *"Whoops! It looks like you forgot to add your email"*
// 	- The email address is not formatted correctly (i.e. a correct email address should have this structure: `name@host.tld`). The message for this error should say *"Please provide a valid email address"*

const button = document.querySelector(".btn__container");
const input = document.querySelector("#notify");
const label = document.querySelector(".label__notify");
const mailFormat = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
console.log(button, input);
console.log(label);
const checkInput = function () {
  if (input.value.match(mailFormat)) {
    input.value = "";
    input.placeholder = "thank you for filling this form";
    button.textContent = "Thank You";
    setTimeout(function () {
      button.textContent = "Notify Me";
      input.placeholder = "Please provide a valid email address";
    }, 3000);
  }
  if (!input.value.match(mailFormat) || !input.value == "") {
    input.value = "";
    input.placeholder = "Please provide a valid email address";
    label.textContent = "Please provide a valid email address";
  }
};
button.addEventListener("click", function (e) {
  e.preventDefault();
  checkInput();
});
