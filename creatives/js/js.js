$(document).ready(() => {
  //burger menu
  $(".header__burger-menu").on("click", () => {
    $(event.currentTarget).toggleClass("header__burger-menu_active");
    $(".panel__nav").toggleClass("panel__nav_burger-state");
  });

  // slow scroll
  $("body").on("click", '[href*="#"]', function(e) {
    var fixed_offset = 100;
    $("html,body")
      .stop()
      .animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
    e.preventDefault();
  });

  //Image Back Ground
  function ibg() {
    $.each($(".ibg"), function(index, val) {
      if ($(this).find("img").length > 0) {
        $(this).css(
          "background-image",
          'url("' +
            $(this)
              .find("img")
              .attr("src") +
            '")'
        );
      }
    });
  }
  ibg();

  const checkNumber = /\d/gm;
  const globalCheck = () => {
    $(".contact__input").on("key", () => {
      const check = checkNumber.test($(event.currentTarget).val());
      if (check == false) {
        $(event.currentTarget).addClass("wrong");
      }
    });
  };

  globalCheck();
});
