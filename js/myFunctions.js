// Project on-hover
  $('.proj-description').hide();

  $(".proj-onHover").mouseover(showProjDescription);
  $(".proj-onHover").mouseout(hideProjDescription);

  $('.pulse > span').hover( function() {$(this).children().css("color", "white"); },
      function() {$(this).children().css("color", "#EE3769"); });

// SVG RetroBadge Cropping
  cropBanner();

  $(window).resize(function(){
    cropBanner();  
  });
//check git error

function showProjDescription(){
  $(this).next().slideDown(300);

}

function hideProjDescription(){
  $(this).next().slideUp(300);
}

// Crop Projects Banner, eliminate excess white space
function cropBanner(){
  var banner = $('.badge-container')
  banner.css("height", function() {return .66*banner.width();});
}

//scrolling and fixed pos for footer

// var footer = $(".footer");

// $(window).on("scroll", function(e) {
    
//   if ($(window).scrollTop() > 147) {
//     footer.addClass("fix-footer");
//   } else {
//     footer.removeClass("fix-footer");
//   }
  
// });





