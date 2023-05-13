(function(){
    const fonts = ["cursive", "sans-serif", "serif", "monospace"];
    let captchaValue = "";
    function generateCaptcha(){
        let value = btoa(Math.random()*1000000000);
        value = value.substr(0,5+Math.random()*5);
        captchaValue = value;
    }
    function setCaptcha(){
       let html = captchaValue.split("").map((char)=>{
            const rotate = -20 + Math.trunc(Math.random()*30);
            const font = Math.trunc(Math.random()*fonts.length);
            return `<span
            style = " trasform:rotate(${rotate}deg);
            font-family: ${fonts[font]}
            "
            >${char}</span>`;
        }).join("");
        document.querySelector(".registration-form .captcha .preview").innerHTML = html;
    }
    function initCaptcha(){
        document.querySelector(".registration-form .captcha .captcha-refresh").addEventListener("click", function(){
        generateCaptcha();
        setCaptcha();
        });  
        generateCaptcha();
        setCaptcha();
    }
       initCaptcha();

       document.querySelector(".registration-form #login-btn").addEventListener("click",function(){
        let inputCaptchaValue = document.querySelector(".registration-form  .captcha input").value;
        if(inputCaptchaValue === captchaValue){
           swal("","You're human, Input OTP!", "success");
        //    window.location.assign("next.html")
        } else{
            swal("Invalid captcha");
        }

        if (strengthBadge >= weak) {
            alert("Password is strong enough! Logging you in...");
        } else{
            alert("Password is too weak. Please choose a stronger password.");
            passwordInput.value = "";
            return false;
        }

   });
//    var pass = document.getElementById("password");
//  var msg = document.getElementById("message");
//  var str = document.getElementById("strength");

//  pass.addEventListener('input', () =>{
//     if(pass.value.length>0){
//         msg.style.display = "block";
//     }
//     else{
//         msg.style.display ="none"
//     }
//     if(pass.value.length < 4){
//         str.innerHTML = "weak";
//         pass.style.borderColor = "red";
//         msg.style.color = "red";
//     }
//     else if(pass.value.length >= 4 && pass.value.length <8){
//         str.innerHTML = "medium";
//         pass.style.borderColor = "yellow";
//         msg.style.color = "yellow";
//     }
//     else if (pass.value.length >= 8){
//     str.innerHTML = "strong";
//     pass.style.borderColor = "green";
//     msg.style.color = "green";
//     }
//  })
 let timeout;

        // traversing the DOM and getting the input and span using their IDs

        let password = document.getElementById('password')
        let passwordconfirm = document.getElementById('conpassword')
        let strengthBadge = document.getElementById('strength')
        let passwordstatement = document.getElementById("passwordchecker")

        // The strong and weak password Regex pattern checker

        let strongPassword = new RegExp('(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})')
        let mediumPassword = new RegExp('((?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,}))')

        function StrengthChecker(PasswordParameter) {
            // We then change the badge's color and text based on the password strength

            if (strongPassword.test(PasswordParameter)) {
                strengthBadge.style.color = "green"
                strengthBadge.textContent = 'Strong'
            }
            else if (PasswordParameter <= 0) {
                strengthBadge.textContent = ''
            }
            else if (mediumPassword.test(PasswordParameter)) {
                strengthBadge.style.color = 'blue'
                strengthBadge.textContent = 'Medium'
            } else {
                strengthBadge.style.color = 'red'
                strengthBadge.textContent = 'Weak'
            }
        }

        // Adding an input event listener when a user types to the  password input 

        password.addEventListener("input", () => {


            // strengthBadge.style.display= 'block'
            clearTimeout(timeout);

            //We then call the StrengChecker function as a callback then pass the typed password to it

            timeout = setTimeout(() => StrengthChecker(password.value), 500);

        });




        const showPassword = document. querySelector
        ("#show-password");
        const passwordField = document. querySelector
        ("#password");
        showPassword.addEventListener("click", function (){
        this.classList.toggle("fa-eye-slash");
        const type = passwordField.getAttribute("type")
        ===
        "password" ? "text" : "password"; passwordField.setAttribute("type", type);
        })
        

        const firebaseApp = firebase.initializeApp({ 
            apiKey: "AIzaSyANwbmgQlNHnhDHuxPGbD7ejl3mKfzg40g",
            authDomain: "auth-form-840d9.firebaseapp.com",
            projectId: "auth-form-840d9",
            storageBucket: "auth-form-840d9.appspot.com",
            messagingSenderId: "274693549512",
            appId: "1:274693549512:web:69e0a650757ffaf9efe4fd"

         });
        const db = firebaseApp.firestore();
        const auth = firebaseApp.auth();

        const signUp=()=>{

        const email = document.getElementById("email").value;
        const password = document.getElementById("password").value;
        console.log(email, password)
            firebase.auth().createUserWithEmailAndPassword(email,password)
                  .then((userCredential) => {
    // Signed in 
    var user = userCredential.user;
    // ...
  })
  .catch((error) => {
    var errorCode = error.code;
    var errorMessage = error.message;
    // ..
  });
        }

})();