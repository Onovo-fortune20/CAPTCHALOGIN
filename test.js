//FUNCTIONS FOR THE LOG IN PAGE
function sendOTP(){
  const email = document.getElementById('loginemail');
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
          

          otp_btn.addEventListener('click',()=>{
              // now check whether sent email is valid
              if(otp_inp.value == otp_val){
                  alert("verified");
              }
              else{
                alert("uNVERIFIED");
              }
          })
      }else{
          console.log("otp not sent")

      }
    }
  );
}






const signInbutton = ()=>{
  const auth = firebase.auth();
    const loginemail = document.getElementById("loginemail").value;
    const loginpassword = document.getElementById("password1").value;
  
    console.log("hello" , loginemail, loginpassword, auth)
    auth.signInWithEmailAndPassword(loginemail,loginpassword)
  .then((result) => {
    // Signed in 
    //document.write("signed innn")
    swal("work.", "error");
    // btn.style.display = "block";
    // const otbtn = document.getElementById('otbtn');
  })
  .catch((error) => {
    swal("Please choose a stronger password.", "error");
 });
  } 
  function Lastpage() {
    window.location.href = "lastpage.html";
  }
  