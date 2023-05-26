const fonts = ["cursive", "sans-serif", "serif", "monospace"];
let captchaValue = "";

function generateCaptcha() {
  let value = btoa(Math.random() * 1000000000);
  value = value.substr(0, 5 + Math.random() * 5);
  captchaValue = value;
}

function setCaptcha() {
  let html = captchaValue
    .split("")
    .map((char) => {
      const rotate = -20 + Math.trunc(Math.random() * 30);
      const font = Math.trunc(Math.random() * fonts.length);
      return `<span
            style = " trasform:rotate(${rotate}deg);
            font-family: ${fonts[font]}
            "
            >${char}</span>`;
    })
    .join("");
  document.querySelector(".registration-form .captcha .preview").innerHTML =
    html;
}

function initCaptcha() {
  generateCaptcha();
  setCaptcha();
}
let timeout;

// //traversing the DOM and getting the input and span using their IDs

let password = document.getElementById("password");
let strengthBadge = document.getElementById("strength");
let passwordstatement = document.getElementById("passwordchecker");

// // The strong and weak password Regex pattern checker

let strongPassword = new RegExp(
  "(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})"
);
let mediumPassword = new RegExp("((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))");

function StrengthChecker(PasswordParameter) {
  // We then change the badge's color and text based on the password strength

  if (strongPassword.test(PasswordParameter)) {
    strengthBadge.style.color = "green";
    strengthBadge.textContent = "Strong";
  } else if (PasswordParameter <= 0) {
    strengthBadge.textContent = "";
  } else if (mediumPassword.test(PasswordParameter)) {
    strengthBadge.style.color = "blue";
    strengthBadge.textContent = "Medium";
  } else {
    strengthBadge.style.color = "red";
    strengthBadge.textContent = "Weak Password";
  }
}

//Adding an input event listener when a user types to the  password input
const Strengthmeter = () => {
  strengthBadge.style.display= 'block'
  clearTimeout(timeout);

  //We then call the StrengChecker function as a callback then pass the typed password to it

  timeout = setTimeout(() => StrengthChecker(password.value), 500);
}

//Function to display the Password
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");
showPassword.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});




const signUp = () => {
   const auth = firebase.auth();
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  let inputCaptchaValue = document.getElementById(
    "captcha-form"
  ).value;
  let passwordStrength = strengthBadge.textContent;

  if (inputCaptchaValue === captchaValue) {
    if (passwordStrength === "Medium" || passwordStrength === "Weak Password") {
      swal("Please choose a stronger password.", "error");
    } else {
    
      auth.createUserWithEmailAndPassword(email, password)
      .then((result) => {
        window.location.assign("next.html");
        // Signed in
        // document.write("signed in")
        // console.log(result)
        // ...
      })
      .catch((error) => {
        console.log(error.code);
        console.log(error.message);
        // ..
      });
    }
  } else {
    swal("Invalid captcha");
  }  
};

