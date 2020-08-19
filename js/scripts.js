/* $(document).ready(function() {
  $("#leapYear").submit(function(event) {
  event.preventDefault;
  let yearOutput= parseInt($("#yearInput").val());
 function isLeapYear(year) {
      if ((yearOutput % 4 === 0) && (yearOutput % 100 !== 0) || (yearOutput % 400 === 0)) {
        return true;
      } else {
        return false;
      }


  console.log(yearOutput);
}); */


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
    $("#year").text(isLeapYear(year));
    $("#leapResult").show();
    $("#leapYear").hide();

  });
});
