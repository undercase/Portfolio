$(document).ready(() => {
  $(".red").hover(() => {
    $(".header-container").css("background", "#DB3340");
    $(".red").css("color", "#fff");
    $("h1").css("color", "#fff");
  }, () => {
    $(".header-container").css("background", "#fff");
    $(".red").css("color", "#DB3340");
    $("h1").css("color", "#000");
  });

  $(".yellow").hover(() => {
    $(".header-container").css("background", "#E8B71A");
    $(".yellow").css("color", "#fff");
    $("h1").css("color", "#fff");
  }, () => {
    $(".header-container").css("background", "#fff");
    $(".yellow").css("color", "#E8B71A");
    $("h1").css("color", "#000");
  });

  $(".green").hover(() => {
    $(".header-container").css("background", "#1FDA9A");
    $(".green").css("color", "#fff");
    $("h1").css("color", "#fff");
  }, () => {
    $(".header-container").css("background", "#fff");
    $(".green").css("color", "#1FDA9A");
    $("h1").css("color", "#000");
  });
});
