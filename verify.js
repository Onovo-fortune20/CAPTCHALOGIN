function sendOTP(){
    const email = document.getElementById('email');
    const otpverify = document.getElementsByClassName('otpverify')[0];
    

    // Generating random number as OTP;

    let otp_val = Math.floor(Math.random()*10000);

    let emailbody = `
        <h1>cyber world</h1> <br>
        <h2>Your OTP is </h2>${otp_val}
    `;

    Email.send({
        SecureToken : "778459a7-d314-4e94-8d47-6a1f0a2bcd89",
        To : email.value,
        From : "echeonovo@gmail.com",
        Subject : "This is from eche",
        Body : emailbody
    }).then(
        //if success it returns "OK";  

      message => {
        if(message === "OK"){
            
            alert("OTP sent to your email "+email.value);  
            // now making otp input visible
            otpverify.style.display = "block";
            const otp_inp = document.getElementById('otp_inp');
            const otp_btn = document.getElementById('otp-btn');
            console.log("otp ")

            otp_btn.addEventListener('click',()=>{
                // now check whether sent email is valid
                if(otp_inp.value == otp_val){
                    alert("Email address verified...");
                }
                else{
                    alert("Invalid OTP");
                }
            })
        }else{
            console.log("otp not sent")

        }
      }
    );
    


}
 
const signIn =()=>{
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;
    firebaseApp.auth().signInWithEmailAndPassword(email,password)
  .then((result) => {
    // Signed in 
    document.write("signed innn")
    console.log(result)
  })
  .catch((error) => {
    console.log(error.code);
    console.log(error.message)
  });
}