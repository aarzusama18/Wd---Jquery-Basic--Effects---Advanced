$(document).ready(function () {
  $("#toggle-password").change(function () {
    const type = $(this).is(":checked") ? "text" : "password";
    $("#password").attr("type", type);
  });
});
