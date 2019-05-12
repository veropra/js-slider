  $(".next").click(function(){

  var img_corrente = $(".visible");

  $(".slider img").removeClass("visible");

  var next_img = img_corrente.next("img");

  if(next_img.lenght != 0){
  next_img.addClass("visible");
  }else{
  $(".slider img").first().addClass("visible");
  }

});

$(".prev").click(function(){

  var img_corrente = $(".visible");

  var precedente_img = img_corrente.prev("img");

  if(precedente_img.lenght != 0){
  precedente_img.toggleClass("visible");
  }else{
  $(".slider img").last().addClass("visible");
  }

  img_corrente.toggleClass("visible");
  }

});
