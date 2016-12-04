"use strict";

//~ pwnyFilters.js | Dynamic css filters
//~ Nico KraZhtest | ponyhacks.com
//~ Enjoy the zonderful ZTF licence

//~ Set filters by cookie:
//~ You can call only this code to set the filters
//~ on any page of the domain - - - - - - - --- - - - - - - - -

function gtCk(name){
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
return (value != null) ? unescape(value[1]) : null;
}
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("ponyFilters loaded!\n");
	document.documentElement.style.cssText = gtCk('ponyFilters')
});

// Set filters by cookie done --- - -- - - - -  - - -- - -  - - -

// Bar html controls
var hdump = "";
hdump += '<meta charset="UTF8"><big><bold>\
<div id="pwnyCtrl"><form style="display:inline">\
<span style="font-size:19px;color:#010101;"><bold>🐴 </bold></span>\
<label>Brightness</label>\
<input type="checkbox" id="radBright" title="Brightness"\
data-current="1" style="cursor:pointer"></input>\
<label> Gray</label>\
<input type="checkbox" id="radGray" title="Grayscale"\
data-current="0" style="cursor:pointer"></input>\
<label> Hue</label>\
<input type="checkbox" id="radHR" title="Hue Rotate"\
data-current="0deg" style="cursor:pointer"></input></form><strong>\
<a onclick="document.documentElement.style=\'filter:invert(0%);-webkit-filter:invert(0%)\'"\
href="javascript:void(0);" style="font-size:22px;\
text-decoration:none;vertical-align:top;color:#111111;outline:0">&#9728; </a></strong>\
<span id="valBox"></span> \
<form style="display:inline;border:0;vertical-align:middle" onchange="pwnyFilters()">\
<input style="display:inline;border:0;outline:0" type="range"\
min="0" max="100" step="1" id="inVal" data-current="00" ></input></form>\
<strong>\
<a onclick="document.documentElement.style=\'filter:invert(100%);-webkit-filter:invert(100%)\'"\
href="javascript:void(0);"\
style="font-size:13px;text-decoration:none;color:#111111;vertical-align:middle;outline:0">\
&#127762;</a></strong><form style="display:inline;font-size:13px;margin:0">\
<input type="checkbox" id="radInvert" checked title="Invert"\
data-current="0" style="cursor:pointer"></input><label>Invert </label>\
<input type="checkbox" id="radSepia" checked title="Sepia" data-current="0"\
style="cursor:pointer"></input><label>Sepia </label> \
<input type="checkbox" id="radSaturate" checked title="Saturate"\
data-current="0" style="cursor:pointer"></input><label>Saturation </label>\
<span id="lock" onclick="writeCookie();this.style.color="yellowgreen";this.innerHTML="✓"\
title="Save settings in a cookie">&nbsp;&#x1F512;</span></bold></big></form></div>';

// Inject
var pwnyBar = document.createElement("div");

pwnyBar.id = "pwny";

pwnyBar.innerHTML = hdump;

pwnyBar.style = "position:relative;display:inline;width:100%;height:30px;font-size:13px;\
z-index:999";

console.log(pwnyBar);

var pwnyStyle = document.createElement("style");

pwnyStyle.innerHTML = "#pwny{outline:0;vertical-align:top;margin:0;display:inline;padding:0;}\
#pwny label{all:unset}\
#pwny input[type='range']{cursor:pointer;width:110px;height:12px;vertical-align: middle;}\
#pwny input[type='checkbox']{padding:0;margin:0 2px 0 3px;vertical-align:middle}\
#pwny input[type=checkbox]:checked {background: #BADA55}\
#pwny input[type=range]::-moz-focus-outer{border:0}\
#pwny input[type=range]::-moz-range-thumb {background-color:#9EB95D}\
#pwny input[type=range]::-moz-focus-inner{border: 0;background-color:#9EB95D}\
#pwny input{vertical-align:middle}\
#pwnyCtrl{text-align:center;background-color:#DEDEDE;color:#111111;outline:0;-moz-user-select: none;}\
#valBox{color:grey;font-size:0.8em}#lock{cursor:pointer;font-size:1.13em}\
#pwnyCtrl form{outline:0;border:0}";

document.getElementsByTagName("body")[0].appendChild(pwnyBar);

document.getElementsByTagName("body")[0].appendChild(pwnyStyle);


// Random value on start
function rdm(){
	return [0,0,0,94,2,1,99,100,8,0,200,200,13,188,177,0,3,6,166][Math.floor(Math.random()*10)];
};
let random = rdm();
document.documentElement.style='filter:invert('+random+'%);-webkit-filter:invert('+random+'%)'; 
document.getElementById("inVal").value = random;

// Filters functions
function pwnyFilters() {
    if (document.getElementById("radInvert").checked >= 1) {
        document.getElementById("valBox").innerHTML =
			document.getElementById("inVal").value + "%";
        var e = document.getElementById("valBox").innerHTML;
        var t = document.getElementById("radBright").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current;
        var d = document.getElementById("radSaturate").dataset.current + "%";
        document.documentElement.style.cssText += "filter:brightness(" + t + ")\
        sepia(" + n + ")invert(" + e + ")saturate(" + d + ")grayscale(" + a + ")\
        hue-rotate(" + r + ");-webkit-filter:sepia(" + n + ")invert(" + e + ")\
        saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")hue-rotate(" + r + ")";
        document.getElementById("radInvert").dataset.current = 
			document.getElementById("inVal").value;
    }
    if (document.getElementById("radSepia").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value + "%";
        var e = document.getElementById("valBox").innerHTML;
        var t = document.getElementById("radBright").dataset.current;
        var l = document.getElementById("radInvert").dataset.current + "%";
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        document.documentElement.style.cssText += "filter:brightness(" + t + ")\
        sepia(" + e + ")invert(" + l + ")saturate(" + d + ")grayscale(" + a + ")\
        hue-rotate(" + r + ");-webkit-filter:sepia(" + e + ")invert(" + l + ")\
        saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")hue-rotate(" + r + ")";
        document.getElementById("radSepia").dataset.current =
        document.getElementById("inVal").value;
    }
    if (document.getElementById("radSaturate").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value + "%";
        var e = document.getElementById("valBox").innerHTML;
        var t = document.getElementById("radBright").dataset.current;
        var l = document.getElementById("radInvert").dataset.current + "%";
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current;
        document.documentElement.style.cssText += "filter:brightness(" + t + ")\
        sepia(" + n + ")invert(" + l + ")saturate(" + e + ")grayscale(" + a + ")\
        hue-rotate(" + r + ");-webkit-filter:sepia(" + n + ")invert(" + l + ")\
        saturate(" + e + ")brightness(" + t + ")grayscale(" + a + ")hue-rotate(" + r + ")";
        document.getElementById("radSaturate").dataset.current = 
        document.getElementById("inVal").value;
    }
    if (document.getElementById("radBright").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value;
        var e = document.getElementById("valBox").innerHTML * 3.8 + 10 + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var l = document.getElementById("radInvert").dataset.current + "%";
        var d = document.getElementById("radSaturate").dataset.current + "%";
        document.documentElement.style.cssText += "filter:brightness(" + e + ")\
        sepia(" + n + ")invert(" + l + ")saturate(" + d + ")grayscale(" + a + ")\
        hue-rotate(" + r + ");-webkit-filter:sepia(" + n + ")invert(" + l + ")\
        saturate(" + d + ")brightness(" + e + ")grayscale(" + a + ")hue-rotate(" + r + ")";
        document.getElementById("radBright").dataset.current = e;
    }
    if (document.getElementById("radGray").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value;
        var e = document.getElementById("inVal").value + "%";
        var t = document.getElementById("radBright").dataset.current;
        var r = document.getElementById("radHR").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var l = document.getElementById("radInvert").dataset.current + "%";
        var d = document.getElementById("radSaturate").dataset.current + "%";
        document.documentElement.style.cssText += "filter:brightness(" + t + ")\
        sepia(" + n + ")invert(" + l + ")saturate(" + d + ")grayscale(" + e + ")\
        hue-rotate(" + r + ");-webkit-filter:sepia(" + n + ")invert(" + l + ")\
        saturate(" + d + ")brightness(" + t + ")grayscale(" + e + ")hue-rotate(" + r + ")";
        document.getElementById("radGray").dataset.current = e;
    }
    if (document.getElementById("radHR").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value;
        var e = document.getElementById("inVal").value * 1.8 + "deg";
        var t = document.getElementById("radBright").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var l = document.getElementById("radInvert").dataset.current + "%";
        var d = document.getElementById("radSaturate").dataset.current + "%";
        document.documentElement.style.cssText += 
        "filter:brightness(" + t + ")sepia(" + n + ")invert(" + l + ")saturate(" + d + ")\
        grayscale(" + a + ")hue-rotate(" + e + ");-webkit-filter:sepia(" + n + ")\
        invert(" + l + ")saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")\
        hue-rotate(" + e + ")";
        document.getElementById("radHR").dataset.current = e;
    }
}

// writeCookie
function writeCookie() {
	document.cookie = "ponyFilters="+document.documentElement.style.cssText +
		"; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"
	}
