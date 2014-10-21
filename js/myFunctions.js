
//set div height for blockquotes div
//bad code

// var sumHeights = 0;
// $('blockquote').each(function(x) {
//   sumHeights += $(this).height();
// });

// $(".quotes").css('height',sumHeights);

$('.khosla').css('width', 2*$('.ireneCitation').width())

//Sticky Navbar
var  mn = $(".navbar");
    mns = "nav-scrolled";
    hdr = $('.header').height();

$(window).scroll(function() {
  if( $(this).scrollTop() > hdr ) {
    mn.addClass(mns);
  } else {
    mn.removeClass(mns);
  }
});

//Masonry Stuff

docReady( function() {

  var container = document.querySelector('#container');
  var msnry = new Masonry( container, { 
    
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