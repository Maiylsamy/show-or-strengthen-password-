let eye = document.getElementById("eye");
let password = document.getElementById("password");
let msg=document.getElementById("message");
let str=document.getElementById("strength");



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

password.addEventListener('input',()=>{
    if(password.value.length>0){
        msg.style.display="block";

    }else{
        msg.style.display="none";
    };

    if(password.value.length < 4){
        str.innerHTML="weak!";
        msg.style.color="red";

    }else if(password.value.length >= 4 && password.value.length <8 ){
        str.innerHTML = "medium.";
        msg.style.color="blue";


        
    }else if(password.value.length>8){
        str.innerHTML ="strong.";
        msg.style.color="green";

    }


})

    
