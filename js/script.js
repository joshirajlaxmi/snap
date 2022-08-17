const menuBtnContainer = document.querySelector(".header__menu ");

menuBtnContainer.addEventListener("click", () => {
  menuBtnContainer.classList.toggle("active");
});

// function
function onlyOne(checkbox) {
  var checkboxes = document.getElementsByName("head-titles");
  checkboxes.forEach((item) => {
    if (item !== checkbox) {
      item.checked = false;
    }
  });
}
