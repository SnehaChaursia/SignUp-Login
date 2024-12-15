Interactive Login and Signup System 🔐🔗

Overview

This project is an Interactive Login and Signup System built using HTML, CSS, and JavaScript. It provides a seamless interface for users to register and log in, with user data stored locally using the browser's localStorage. This makes it an ideal project for beginners to learn about client-side web development and form handling.

Features 🔥

Responsive Design: The interface dynamically adjusts based on user interaction.

Validation: Ensures all fields are filled out and passwords match during signup.

Local Storage Integration: Stores user credentials in localStorage for simplicity.

Dynamic Navigation: Users can toggle between signup and login pages seamlessly.

Interactive Buttons: Hover effects on buttons enhance user experience.

Files Included 📂

index.html: Contains the structure of the application.

style.css: Provides styling for the application, ensuring an attractive and interactive design.

script.js: Contains the logic for form handling and local storage management.

How It Works ✨

Signup Flow 🔑

User fills out the Name, Email, Password, and Confirm Password fields.

The system validates:

All fields are filled.

Password and Confirm Password match.

If the user is already registered (email exists in localStorage), they are alerted.

On successful signup, the user is redirected to the login page.

Login Flow ➡

User enters their Email and Password.

The system checks if the credentials match the stored values in localStorage.

If successful, a success message is displayed. Otherwise, an error message prompts the user to try again.

Code Highlights 🌟

Signup Button Logic:

signupbtn.addEventListener('click', () => {
  const Name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const password = document.getElementById("password").value;
  const confirmpassword = document.getElementById("Confirmpassword").value;

  if (!Name || !email || !password || !confirmpassword) {
    alert("Please fill all the fields");
    return;
  }
  if (password !== confirmpassword) {
    alert("Confirm password not match");
    return;
  }
  if (localStorage.getItem(email)) {
    alert("Already Registered");
    login_page.click();
    return;
  }
  localStorage.setItem(email, password);
  login_page.click();
});

Login Button Logic:

loginbtn.addEventListener('click', () => {
  const user = document.getElementById('mail').value;
  const password = document.getElementById('passkey').value;

  if (!user || !password) {
    alert('Please fill details');
    return;
  }

  let savedPassword = localStorage.getItem(user);
  if (savedPassword === password) {
    alert("Successfully login");
  } else {
    alert("Incorrect password, try again!");
  }
  localStorage.setItem("isloggedIn", user);
});

Styling Features 💄

Background: A dark-themed background for better contrast.

Hover Effects: Buttons change size and color when hovered.

Responsive Alignment: Flexbox ensures the interface is centered on the screen.

Example CSS:

body {
  margin: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #100202;
  color: rgb(252, 19, 19);
  font-family: Arial, Helvetica, sans-serif;
  font-weight: lighter;
}

#signupbtn:hover, #loginbtn:hover {
  transform: scale(1.10);
  background-color: rgb(252, 19, 19);
  color: white;
}

How to Use 🔍

Clone or download the project.

Open index.html in a browser.

Use the Sign Up page to register a user.

Use the Login page to log in with registered credentials.

Future Improvements 🚀

Password Encryption: Store passwords securely using hashing algorithms.

Backend Integration: Use a database for persistent data storage.

Enhanced UI/UX: Add animations and responsiveness for mobile devices.

Logout Functionality: Allow users to log out and clear session data.

Emojis and Visual Elements 🎨

Hover effects and button scaling enhance interactivity.

Emojis guide the user experience and make the interface more engaging.

