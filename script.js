  $(".next").click(function(){

  var img_corrente = $(".visible");

  $(".slider img").removeClass("visible");

  var next_img = img_corrente.next("img");

  var bullet_corrente = $(".fas.fa-circle");

  var next_bullet = bullet_corrente.next(".fa-circle");

  if(next_img.length != 0){
  next_img.addClass("visible");
  bullet_corrente.toggleClass('fas').toggleClass('far');
  next_bullet.toggleClass('fas').toggleClass('far');

  }else{

  $(".slider img").first().addClass("visible");
  bullet_corrente.removeClass('fas').addClass('far');
  next_bullet = $('.bullet i').first().addClass('fas').removeClass('far');
  }

});


$(".prev").click(function(){

  var img_corrente = $(".visible");

  var precedente_img = img_corrente.prev("img");

  var bullet_precedente = $('.fas.fa-circle');

  var prev_bullet = bullet_precedente.prev('.fa-circle');

  if(precedente_img.length != 0){
  precedente_img.toggleClass("visible");
  bullet_precedente.toggleClass('fas').toggleClass('far');
  prev_bullet.toggleClass('fas').toggleClass('far');

  }else{

  $(".slider img").last().addClass("visible");
  img_corrente.removeClass("visible");
  bullet_precedente.removeClass('fas').addClass('far');
  prev_bullet = $('.bullet i').last().addClass('fas').removeClass('far');
  }

});
