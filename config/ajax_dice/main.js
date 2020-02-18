$(function () {
  $.ajax({
    type: "GET",
    url: "http://roll.diceapi.com/json/d6",
    success: function(data) {
      console.log("success", data);
    }
  });
});