
var w = Math.max(document.documentElement.clientWidth, window.innerWidth || 0);
var h = Math.max(
document.documentElement.clientHeight, window.innerHeight || 0);

$('.page').height(h);
$('.dropzone').data( "filled", false );
$(document).ready(function() {
        var  evenmore = '1000px';     

    $('.next').on('click', function(e){
            e.preventDefault();
            $('#drag-section').css('margin-left','-' + evenmore);
            
            $('.selected').removeClass('selected').addClass('tab').next().removeClass('tab').addClass('selected'); 
            setTimeout(function(){
                    $("#client_image_preview").attr("src", imagelocation);
            }, 800);
            //change 700px to 1400px go
               
    });
});


// Load tabs
//
// ---------------------------
var img = new Image();
var imagelocation = 'time.png'
//--------------------------------
$(function() {
    $( ".draggable" ).draggable({
        revert: true,
        cursor: 'move',
        start: function(){
            $(this).addClass('drug');
        },
        stop: function(){
            $(this).removeClass('drug');
        }
    });
    $('.dropzone').droppable({
        drop: function( event, ui ) {

            var innerText = $(this).children('.priority');
            innerText.empty().html(ui.draggable.html());

            var newId = $('.drug').attr('id');
            if(!$(this).data('filled')){
                $(this).addClass(newId);
                ui.draggable.slideToggle('slow');
                $(this).data('filled', ui.draggable);
            }
            else {

            
                $(this).removeClass('red');
                $(this).removeClass('pink');
                $(this).removeClass('blue');
                $(this).addClass(newId);
                ui.draggable.slideToggle('slow');
                $(this).data('filled').slideToggle('slow');
                $(this).data('filled', ui.draggable);
            }
        }
    });
});
