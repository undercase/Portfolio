$(document).ready(() => {
  $(".red").hover(() => {
    $(".header-container").css("background", "#DB3340");
    $(".red").css("color", "#fff");
  }, () => {
    $(".header-container").css("background", "#fff");
    $(".red").css("color", "#DB3340");
  });

  $(".blue").hover(() => {
    $(".header-container").css("background", "#28abe3");
    $(".blue").css("color", "#fff");
    $("h1").css("color", "#fff");
  }, () => {
    $(".header-container").css("background", "#fff");
    $(".blue").css("color", "#28abe3");
    $("h1").css("color", "#28abe3");
  });

  $(".green").hover(() => {
    $(".header-container").css("background", "#1FDA9A");
    $(".green").css("color", "#fff");
  }, () => {
    $(".header-container").css("background", "#fff");
    $(".green").css("color", "#1FDA9A");
  });

  $(".yellow").hover(() => {
    $(".header-container").css("background", "#e8b71a");
    $(".yellow").css("color", "#fff");
  }, () => {
    $(".header-container").css("background", "#fff");
    $(".yellow").css("color", "#e8b71a");
  });
});
