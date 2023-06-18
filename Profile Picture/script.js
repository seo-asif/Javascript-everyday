const profilePic = document.querySelector(".image img ");
const userFile = document.querySelector(".user-file");

userFile.onchange = function () {
  profilePic.src = URL.createObjectURL(userFile.files[0]);
};
