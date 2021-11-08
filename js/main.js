$(document).on("click", ".toggle-text-button", function () {
  // Check if text is more or less
  if ($(this).text() == "続きを読む") {
    // Change link text
    $(this).text("閉じる");
    // Travel up DOM tree to parent, then find any children with CLASS .toggle-text and slide down
    $(this).parent().children(".toggle-text").slideDown();
    $(this).css("background-image","url('../img/icon_close.png')");
  } else {
    // Change link text
    $(this).text("続きを読む");
    // Travel up DOM tree to parent, then find any children with CLASS .toggle-text and slide up
    $(this).parent().children(".toggle-text").slideUp();
    $(this).css("background-image","url('../img/icon_open.png')");
  }
});

var opTop = document.querySelector(".on-top");
var NavTop = 800;
function fixnavBtn() {
  if (window.pageYOffset >= NavTop) {
    opTop.classList.add("fixed");
  } else {
    opTop.classList.remove("fixed");
  }
}
window.addEventListener("scroll", fixnavBtn);