/* article responsive  */
const article__title = $(".article__title");

const resizeArticle = () => {
  if ($(window).width() < 1440 && $(window).width() > 769) {
    for (let el = 0; el < article__title.length; el++) {
      article__title.eq(el).prependTo($(".containerTitleJS").eq(el));
    }
  } else if ($(window).width() < 769) {
    for (let el = 0; el < article__title.length; el++) {
      article__title.eq(el).prependTo($(".columnTitleJS").eq(el));
    }
  }
};

resizeArticle();

$(window).on("resize", function () {
  resizeArticle();
  console.log("resizeArticle-1");
  
});
