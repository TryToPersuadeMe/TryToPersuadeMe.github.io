$(".application__form").submit(function () {
  let theForma = $(this),
    erconts = theForma.find(".application__erconts");
  $.ajax({
    type: "POST",
    url: "/inc/send.php",
    data: theForma.serialize(),
    beforeSend: function () {
        erconts.html("<p class='application__sucsess'> Спасибо! Мы с вами свяжемся в ближайшее время!</p>");
    },
    success: function (result) {
      erconts.html(result);
    },
    error: function () {
      erconts.html("<p class='application__error'>Произошла ошибка!</p>");
    },
  });
  return false;
});
