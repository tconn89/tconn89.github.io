// external js
// http://masonry.desandro.com/masonry.pkgd.js
// http://masonry.desandro.com/bower_components/classie/classie.js

docReady( function() {
  $('#masonry-link').click(function(){
    $('#masonry-container').toggle()
  });

  

  cropBanner();

  var container = document.querySelector('#container');
  var msnry = new Masonry( container, { 
    columnWidth: 250,
    isAnimated: true
  });
  imagesLoaded( container, function() {
      msnry.layout();
    });

  eventie.bind( container, 'click', function( event ) {
    // don't proceed if item content was not clicked on
    var target = event.target;
    if ( !classie.has( target, 'clickable' )  ) {
      return;
    }
    var itemElem = target.parentNode;
    classie.toggleClass( itemElem, 'is-expanded' );

    msnry.layout();           
  });
  
});

// Crop Projects Banner
function cropBanner(){
  var banner = $('.badge-container')
  banner.css("height", function() {return .66*banner.width();});
}

function adjustCover(){

}

$(window).resize(function(){
  cropBanner();  
});


