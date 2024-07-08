document.addEventListener("DOMContentLoaded", function () {
  var closeIcon = document.getElementById("close-announcement-bar");
  var announcementBar = document.querySelector(".announcement-bar");

  if (closeIcon) {
    closeIcon.addEventListener("click", function () {
      announcementBar.style.display = "none";
    });
  }
});
