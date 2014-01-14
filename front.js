	var kcColor=new Array("red","yellow","green","cyan","blue","Fuchsia"), kcCount=0, interval;
	function rainb(){
	    if (kcCount ==kcColor.length-1) {kcCount=0} else {kcCount +=1}
	    $('#hello-world').animate({color:kcColor[kcCount]}, 1000);
		interval = setTimeout("rainb()", 500);
	}
	
	$(document).ready(function() {
	   //Start Color Changing
	   rainb();
	});