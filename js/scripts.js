//BL 

//UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#input1").val();
    const range = Array.from({length: userNumber}, (x,i) => i);
    const newRange = range.map(function(element) {
      if (element.includes(1)) === "true" {
        range.splice(element, element, 'Beep!');
      }
        return element;   
    });
    $("#output").text(newRange);
  });
});

 
