$(document).ready(function() {
  $("#formSubmit").click(function(event) {
    debugger;
    var countTo = parseInt($("#countTo").val());
    var countBy = parseInt($("#countBy").val());

    for(var i = countBy; i <= countTo; i += countBy){
      $("#youCountedNumber").append(i + "<br>");
    }
    event.preventDefault();



  });

});
