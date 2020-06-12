//BL 

//UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#input1").val();
    let result = Array.from({length: userNumber}, (x,i) => i);
    $("#output").text(result);
  });
});