//Use single column mode for onclick!
var container_width = $('#pinBoot').width();

$( ".data-visuals" ).click(function() {
    if (  $( this ).css( "transform" ) == 'none' ){
        $(this).css("width",container_width);
    } else {
        $(this).css("transform","" );
    }
});