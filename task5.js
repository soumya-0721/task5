const user = {
  username: "admin",
  password: "1234"
};
function login(inputUsername, inputPassword) {
  if (inputUsername === user.username && inputPassword === user.password) {
    return "Login successful";
  } else {
    return "Invalid credentials";
  }
}
function check() {
  let u = document.getElementById("u").value;
  let p = document.getElementById("p").value;
  document.getElementById("msg").innerText = login(u, p);
}