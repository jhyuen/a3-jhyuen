
// order form fields
var username = document.getElementById('username')
var password = document.getElementById('password')

// login
function login() {
  console.log("Login...")
  window.location='http://localhost:3000/admin.html';
}

// back to kiosk 
function kiosk() {
  console.log("Kiosk...")
  window.location='http://localhost:3000';
}

// resets login fields
function resetForm() {
  username.value = 'Username';
  password.value = 'Password';
  console.log("Login fields reset");
}

// invalid login
function invalidLogin() {
  alert("Invalid Username/Password. Please try again.");
}




console.log("a3-jhyuen-login")
console.log("Welcome to Fantastic Fries!")
