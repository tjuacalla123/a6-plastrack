$(document).ready(function(){
  console.log("ready");
  
  $("#create-plastic").click(function(){

  })
  
  var plasticTypes = JSON.parse(sessionStorage.getItem("plastic-types"));
  if (plasticTypes != null) {
    for (var i = 0; i < Object.keys(plasticTypes).length; i++) {
      console.log(i);
      console.log("wtf");
      $(".plastic-contents").append("<div class='single-plastic ui-draggable ui-draggable-handle' id= " + 
      plasticTypes[i]["name"] + ">" + plasticTypes[i]["icon"] +"</div>");
    }
  }
  console.log(plasticTypes);
  

  
});
