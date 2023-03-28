// you can see both varible anme is name but they have their own scope
(
    function (message){
      var superMan = "Batman"
      console.log(message, superMan)
    }
)("Hello");
(
    function (message){
      var superMan = "superman"
      console.log(message, superMan)
    }
)("Hey")