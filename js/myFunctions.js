
//set div height for blockquotes div

// var sumHeights = 0;
// $('blockquote').each(function(x) {
//   sumHeights += $(this).height();
// });

// $(".quotes").css('height',sumHeights);



//Masonry Stuff

docReady( function() {

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