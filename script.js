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
           window.location.assign("verify.html")
        } else{
            swal("Invalid captcha");
        }
   });
   var pass = document.getElementById("password");
 var msg = document.getElementById("message");
 var str = document.getElementById("strength");

 pass.addEventListener('input', () =>{
    if(pass.value.length>0){
        msg.style.display = "block";
    }
    else{
        msg.style.display ="none"
    }
    if(pass.value.length < 4){
        str.innerHTML = "weak";
        pass.style.borderColor = "red";
        msg.style.color = "red";
    }
    else if(pass.value.length >= 4 && pass.value.length <8){
        str.innerHTML = "medium";
        pass.style.borderColor = "yellow";
        msg.style.color = "yellow";
    }
    else if (pass.value.length >= 8){
    str.innerHTML = "strong";
    pass.style.borderColor = "green";
    msg.style.color = "green";
    }
 })


})();