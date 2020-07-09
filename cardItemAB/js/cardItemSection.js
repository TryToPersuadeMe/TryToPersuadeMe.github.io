// Plugin for change calendar from/to
$('input[name="cardItemForm-Date"]').daterangepicker({
  singleDatePicker: true,
  locale: {
    direction: "ltr",
    format: "DD/MM/YYYY HH:mm",
    separator: " - ",
    applyLabel: "Apply",
    cancelLabel: "Clear",
    fromLabel: "From",
    toLabel: "To",
    customRangeLabel: "Custom",
    daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    firstDay: 1,
  },
  showCustomRangeLabel: false,
  startDate: "05/05/2020",
  endDate: "05/11/2020",
  opens: "right",
  autoUpdateInput: false,
});

$('input[name="cardItemForm-Date"]').daterangepicker({
  singleDatePicker: true,
  locale: {
    direction: "ltr",
    format: "DD/MM/YYYY HH:mm",
    separator: " - ",
    applyLabel: "Apply",
    cancelLabel: "Clear",
    fromLabel: "From",
    toLabel: "To",
    customRangeLabel: "Custom",
    daysOfWeek: ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
    monthNames: [
      "January",
      "February",
      "March",
      "April",
      "May",
      "June",
      "July",
      "August",
      "September",
      "October",
      "November",
      "December",
    ],
    firstDay: 1,
  },
  showCustomRangeLabel: false,
  startDate: "05/05/2020",
  endDate: "05/11/2020",
  opens: "left",
  autoUpdateInput: false,
});
$('input[name="cardItemForm-Date"]').on("apply.daterangepicker", function (ev, picker) {
  $(this).val(picker.startDate.format("DD/MM/YYYY"));
});

$('input[name="cardItemForm-Date"]').on("cancel.daterangepicker", function (ev, picker) {
  $(this).val("");
});
