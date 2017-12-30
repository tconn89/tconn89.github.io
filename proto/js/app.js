$(".project-description").hide();


function showDescription () {
	$(this).next().slideDown(100);
}

function hideDescription () {
	$(this).next().slideUp(100);
}


$(".featured-image").mouseover(showDescription)
$(".featured-image").mouseout(hideDescription)
