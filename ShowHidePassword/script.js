var state = false;
function toggle() {
  if (state) {
    document.getElementById("password").setAttribute("type", "Password");
    document.getElementById("eye").style.color = "#7a797e";
    state = false;
    console.log("hello");
  } else {
    document.getElementById("password").setAttribute("type", "text");
    document.getElementById("eye").style.color = "#5887ef";
    state = true;
  }
}
