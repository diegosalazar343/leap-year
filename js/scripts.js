$(document).ready(function() {
  $("#leapYear").submit(function(event) {
  event.preventDefault();

    let year = parseInt($("#yearInput").val());

console.log(year);
    function isLeapYear(year) {
      if ((year % 4 === 0) && (year % 100 !== 0) || (year % 400 === 0)) {

        $("#leapTrue").show();

        return true;
      } else {
        $("#leapFalse").show();
        return false;

      }

    };
    $("span.yearInput").text(year);
    $("#yearInput").text(isLeapYear(year));
    $("#leapYear").hide();

  });
});
