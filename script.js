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
    login_page.click(); 
     }
     localStorage.setItem(email,password);
     login_page.click(); 
})
document.getElementById("login_page").addEventListener('click',()=>{
  document.querySelector('.sigup_page').style.display="none";
  document.querySelector('.Login_page').style.display="block"

})
document.getElementById("signup_page").addEventListener('click',()=>{
  document.querySelector('.sigup_page').style.display="block";
  document.querySelector('.Login_page').style.display="none"

})

const loginbtn=document.getElementById('loginbtn');
loginbtn.addEventListener('click',()=>{
  const user=document.getElementById('mail').value;
  const password=document.getElementById('passkey').value;
  if(!user||!password){
    alert('Please fill details')
    return;
  }
  let savedPAssword=localStorage.getItem(user);
     if(savedPAssword===password){
        alert("Successfully login")
     } else{
        alert("Icorrect password try again!")
     }
     localStorage.setItem("isloggedIn",user);
})

// add a feature user not registered and redirect to signup page.
// incorrect username/password
// let savedPAssword=localStorage.getItem(user);
// ****if(savedPAssword===password){
//   alert("Successfully login")
// } else{
//   alert("Icorrect password try again!")
// }
// localStorage.setItem("isloggedIn",user);**** sir s smjhna hai.