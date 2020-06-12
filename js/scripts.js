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
    newString = string.replace(/1 + i/g, "Beep!");
    newerString = newString.replace(/2/g, "Boop!");
    newestString = newerString.replace(/3/g, "Won't you be my neighbor?")
    $("#output").text(newestString);
  });
});