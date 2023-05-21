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
  document
    .querySelector(".registration-form .captcha .captcha-refresh")
    .addEventListener("click", function () {
      generateCaptcha();
      setCaptcha();
    });
  generateCaptcha();
  setCaptcha();
}
initCaptcha();

// document
//   .querySelector(".registration-form #login-btn")
//   .addEventListener("click", function () {
//     let inputCaptchaValue = document.querySelector(
//       ".registration-form  .captcha input"
//     ).value;
//     if (inputCaptchaValue === captchaValue) {
//       swal("", "You're human, Input OTP!", "success");
//          window.location.assign("next.html")
//     } else {
//       swal("Invalid captcha");
//     }
    
    
//   });
document.querySelector(".registration-form #login-btn").addEventListener("click", function () {
  let inputCaptchaValue = document.querySelector(".registration-form  .captcha input").value;
  let passwordStrength = strengthBadge.textContent;
  
  if (inputCaptchaValue === captchaValue) {
    if (passwordStrength === "Medium") {
      swal( "Please choose a stronger password.", "error");
    } else {
      swal("", "You're human, Input OTP!", "success");
      window.location.assign("next.html");
    }
  } else {
    swal("Invalid captcha");
  }
});




let timeout;

// traversing the DOM and getting the input and span using their IDs

let password = document.getElementById("password");
let passwordconfirm = document.getElementById("conpassword");
let strengthBadge = document.getElementById("strength");
let passwordstatement = document.getElementById("passwordchecker");

// The strong and weak password Regex pattern checker

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

// Adding an input event listener when a user types to the  password input

password.addEventListener("input", () => {
  // strengthBadge.style.display= 'block'
  clearTimeout(timeout);

  //We then call the StrengChecker function as a callback then pass the typed password to it

  timeout = setTimeout(() => StrengthChecker(password.value), 500);
});
//Function to display the Password
const showPassword = document.querySelector("#show-password");
const passwordField = document.querySelector("#password");
showPassword.addEventListener("click", function () {
  this.classList.toggle("fa-eye-slash");
  const type =
    passwordField.getAttribute("type") === "password" ? "text" : "password";
  passwordField.setAttribute("type", type);
});

const firebaseApp = firebase.initializeApp({
  apiKey: "AIzaSyANwbmgQlNHnhDHuxPGbD7ejl3mKfzg40g",
  authDomain: "auth-form-840d9.firebaseapp.com",
  projectId: "auth-form-840d9",
  storageBucket: "auth-form-840d9.appspot.com",
  messagingSenderId: "274693549512",
  appId: "1:274693549512:web:69e0a650757ffaf9efe4fd",
});
const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

const signUp = () => {
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  console.log(email, password);
  firebase
    .auth()
    .createUserWithEmailAndPassword(email, password)
    .then((result) => {
      // Signed in
      // document.write("signed in")
      // console.log(result)
      // ...
    })
    .catch((error) => {
        console.log(error.code);
        console.log(error.message)
      // ..
    });
}; 
