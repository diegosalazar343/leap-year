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

    let yearOutput = parseInt($("#yearInput").val());

console.log(yearOutput);
    function isLeapYear(year) {
      if ((yearOutput % 4 === 0) && (yearOutput % 100 !== 0) || (yearOutput % 400 === 0)) {
        return true;
      } else {
        return false;
      }
    };
    console.log(isLeapYear(2020))
  });
});
