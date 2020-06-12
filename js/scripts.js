//BL 

//UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#input1").val();
    $("#output").text(number1);
  });
});