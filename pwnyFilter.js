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
	document.documentElement.style.cssText += "gtCk('ponyWebkits')"
	document.documentElement.style.cssText += "gtCk('ponyFilters')"
});

// Set filters by cookie done --- - -- - - - -  - - -- - -  - - -

// Bar html controls
var hdump = "";
hdump += '<meta charset="UTF8"></meta><big><bold>\
<div id="pwnyCtrl"><form style="display:inline">\
<span style="font-size:19px;color:#010101;transform: rotate(-90deg)">🐴 </span>\
<label>Brightness</label>\
<input type="checkbox" id="radBright" title="Brightness"\
data-current="1" style="cursor:pointer"></input>\
<label> Gray</label>\
<input type="checkbox" id="radGray" title="Grayscale"\
data-current="0" style="cursor:pointer"></input>\
<label> Hue</label>\
<input type="checkbox" id="radHR" title="Hue Rotate"\
data-current="0deg" style="cursor:pointer"></input></form><strong>\
<a onclick="document.documentElement.style=\'filter:none;-webkit-filter:none\'"\
href="javascript:void(0);" style="font-size:22px;\
text-decoration:none;vertical-align:top;color:#111111;outline:0">&#9728; </a></strong>\
<span id="valBox"></span> \
<form style="display:inline;border:0;vertical-align:middle" onchange="pwnyFilters()">\
<input style="display:inline;border:0;outline:0" type="range"\
min="0" max="100" step="1" id="inVal" data-current="00" ></input></form>\
<strong>\
<a onclick="document.documentElement.style=\'filter:sepia(0%)invert(0%)saturate(0%)\
brightness(100%)grayscale(0%)hue-rotate(0deg);-webkit-filter:sepia(0%)invert(0%)saturate(0%)\
brightness(100%)grayscale(0%)hue-rotate(0deg)\'"\
href="javascript:void(0);"\
style="font-size:13px;text-decoration:none;color:#111111;vertical-align:middle;outline:0">\
&#127762;</a></strong><form style="display:inline;font-size:13px;margin:0;filter: none;-webkit-filter: none;">\
<input type="checkbox" id="radInvert" checked title="Invert"\
data-current="0" style="cursor:pointer"></input><label>Invert </label>\
<input type="checkbox" id="radSepia" checked title="Sepia" data-current="0"\
style="cursor:pointer"></input><label>Sepia </label> \
<input type="checkbox" id="radSaturate" checked title="Saturate"\
data-current="0" style="cursor:pointer"></input><label>Saturation </label>\
<span id="lock" onclick=\"writeCookie();this.style.color=\'yellowgreen\';this.innerHTML=\'✓\'"\
title="Save settings in a cookie">&nbsp;&#x1F512;</span></bold></big></form></div>';

// Inject
var pwnyBar = document.createElement("div");

pwnyBar.id = "pwny";

pwnyBar.innerHTML = hdump;

pwnyBar.style = "position:fixed;display:inline;left:49.12%;top:400px;width:100%;height:32px;font-size:13px;\
z-index:999;";

console.log(pwnyBar);

var pwnyStyle = document.createElement("style");

pwnyStyle.innerHTML = "#pwny{outline:0;vertical-align:top;margin:0;display:inline;padding:0;}\
#pwny input[type='range']{cursor:pointer;width:110px;height:12px;vertical-align: middle;}\
#pwny input[type='checkbox']{padding:0;margin:0 2px 0 3px;vertical-align:middle}\
#pwny input[type=checkbox]:checked {background: #BADA55}\
#pwny input[type=range]::-moz-focus-outer{border:0}\
#pwny input[type=range]::-moz-range-thumb {background-color:#9EB95D}\
#pwny input[type=range]::-moz-focus-inner{border: 0;background-color:#9EB95D}\
#pwny input{vertical-align:middle}\
#pwnyCtrl{text-align:center;background-color:#DEDEDE;color:#111111;outline:0;transform: rotate(90deg);-moz-user-select: none;}\
#valBox{color:grey;font-size:0.8em}#lock{cursor:pointer;font-size:1.13em}\
#pwnyCtrl form{outline:0;border:0}\
body{overflow-X:hidden}\
img:empty, video:empty{ filter: none;-webkit-filter: none;\
filter: filter: sepia(0%) invert(100%) saturate(0%) brightness(1) grayscale(0%) hue-rotate(0deg);\
-webkit-filter: sepia(0%) invert(100%) saturate(0%) brightness(1) grayscale(0%) hue-rotate(0deg)}\
img:empty:hover, video:empty:hover{ filter: none;-webkit-filter: none;\
filter: filter: sepia(0%) invert(0%) saturate(120%) brightness(50%) grayscale(100%) hue-rotate(500deg);\
-webkit-filter: sepia(0%) invert(100%) saturate(0%) brightness(50%) grayscale(100%) hue-rotate(0deg);\
color: black;z-index:99;transition:filter 2s linear }";

document.getElementsByTagName("body")[0].appendChild(pwnyBar);

document.getElementsByTagName("body")[0].appendChild(pwnyStyle);


// Random value on start
function rdm(){
	return [0,0,0,94,2,1,99,100,8,0,200,200,13,188,177,0,3,6,166][Math.floor(Math.random()*10)];
};
let random = rdm();
document.documentElement.style='filter:sepia(('+random+'%))invert(('+random+'%))saturate(('+random+'%))brightness(('+random+'%))grayscale(('+random+'%))hue-rotate(0deg);-webkit-filter:sepia(('+random+'%))invert(('+random+'%))saturate(('+random+'%))brightness(('+random+'%))grayscale(('+random+'%))hue-rotate(0deg)'; 
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
	document.cookie = "ponyFilters="+"-webkit-"+document.documentElement.style.cssText + "; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"
	document.cookie = "ponyWebkits=" + document.documentElement.style.cssText + "; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"

	}


if (document.getElementById('main')){
	document.getElementById('main').style.backgroundColor="white"
	}
if (document.getElementById('page')){
	document.getElementById('page').style.backgroundColor="white"
	}
if (document.getElementById('container')){
	document.getElementById('container').style.backgroundColor="white"
	}
	//~ document.documentElement.style.cssText.style.backgroundColor="white"
		//~ document.body.style.backgroundColor="white"

var bzs = document.body.getElementsByTagName("img");
for (var i = 0; i < bzs.length;) {
	var wi = bzs[i].width; var he = bzs[i].height;
	bzs[i].setAttribute("onmousedown", "window.open(this.src,'this.src','width="+wi+",height="+he+",resizable=1')"), i++;}
