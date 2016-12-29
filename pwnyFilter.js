"use strict";

//~ pwnyFilters.js | Dynamic css filters
//~ Nico KraZhtest | ponyhacks.com | december 2016
//~ Enjoy the zonderful ZTF licence

//~ Set filters by cookie:
//~ You can call only this code to set the filters
//~ on any page of the domain --- - ---
function gtCk(name){
	var re = new RegExp(name + "=([^;]+)");
	var value = re.exec(document.cookie);
return (value != null) ? unescape(value[1]) : null;
}
document.addEventListener("DOMContentLoaded", function(event) {
	console.log("ponyFilters loaded!\n");
	document.documentElement.style.cssText += "gtCk('ponykits')"
	document.documentElement.style.cssText += "gtCk('ponyFilters')"
	document.body.style.cssText +=  "color:"+"gtCk('color_A')"
	document.body.style.cssText +=  "background-color:"+"gtCk('color_B')"
})
//  --- - ---

// Bar html in a var
var hdump = "";
hdump += '<big><bold>\
	<div class="fix"></div>\
	<div id="pwnyCtrl" class="barDrop" draggable="true" ondrag="pwnyMove()">\
	<form style="display:inline">\
	<div class="fix"></div>\
	<div class="rotatA">\
	<a href="https://github.com/webdev23/ponyFilters/"\
		title="Check the pwnyBar sources!">&#x1F434; </a></div>\
	<label>Bright</label>\
	<input type="checkbox" id="radBright" title="Brightness"\
		data-current="1" style="cursor:pointer"></input>\
	<label> Gray</label>\
	<input type="checkbox" id="radGray" title="Grayscale"\
		data-current="0" style="cursor:pointer"></input>\
	<label> Hue</label>\
	<input type="checkbox" id="radHR" title="Hue Rotate"\
		data-current="0deg" style="cursor:pointer"></input>\
	<label> Contrast</label>\
	<input type="checkbox" id="radContrast" title="Contrast"\
		data-current="100%" style="cursor:pointer"></input>\
	</form>\
	<a onclick="document.body.style.cssText =\'filter:none;-webkit-filter:none\'"\
		href="javascript:void(0);" style="font-size:29px;\
		text-decoration:none;color:#111111;;vertical-align:middle;outline:0">&#9728;</a>\
	<span id="valBox">000%</span> \
	<form style="display:inline;border:0;vertical-align:middle" onchange="pwnyFilters()">\
	<input type="range" style="display:inline;border:0;outline:0;margin:0 5px 0 5px" \
		min="0" max="100" step="1" value="00" id="inVal" data-current="00"\
		onwheel="if(this.value < 100){this.stepUp()};if(this.value >= 100){this.value=0}\
		;pwnyFilters()" /></input></form>\
	<a onclick="document.body.style.cssText =\'filter:sepia(0%)invert(0%)saturate(0%)\
		brightness(100%)grayscale(0%)hue-rotate(0deg);\
		-webkit-filter:sepia(0%)invert(0%)saturate(0%)\
		brightness(100%)grayscale(0%)hue-rotate(0deg)\'"\
		href="javascript:void(0);"\
		style="font-size:19px;text-decoration:none;color:#111111;\
		vertical-align:middle;outline:0">&#127762;</a>\
	<form style="vertical-align:middle;display:inline;margin:0;\
		filter: none;-webkit-filter: none;">\
	<input type="checkbox" id="radInvert" checked title="Invert"\
		data-current="0" style="cursor:pointer"></input><label>Invert </label>\
	<input type="checkbox" id="radSepia" checked title="Sepia" data-current="100"\
		style="cursor:pointer"></input><label>Sepia </label> \
	<input type="checkbox" checked id="radSaturate" title="Saturate"\
		data-current="0" style="cursor:pointer"></input><label>Saturate </label>\
	<span id="lock" onclick=\"writeCookie();\
		this.innerHTML=\'&#x2713;\'" title="Save settings in a cookie">&nbsp;&#x1F512;</span>\
	</bold></big></form>\
	<form oninput="pwnColor_a(this.children[0].value)"><input value="#ff0000"\
		type="color" id="pwnClrA" /></form>\
	</form>\
	<form oninput="pwnColor_b()"><input value="#0fff00" type="color" id="pwnClrB" />\
	</form>\
	<form oninput="pwnColor_c()"><input value="#0affaf" type="color" id="pwnClrC" />\
	</div>';

// Inject
var pwnyBar = document.createElement("div");
pwnyBar.id = "pwny";
pwnyBar.innerHTML = hdump;

// Create pwny bar
pwnyBar.style = "position:fixed;display:inline;width:100%;height:32px;font-size:10px;\
z-index:999;";
var position = ["left:-47.70%;top:400px:transform: rotate(-180deg)",
	"left:0%;top:0px","left:49.12%;top:400px;transform: rotate(180deg)",
	"left:0;bottom:-400;transform: rotate(90deg)"]
	
// Position on screen: right
pwnyBar.style.cssText += "left:49.12%;top:400px;transform: rotate(180deg)"

// Bar css
var pwnyStyle = document.createElement("style");
pwnyStyle.innerHTML = "\
	#pwny{outline:0;vertical-align:top;margin:-5px;padding:0;line-height: 1.5;font-size: 15px;\
		font-weight: 400;display:inline !important}\
	body{overflow-X:hidden}\
	#pwny input[type='range']{cursor:pointer;width:70px;height:12px;vertical-align: middle;}\
	#pwny input[type='checkbox']{padding:0;margin:0 2px 0 3px;vertical-align:middle}\
	#pwny input[type=checkbox]:checked {background: #BADA55}\
	#pwny input[type=range]::-moz-focus-outer{border:0}\
	#pwny input[type=range]::-moz-range-thumb {background-color:#9EB95D;width:6px;height:19px;\
		border:3px solid red;border-radius:1}\
	#pwny input[type=range]::-moz-focus-inner{border: 0;background-color:#9EB95D}\
	#pwny input[type=color]{border-color: #ff0000;width:20px;height:20px;padding:5px}\
	#pwny a{text-decoration:none;color:#111111}\
	#pwny input{all:unset;vertical-align:middle}\
	#pwnyCtrl{text-align:center;background-color:#DEDEDE;color:#111111;outline:0;\
		transform: rotate(270deg);-moz-user-select: none}\
	#valBox{color:grey;font-size:0.98em}\
	#lock{cursor:pointer;font-size:21px}\
	#pwnyCtrl form{outline:0;border:0;display:inline}\
		color: black;z-index:99;transition:filter 2s linear }\
	.pwnyCheck{content: '';background: #fff;border: 0px;\
		display: inline-block;vertical-align: middle;width: 28px;height: 28px;padding: 2px;\
		margin-right: 10px;text-align: center;}\
	.pwnyCheck:checked {transform: rotate(270deg)}\
	.pwnyCheck:focus{outline: 1px solid #ddd}\
	.rotate{animation: spin 4s infinite linear;display:inline}\
	.rotatA{animation: spinA .1s linear;display:inline;font-size:2em}\
	@keyframes spin {0% {transform: rotate(90deg);}\
		100% {transform: rotate(360deg);}}\
	@keyframes spinA {0% {transform: rotate(270deg);}\
		100% {transform: rotate(270deg);}}\
	.fix {all:unset;position:fixed;top:0;transform: translateZ(0);\
		-webkit-transform:translateZ(0);}\
	#barT{left:-49%;top:1em;text-align:center}\
	#barR{left:49.12%;top:400px;transform: rotate(180deg)}\
	#barB{left:0%;bottom:0}\
	#barL{left:-49%;top:400px;}\
	\
	";
// Inject on document
document.getElementsByTagName("body")[0].appendChild(pwnyBar);
document.getElementsByTagName("body")[0].appendChild(pwnyStyle);

// Filters functions
function pwnyFilters() {
	// 
	var pwn = document.documentElement;
	// Contrast
    if (document.getElementById("radContrast").checked >= 1) {
        document.getElementById("valBox").innerHTML =
			document.getElementById("inVal").value * 4 + 20; // <^_^>
		var k = document.getElementById("valBox").innerHTML
        var e = document.getElementById("radInvert").dataset.current + "%";
        var t = document.getElementById("radBright").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current;
        var d = document.getElementById("radSaturate").dataset.current + "%";
        pwn.style.cssText += "filter:brightness(" + t + ")\
			sepia(" + n + ")invert(" + e + ")saturate(" + d + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + n + ")\
			invert(" + e + ")saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ")";
        document.getElementById("radContrast").dataset.current = 
			document.getElementById("inVal").value;
    }
    // Inversion
    if (document.getElementById("radInvert").checked >= 1) {
        document.getElementById("valBox").innerHTML =
			document.getElementById("inVal").value + "%";
        var e = document.getElementById("valBox").innerHTML;
        var t = document.getElementById("radBright").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current;
        var d = document.getElementById("radSaturate").dataset.current + "%";
        var k = document.getElementById("radContrast").dataset.current;
        pwn.style.cssText += "filter:brightness(" + t + ")\
			sepia(" + n + ")invert(" + e + ")saturate(" + d + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + n + ")\
			invert(" + e + ")saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ")";
        document.getElementById("radInvert").dataset.current = 
			document.getElementById("inVal").value;
    }
    // Sepia
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
        var k = document.getElementById("radContrast").dataset.current;
        pwn.style.cssText += "filter:brightness(" + t + ")\
			sepia(" + e + ")invert(" + l + ")saturate(" + d + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + e + ")\
			invert(" + l + ")saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ")";
        document.getElementById("radSepia").dataset.current =
			document.getElementById("inVal").value;
    }
    // Saturation
    if (document.getElementById("radSaturate").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value * 4 + 20 + "%"; // <^_^>
        var e = document.getElementById("valBox").innerHTML;
        var t = document.getElementById("radBright").dataset.current;
        var l = document.getElementById("radInvert").dataset.current + "%";
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current;
        var k = document.getElementById("radContrast").dataset.current;
        pwn.style.cssText += "filter:brightness(" + t + ")\
			sepia(" + n + ")invert(" + l + ")saturate(" + e + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + n + ")\
			invert(" + l + ")saturate(" + e + ")brightness(" + t + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ")";
        document.getElementById("radSaturate").dataset.current = 
			document.getElementById("inVal").value;
    }
    // brightness
    if (document.getElementById("radBright").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value * 4 + 20 ;
        var e = document.getElementById("valBox").innerHTML + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var l = document.getElementById("radInvert").dataset.current + "%";
        var d = document.getElementById("radSaturate").dataset.current + "%";
        var k = document.getElementById("radContrast").dataset.current;
        pwn.style.cssText += "filter:brightness(" + e + ")\
			sepia(" + n + ")invert(" + l + ")saturate(" + d + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + n + ")\
			invert(" + l + ")saturate(" + d + ")brightness(" + e + ")grayscale(" + a + ")\
			hue-rotate(" + r + ")contrast(" + k + ")";
        document.getElementById("radBright").dataset.current =
			document.getElementById("inVal").value;
    }
    // Grayscale
    if (document.getElementById("radGray").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value;
        var e = document.getElementById("inVal").value + "%";
        var t = document.getElementById("radBright").dataset.current;
        var r = document.getElementById("radHR").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var l = document.getElementById("radInvert").dataset.current + "%";
        var d = document.getElementById("radSaturate").dataset.current + "%";
        var k = document.getElementById("radContrast").dataset.current;
        pwn.style.cssText += "filter:brightness(" + t + ")\
			sepia(" + n + ")invert(" + l + ")saturate(" + d + ")grayscale(" + e + ")\
			hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + n + ")\
			invert(" + l + ")saturate(" + d + ")brightness(" + t + ")grayscale(" + e + ")\
			hue-rotate(" + r + ")contrast(" + k + ")";
        document.getElementById("radGray").dataset.current =
			document.getElementById("inVal").value;
    }
    // Hue rotate
    if (document.getElementById("radHR").checked >= 1) {
		document.getElementById("valBox").innerHTML = 
			document.getElementById("inVal").value;
		var e = document.getElementById("inVal").value * 3.6 + "deg",
			t = document.getElementById("radBright").dataset.current,
			n = document.getElementById("radSepia").dataset.current + "%",
			a = document.getElementById("radGray").dataset.current + "%",
			l = document.getElementById("radInvert").dataset.current + "%",
			d = document.getElementById("radSaturate").dataset.current + "%",
			k = document.getElementById("radContrast").dataset.current;
		pwn.style.cssText += "filter:brightness(" + t + ")sepia(" + n + ")\
			invert(" + l + ")saturate(" + d + ")grayscale(" + a + ")hue-rotate(" + e + ")\
			contrast(" + k + ");-webkit-filter:sepia(" + n + ")invert(" + l + ")\
			saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")\
			hue-rotate(" + e + ")contrast(" + k + ")";
        document.getElementById("radHR").dataset.current =
			document.getElementById("inVal").value;
    }
}

// Open media unfiltered
var bzs = document.body.getElementsByTagName("img");
for (var i = 0; i < bzs.length;) {
	var wi = bzs[i].width; var he = bzs[i].height;
	bzs[i].setAttribute("onmouseup",
		"window.open(this.src,'this.src','width="+wi+",height="+he+",resizable=1')"), i++;}

// Adjust bar centering on scroll
function pwnyScroll(){
	pwny.style.top= (window.innerHeight / 2.14) + window.scrollY+'px'
}

// Change page colors on demand
function pwnColor_a(){
	document.body.style.color = document.getElementById('pwnClrA').value
}
function pwnColor_b(){
	document.body.style.backgroundColor = document.getElementById('pwnClrB').value
}
function pwnColor_c(){
	var txt = document.getElementsByTagName("p");
	for (var k=0;k<txt.length;k++){
		if (txt.color != "") {
			txt[k].style.color = document.getElementById('pwnClrC').value
	}}
}

// Fix for firefox position:fixed bug when using css transformation
if (!window.webkitURL){
	document.body.setAttribute("onscroll","pwnyScroll()")
	document.body.setAttribute("onresize","pwnyScroll()")
}
console.log(pwnyBar);

// Random value on start
//~ function rdm(){
	//~ return [0,0,0,94,2,1,99,100,8,0,200,200,13,188,177,0,3,6,166][Math.floor(Math.random()*10)];
//~ }
//~ var random = rdm();
//~ document.body.style.filter = 'sepia(('+random+'%))invert(('+random+'%))saturate(('+random+'%))\
	//~ brightness(('+random+'%))grayscale(('+random+'%))hue-rotate(0deg);\
	//~ -webkit-filter:sepia(('+random+'%))invert(('+random+'%))saturate(('+random+'%))\
	//~ brightness(('+random+'%))grayscale(('+random+'%))hue-rotate(0deg)';
//~ document.getElementById("inVal").value = random;
// automation 
//~ var i = 0;
//~ var automation = setInterval(function(){
 //~ fadeIn();
//~ }, 1);
//~ function fadeIn(){
	//~ document.querySelector('input[type=range]').value = 76 + i++;
	 //~ pwnyFilters()
//~ }
//~ setTimeout(function(){
 //~ clearInterval(automation)
//~ }, 3000)

// Fixed bar
setTimeout(function(){
	pwnyScroll()
	pwnyFilters() 
	// pwnColors()
}, 300)

// keyboard events
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName === 'Control') {return}
  if (event.ctrlKey) { var yop =  event.key;console.log(yop)
		if (yop ==","){
			document.documentElement.style.cssText='filter:none;-webkit-filter:none';
			writeCookie();
			window.location.reload(true)
			}
		if (yop =="ArrowRight"){
			pwnyBar.style.cssText += position[Math.round((Math.random() * 4))];
		}
		if (yop =="!"){
			writeCookie()}
		if (yop =="1"){
			document.documentElement.style.cssText = 'filter:sepia(7%)invert(7%)saturate(7%)\
	brightness(1)grayscale(27%)hue-rotate(0deg);\
	-webkit-filter:sepia(7%)invert(7%)saturate(7%)\
	brightness(1)grayscale(27%)hue-rotate(0deg)'}
		if (yop =="2"){
			document.documentElement.style.cssText = 'filter:sepia(41%)invert(11%)saturate(17%)\
	brightness(1)grayscale(17%)hue-rotate(20deg);\
	-webkit-filter:sepia(41%)invert(11%)saturate(17%)\
	rightness(1) grayscale(17%) hue-rotate(20deg)'}
  }
 }, false);
 
// writeCookies
function writeCookie() {
	if (window.webkitURL){
	document.cookie = "ponyFilters=" + "" +
		"; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"		
	document.cookie = "ponyFilters="+"-webkit-"+document.documentElement.style.cssText +
		"; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"
	} else {
	document.cookie = "ponykits=" + "" +
		"; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"
	document.cookie = "ponykits=" + document.documentElement.style.cssText +
		"; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"
}	document.cookie = "color_A=" + document.getElementById('pwnClrA').value +
		"; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"
	document.cookie = "color_B=" + document.getElementById('pwnClrB').value +
		"; expires=Thu, 18 Dec 2017 12:00:00 UTC; path=/"
}

// Nico KraZhtest @2016
