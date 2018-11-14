
var tblRecord = {};
tblRecorduser = [];
tblRecordpass = [];
$(document).ready(function(){
  $(".save").click(function(){
      var userr = $(".userr").val();
      var pass = $(".pass").val();
tblRecord[userr] = pass;
localStorage.setItem(userr, pass);
console.log(tblRecord)
  });
  $(".submit").click(function(){
    var act = $(".act").val();
    var x = localStorage.getItem(act);
    console.log(x);
    $(".dis").text("Your "+ act + " password is " + x);
  });

});
