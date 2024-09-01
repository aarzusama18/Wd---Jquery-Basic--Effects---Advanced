$(document).ready(function () {
  // Toggle Slide
  $("#toggle-btn").click(function () {
    $("#box").slideToggle();
  });

  // Slide Down
  $("#slide-down-btn").click(function () {
    $("#box").slideDown();
  });

  // Slide Up
  $("#slide-up-btn").click(function () {
    $("#box").slideUp();
  });
});
