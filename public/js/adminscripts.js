
// order form fields
var username = document.getElementById('username')
var password = document.getElementById('password')

// login
function login() {
  console.log("Login...")
  window.location='http://localhost:3000/admin.html';
}

// resets login fields
function resetForm() {
  yourname.value = 'John Doe';
  phone.value = "123-456-7890";
  console.log("Login fields reset");
}

function invalidLogin() {
  alert("Invalid Username/Password. Please try again.");
}

console.log("a3-jhyuen-admin")
console.log("Welcome to Fantastic Fries!")
