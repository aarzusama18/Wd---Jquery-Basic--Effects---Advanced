$(document).ready(function () {
  // Array of colors
  var colors = [
    "lightblue",
    "lightgreen",
    "lightcoral",
    "lightyellow",
    "lightpink",
  ];
  var currentIndex = 0;

  // Change color on button click
  $("#change-color-btn").click(function () {
    // Increment the index
    currentIndex = (currentIndex + 1) % colors.length;

    // Change the background color
    $("#color-box").css("background-color", colors[currentIndex]);
  });
});
