
// order form fields
var username = document.getElementById('username')
var password = document.getElementById('password')

// logout
function logout() {
  console.log("Logout...")
  window.location='http://localhost:3000/login.html';
}

// reset queue - clears old orders
function reset() {
  console.log("Reset Queue...")
}

function invalidLogin() {
  alert("Invalid Username/Password. Please try again.");
}

// add something that refreshes queue every few seconds

console.log("a3-jhyuen-admin")
console.log("Welcome to Fantastic Fries!")
