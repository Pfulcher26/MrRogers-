//BL 

//UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#input1").val();
    const range = Array.from({length: userNumber}, (x,i) => i);
    const newRange = range.map(function(element) {
      if (element === 1) {
        element.replace(/1/g, "beep!");
      } else if (element === 2) {
        alert("Ho!");
      } else {
        return element * 2
      }
    });
    $("#output").text(newRange);
  });
});