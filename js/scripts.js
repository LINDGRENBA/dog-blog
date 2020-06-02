$(document).ready(function() {
  $("button#dark-theme").click(function() {
    $("body").removeClass();
    $("body").addClass("dark1");
  });

  $("button#light-theme").click(function() {
    $("body").removeClass();
    $("body").addClass("light1");
  });
});