/* feedback columns  */
let totalFeedbackItem = $(".feedbackItem").length;
let totalFeedbackItem_span = $(".panelControlFeedback__category_totalFeedbacks-js span");

/* social media items */
let totalSocialMedia = $(".socialMediaFeedback__item").length;
let totalSocialMedia_span = $(".panelControlFeedback__category_socialMedia-js span");

/* function */
const changeTotal = (item, quantity) => {
  item.text(quantity);
};

/* call function  */
changeTotal(totalFeedbackItem_span, totalFeedbackItem);
changeTotal(totalSocialMedia_span, totalSocialMedia);

$(".panelControlFeedback__category").on("click", function () {
  /* active color span */
  let currentIndex = $(event.currentTarget).index();
  if (currentIndex == 1) {
    $(".sort").css({ display: "none" });
  } else {
    $(".sort").css({ display: "flex" });
  }
  console.log(currentIndex);
  $(event.currentTarget).addClass("panelControlFeedback__category_active");
  $(".panelControlFeedback__category")
    .not($(this))
    .removeClass("panelControlFeedback__category_active");

  /* switch tabs */
  $(".feedbackSection__tab ").removeClass("feedbackSection__tab_active");
  $(".feedbackSection__tab ").eq(currentIndex).addClass("feedbackSection__tab_active");

  /* reload slick */
  $(".feedbackItem-slick-js").slick("setPosition");


});
