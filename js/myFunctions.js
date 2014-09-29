// external js
// http://masonry.desandro.com/masonry.pkgd.js
// http://masonry.desandro.com/bower_components/classie/classie.js

docReady( function() {

  var container = document.querySelector('#container');
  var msnry = new Masonry( container, { 
    columnWidth: 250
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
    

    window.setTimeout(msnry.layout(),2000);
      
    
    
  });
  
});