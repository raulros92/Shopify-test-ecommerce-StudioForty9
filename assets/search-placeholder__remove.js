document.addEventListener("DOMContentLoaded", function () {
  var searchInput = document.getElementById("main-search-input");

  searchInput.addEventListener("focus", function () {
    searchInput.placeholder = "";
  });

  searchInput.addEventListener("blur", function () {
    if (searchInput.value === "") {
      searchInput.placeholder = searchInput.getAttribute("data-placeholder");
    }
  });
});
