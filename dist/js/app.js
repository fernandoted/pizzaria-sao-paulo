// app.js of Pizzaria São Paulo's project (https://github.com/fernandoted/pizzaria-sao-paulo)
// author: Fernando Ted (https://github.com/fernandoted/)
// 08-31-2016

/* function to add class */
function openOffcanvas($element){
	$element.addClass("open-offcanvas");
}
/* function to remove class */
function hideOffcanvas($element){
	$element.removeClass("open-offcanvas");
}

function slideMenuicon($element){
	$element.addClass("slide-menu-icon");
}

$('.open-off').on('click', function(){
	openOffcanvas($('html'));
});
/* slide to show side-bar menu */
$('html,body').on('swipeleft', function(){
	openOffcanvas($('html'));
});
/* slide to hide side-bar menu */
$('html,body').on('swiperight', function(){
	hideOffcanvas($('html'));
});
/* hide side-bar by clicking outside */
$('html,body').on('click', function(e){
	if(this === e.target)
	hideOffcanvas($('html'))
});

/* map */
var myCenter=new google.maps.LatLng(-23.432943,-45.069950);

function initialize(){
	var mapProp = {
  		center:myCenter,
	  	zoom:17,
  		mapTypeId:google.maps.MapTypeId.ROADMAP
	};

var map=new google.maps.Map(document.getElementById("googleMap"),mapProp);

var marker=new google.maps.Marker({
	position:myCenter,
});

marker.setMap(map);
}

google.maps.event.addDomListener(window, 'load', initialize);
