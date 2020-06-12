//BL 

//UI
$(document).ready(function() {
  $("form#survey").submit(function(event) {
    event.preventDefault();
    const userNumber = $("#input1").val();
    const range = Array.from({length: userNumber}, (x,i) => i);
    const newRange = range.map(function(element) {
      return element;
    });
    string = newRange.toString();
    newString = string.replace("1", "Beep!", "2");
    newerString = newString.replace("2", "Boop!");
    newestString = newerString.replace("3", "Won't you be my neighbor?")
    $("#output").text(newerString);
  });
});