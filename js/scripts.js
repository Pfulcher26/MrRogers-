//BL 

//UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#input1").val();
    const range = Array.from({length: userNumber}, (x,i) => i);
    const newRange = range.map(function(element) {
      return element * 2;
    });
    $("#output").text(newRange);
  });
});

/*let doubledArray = [];
    result.forEach(function(element) {
    if element === 1 {
    alert("you crazy")
  }
  newarray.push(element);



