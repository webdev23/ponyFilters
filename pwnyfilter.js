"use strict";
function gtCk(name){
    var re = new RegExp(name + "=([^;]+)");
    var value = re.exec(document.cookie);
    return (value != null) ? unescape(value[1]) : null;
  }
document.addEventListener("DOMContentLoaded", function(event) {
			console.log("ponyFilters loaded!\n");
			document.documentElement.style.cssText = gtCk('ponyFilters');
			});
		
var hdump="";
hdump += "<form style=\"font-size:13px;vertical-align:bottom;margin:0;padding:0\"><span style='font-size:12px'>🐴 </span>";
hdump += "<label>Brightness<input type=\"checkbox\" id=\"radBright\" title=\"Brightness\" data-current=\"1\" style=\"cursor:pointer\"><label>";
hdump += "<label>Gray<input type=\"checkbox\" id=\"radGray\" title=\"Grayscale\" data-current=\"0\" style=\"cursor:pointer\"><label>";
hdump += "<label>Hue<input type=\"checkbox\" id=\"radHR\" title=\"Hue Rotate\" data-current=\"0deg\" style=\"cursor:pointer\"><\/label>";
hdump += "<\/form><strong>";
hdump += "<a onclick=\"document.documentElement.style='filter:invert(0%);-webkit-filter:invert(0%)'\" href=\"javascript:void(0)\" style=\"font-size:22px;text-decoration:none;vertical-align: top;color:#111111;outline:0\">&#9728;<\/a><\/strong> 		  ";
hdump += "  <form style=\"display:inline;border:0;vertical-align:middle;outline:0\" onchange=\"pwnyFilters()\">";
hdump += "<input style=\"display:inline;border:0;vertical-align:middle;outline:0\" type=\"range\" min=\"0\" max=\"100\" step=\"1\" id=\"inVal\" data-current=\"00\">";
hdump += "<\/form><strong>";
hdump += "<a onclick=\"document.documentElement.style='filter:invert(100%);-webkit-filter:invert(100%)'\" href=\"javascript:void(0)\" style=\"font-size:13px;text-decoration:none;color:#111111;vertical-align:middle;outline:0\">&#127762; <\/a><\/strong><strong><big>";
hdump += "<span id=\"valBox\">";
hdump += "<\/span><\/big><\/strong>";
hdump += "<form style=\"display:inline;font-size:13px;margin:0\">";
hdump += "<label><input type=\"checkbox\" id=\"radInvert\" checked title=\"Invert\" data-current=\"0\" style=\"cursor:pointer\">Invert<\/label>";
hdump += "<label><input type=\"checkbox\" id=\"radSepia\" checked title=\"Sepia\" data-current=\"0\" style=\"cursor:pointer\">Sepia<label>";
hdump += "<label><input type=\"checkbox\" id=\"radSaturate\" checked title=\"Saturate\" data-current=\"0\" style=\"cursor:pointer\">Saturation<label>			 ";
hdump += "<big><bold><span id=\"lock\" onclick=\"writeCookie();this.style.color='yellowgreen';this.innerHTML='✓'\" title=\"Save settings in a cookie\">&nbsp;&#x1F512;</span><\/bold><\/big><\/form>";

var pwnyBar = document.createElement("div");
    pwnyBar.id = "pwny";
    pwnyBar.innerHTML = hdump;
    pwnyBar.style = "position:fixed;top:0px;left:0px;width:100%;font-size:13px;background-color:#DEDEDE;color:#111111;z-index:999;text-align:center";
    console.log(pwnyBar);
var pwnyStyle = document.createElement("style");   
    pwnyStyle.innerHTML = "#pwny{vertical-align:top;margin:0;display:inline;padding:0}input{vertical-align:middle}#valBox{color:grey;font-size:0.8em}#lock{cursor:pointer;font-size:1.13em}";
document.getElementsByTagName("body")[0].appendChild(pwnyBar);
document.getElementsByTagName("body")[0].appendChild(pwnyStyle);				
		


function rdm(){
	return [0,0,0,94,2,0,96,0,1,99,4,1,9,2,0,100,8,0,200,200,13,188,177,0,3,6,166][Math.floor(Math.random()*10)];    		
};
let random = rdm();
document.documentElement.style="filter:invert("+random+"%);-webkit-filter:invert("+random+"%)";   
document.getElementById("inVal").value = random;

function pwnyFilters(){
	if (document.getElementById("radInvert").checked >= 1) {	
		document.getElementById("valBox").innerHTML = document.getElementById("inVal").value+"%";
		var update = document.getElementById("valBox").innerHTML;
		var keepBright = document.getElementById("radBright").dataset.current;			
		var keepSepia = document.getElementById("radSepia").dataset.current+"%";			
	    var keepGrayscale = document.getElementById("radGray").dataset.current+"%";
		var keepHue = document.getElementById("radHR").dataset.current;
		var keepSaturate = document.getElementById("radSaturate").dataset.current+"%";	
		document.documentElement.style.cssText += "filter:brightness("+keepBright+")sepia("+keepSepia+")invert("+update+")saturate("+keepSaturate+")grayscale("+keepGrayscale+")hue-rotate("+keepHue+");-webkit-filter:sepia("+keepSepia+")invert("+update+")saturate("+keepSaturate+")brightness("+keepBright+")grayscale("+keepGrayscale+")hue-rotate("+keepHue+")";
		document.getElementById("radInvert").dataset.current=document.getElementById("inVal").value;			
      }
	if (document.getElementById("radSepia").checked >= 1) {	
		document.getElementById("valBox").innerHTML = document.getElementById("inVal").value+"%";
		var update = document.getElementById("valBox").innerHTML;
		var keepBright = document.getElementById("radBright").dataset.current;			
		var keepInvert = document.getElementById("radInvert").dataset.current+"%";		
		var keepSepia = document.getElementById("radSepia").dataset.current+"%";			
	    var keepGrayscale = document.getElementById("radGray").dataset.current+"%";
		var keepHue = document.getElementById("radHR").dataset.current;
		var keepSepia = document.getElementById("radSepia").dataset.current+"%";		
		document.documentElement.style.cssText += "filter:brightness("+keepBright+")sepia("+update+")invert("+keepInvert+")saturate("+keepSaturate+")grayscale("+keepGrayscale+")hue-rotate("+keepHue+");-webkit-filter:sepia("+update+")invert("+keepInvert+")saturate("+keepSaturate+")brightness("+keepBright+")grayscale("+keepGrayscale+")hue-rotate("+keepHue+")";
		document.getElementById("radSepia").dataset.current=document.getElementById("inVal").value;				
      }
	if (document.getElementById("radSaturate").checked >= 1) {			
		document.getElementById("valBox").innerHTML = document.getElementById("inVal").value+"%";
		let update = document.getElementById("valBox").innerHTML;
		var keepBright = document.getElementById("radBright").dataset.current;			
		var keepInvert = document.getElementById("radInvert").dataset.current+"%";		
		var keepSepia = document.getElementById("radSepia").dataset.current+"%";			
	    var keepGrayscale = document.getElementById("radGray").dataset.current+"%";
		var keepHue = document.getElementById("radHR").dataset.current;
		document.documentElement.style.cssText += "filter:brightness("+keepBright+")sepia("+keepSepia+")invert("+keepInvert+")saturate("+update+")grayscale("+keepGrayscale+")hue-rotate("+keepHue+");-webkit-filter:sepia("+keepSepia+")invert("+keepInvert+")saturate("+update+")brightness("+keepBright+")grayscale("+keepGrayscale+")hue-rotate("+keepHue+")";
		document.getElementById("radSaturate").dataset.current = document.getElementById("inVal").value;				
      }
	if (document.getElementById("radBright").checked >= 1) {			
		document.getElementById("valBox").innerHTML = document.getElementById("inVal").value;
		var update = ((document.getElementById("valBox").innerHTML)/100)+0.3;
	    var keepGrayscale = document.getElementById("radGray").dataset.current+"%";
		var keepHue = document.getElementById("radHR").dataset.current;
		var keepSepia = document.getElementById("radSepia").dataset.current+"%";
		var keepInvert = document.getElementById("radInvert").dataset.current+"%";
		var keepSaturate = document.getElementById("radSaturate").dataset.current+"%";		
		document.documentElement.style.cssText += "filter:brightness("+update+")sepia("+keepSepia+")invert("+keepInvert+")saturate("+keepSaturate+")grayscale("+keepGrayscale+")hue-rotate("+keepHue+");-webkit-filter:sepia("+keepSepia+")invert("+keepInvert+")saturate("+keepSaturate+")brightness("+update+")grayscale("+keepGrayscale+")hue-rotate("+keepHue+")";
		document.getElementById("radBright").dataset.current = update;			
      }
	if (document.getElementById("radGray").checked >= 1) {			
		document.getElementById("valBox").innerHTML = document.getElementById("inVal").value;
		var update = (document.getElementById("inVal").value)+"%";
		var keepBright = document.getElementById("radBright").dataset.current;		
		var keepHue = document.getElementById("radHR").dataset.current;
		var keepSepia = document.getElementById("radSepia").dataset.current+"%";
		var keepInvert = document.getElementById("radInvert").dataset.current+"%";
		var keepSaturate = document.getElementById("radSaturate").dataset.current+"%";		
		document.documentElement.style.cssText += "filter:brightness("+keepBright+")sepia("+keepSepia+")invert("+keepInvert+")saturate("+keepSaturate+")grayscale("+update+")hue-rotate("+keepHue+");-webkit-filter:sepia("+keepSepia+")invert("+keepInvert+")saturate("+keepSaturate+")brightness("+keepBright+")grayscale("+update+")hue-rotate("+keepHue+")";
		document.getElementById("radGray").dataset.current = update;			
      }
	if (document.getElementById("radHR").checked >= 1) {			
		document.getElementById("valBox").innerHTML = document.getElementById("inVal").value;
		var update = ((document.getElementById("inVal").value)*1.8)+"deg";
		var keepBright = document.getElementById("radBright").dataset.current;		
		var keepSepia = document.getElementById("radSepia").dataset.current+"%";
	    var keepGrayscale = document.getElementById("radGray").dataset.current+"%";			    
		var keepInvert = document.getElementById("radInvert").dataset.current+"%";
		var keepSaturate = document.getElementById("radSaturate").dataset.current+"%";		
		document.documentElement.style.cssText += "filter:brightness("+keepBright+")sepia("+keepSepia+")invert("+keepInvert+")saturate("+keepSaturate+")grayscale("+keepGrayscale+")hue-rotate("+update+");-webkit-filter:sepia("+keepSepia+")invert("+keepInvert+")saturate("+keepSaturate+")brightness("+keepBright+")grayscale("+keepGrayscale+")hue-rotate("+update+")";
		document.getElementById("radHR").dataset.current = update;			
      }		      	      
}
function writeCookie() {
	document.cookie = "ponyFilters="+document.documentElement.style.cssText+"; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/";	
	}
