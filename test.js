//FUNCTIONS FOR THE LOG IN PAGE
function show() {
  var passwordInput = document.getElementById("password1");
  passwordInput.type = "text";
}

function sendOTP() {
  const email = document.getElementById('loginemail');
  const otpverify = document.getElementsByClassName('otpverify')[0];

  // Generating random number as OTP
  let otp_val = Math.floor(Math.random() * 10000);

  let emailbody = `
    <h1>Cyber Security Project</h1> <br>
    <h2>Your OTP is </h2>${otp_val}
  `;

  Email.send({
    SecureToken: "778459a7-d314-4e94-8d47-6a1f0a2bcd89",
    To: email.value,
    From: "echeonovo@gmail.com",
    Subject: "Use this OTP to verify your page",
    Body: emailbody
  }).then((message) => {
    if (message === "OK") {
      swal({
        icon: 'success',
        title: 'Success',
        text: 'OTP Sent to email. Please verify.',
        confirmButtonText: 'OK'
      });

      otpverify.style.display = "block";
      const otp_inp = document.getElementById('otp_inp');
      const otp_btn = document.getElementById('otp-btn');

      // Function to handle OTP verification
      const verifyOTP = () => {
        if (otp_inp.value == otp_val) {
          swal({
            icon: 'success',
            title: 'Success',
            text: 'OTP correct. Please proceed.',
            confirmButtonText: 'OK'
          });
          window.location.assign("lastpage.html");
        } else {
          swal({
            icon: 'error',
            title: 'Error',
            text: 'Please enter correct OTP.',
            confirmButtonText: 'OK'
          });
        }
      };

      // Event listener for OTP verification
      otp_btn.addEventListener('click', verifyOTP);

      // Set OTP expiration time to 1 minute (60000 milliseconds)
      setTimeout(() => {
        otp_btn.removeEventListener('click', verifyOTP);
        swal({
          icon: 'error',
          title: 'Error',
          text: 'OTP expired. Please request a new one.',
          confirmButtonText: 'OK'
        });
      }, 60000);
    } else {
      console.log("OTP not sent");
    }
  });
}



const signInbutton = ()=>{
  const auth = firebase.auth();
    const loginemail = document.getElementById("loginemail").value;
    const loginpassword = document.getElementById("password1").value;
  
    console.log("hello" , loginemail, loginpassword, auth)
    auth.signInWithEmailAndPassword(loginemail,loginpassword)
  .then((result) => {
    swal({
      icon:'success',
      title:'success',
      text:'Please verify with OTP to proceed',
      confirmButtonText: 'OK'
    });
    otbtn.style.display = "block";
  })
  .catch((error) => {
    console.log(error)
    swal({
      icon: 'error',
      title: 'Error',
    text: 'Wrong user data please re-check',
    confirmButtonText: 'OK'
    });
 });
  } 
  
  // function Lastpage() {
  //   window.location.href = "lastpage.html";
  // }