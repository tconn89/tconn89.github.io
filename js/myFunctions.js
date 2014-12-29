// Project on-hover
  $('.proj-description').hide();

  $(".proj-onHover").mouseover(showProjDescription);
  $(".proj-onHover").mouseout(hideProjDescription);

// SVG RetroBadge Cropping
  cropBanner();

  $(window).resize(function(){
    cropBanner();  
  });


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





