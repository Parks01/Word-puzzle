$(document).ready(function() {
  // $("#formSubmit").click(function(event) {
  //   debugger;
  //   var countTo = parseInt($("#countTo").val());
  //   var countBy = parseInt($("#countBy").val());
  //
  //   for(var i = countBy; i <= countTo; i += countBy){
  //     $("#youCountedNumber").append(i + "<br>");
  //   }
  //   event.preventDefault();
  // });

  $("#btnPuzzle").click(function (event) {
    var sentence = $("#sentence").val();
    var puzzle = [];
    for(var i = 0; i < sentence.length; i++){
      if(sentence[i] === "a" ||sentence[i] === "e"||sentence[i] === "i"||sentence[i] === "o"||sentence[i] === "u") {
         puzzle.push("-");
       }
      else{
        puzzle.push(sentence[i])
      }
    }
    puzzle.toString();
    $("#puzzleOutput").append(puzzle);
    event.preventDefault();
  });
});
