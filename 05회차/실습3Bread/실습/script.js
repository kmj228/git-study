// .logo를 클릭하면
$(".logo").on("click", function () {
  // .wrapper .about-section에 bread라는 클래스 추가
  $(".wrapper .about-section").addClass("bread");
});

// .close를 클릭하면
$(".close").on("click", function () {
  // .wrapper .about-section에 bread라는 클래스 제거거
  $(".wrapper .about-section").removeClass("bread");
});
