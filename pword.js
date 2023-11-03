let eye = document.getElementById("eye");
let password = document.getElementById("password");
eye.addEventListener("click", () => {
  if (password.type == "password") {
    password.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
    
  } else {
    password.type = "password";
    eye.classList.add ("fa-eye-slash");
    eye.classList.remove("fa-eye");
      
  }

});

    
