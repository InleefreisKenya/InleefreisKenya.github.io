var w=window.innerWidth;
var h=window.innerHeight;
if(w<h&&screen.width<=800){window.location="#"}

var url = window.location.hash;
var blogcounter= 0;
var blogarray = ['box'];
var ScreenFitter = function() {
	$('.bg').css('width', w);
	$('.bg').css('height', h*3);
};
function parallax(){
	var scrolled = $(window).scrollTop();
	$('.bg').css('top', -(scrolled * 0.3) + 'px');
}
var bd = function(d){ //Box-date
	$('#'+ blogarray[blogcounter] + ' a').append(d+'<br>');
};
var ba = function(a){ //Box-author
	blogcounter++;
	blogarray[blogcounter]=("box"+blogcounter);
	$('#'+blogarray[blogcounter]+ ' .pf').css('background','url("../IMG/'+a.toLowerCase()+'.jpg")');
	$('#'+blogarray[blogcounter]+ ' .pf').css('background-size','auto 100%');
	$('#'+blogarray[blogcounter]+ ' a').text(a);
	$('#'+blogarray[blogcounter] +' details').attr('class', 'box_'+a.toLowerCase());
};
var br = function(r){ //Box-day-rating
	switch (r){
		case 0:
			$('#'+blogarray[blogcounter]+' a').append('<br>☆☆☆☆☆<br>');
			break;
		case 1:
			$('#'+blogarray[blogcounter]+ ' a').append('<br>★☆☆☆☆<br>');
			break;
		case 2:
			$('#'+blogarray[blogcounter]+' a').append('<br>★★☆☆☆<br>');
			break;
		case 3:
			$('#'+blogarray[blogcounter]+' a').append('<br>★★★☆☆<br>');
			break;
		case 4:
			$('#'+blogarray[blogcounter]+' a').append('<br>★★★★☆<br>');
			break;
		case 5:
			$('#'+blogarray[blogcounter]+' a').append('<br>★★★★★<br>');
			break;
		default:
			$('#'+blogarray[blogcounter]+' a').append('<br>Niet Beoordeeld.<br>');
			break;
	}
};