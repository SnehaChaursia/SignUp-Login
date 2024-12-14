const signupbtn=document.getElementById("signupbtn")
signupbtn.addEventListener('click',()=>{
     const Name=document.getElementById("name").value;
     const email=document.getElementById("email").value;
     const password=document.getElementById("password").value;
     const confirmpassword=document.getElementById("Confirmpassword").value;
     if(!Name||!email||!password||!confirmpassword){
        alert("Please fill all the fields");
        return;
     }
   if (password!= confirmpassword){
    alert("Confirm password not match");
    return;
   }
     if (localStorage.getItem(email)===password){
    alert("Already Registered")
     return;
       }
     localStorage.setItem(email,password);
     
})