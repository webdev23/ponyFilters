"use strict";
/*
 pwnyFilters.js | Dynamic css filters | v1.9
 https://github.com/webdev23/ponyFilters
 Nico KraZhtest | ponyhacks.com | May 2018
 ZTF licence
*/

// Bar html in a var
var hdump = ""
hdump += '<big><bold>\
  <div class="fix"></div>\
  <div id="pwnyCtrl" class="barDrop" draggable="true" ondrag="pwnyMove()">\
  <form style="display:inline">\
  <div class="fix"></div>\
  <div class="rotatA">\
  <a href="https://github.com/webdev23/ponyFilters/"\
    title="Check the pwnyBar sources!">⛄ </a></div>\
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
  <form style="display:inline;border:0;vertical-align:middle" oninput="pwnyFilters()">\
  <input type="range" style="display:inline;border:0;outline:0;margin:0 5px 0 5px" \
    min="0" max="100" step="1" value="00" id="inVal" data-current="00"\
    oninput="if(this.value < 100){this.stepUp()};if(this.value >= 100){this.value=0}\
    " /></input></form>\
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
  <span id="lock" onclick=\"writeStorage();\
    this.innerHTML=\'&#x2713;\'" title="Save settings in a cookie">&nbsp;&#x1F512;</span>\
  </bold></big>\
  </form>\
  <form oninput="pwnColor_a(this.children[0].value)">\
  <input value="#DEDEDE" type="color" id="pwnClrA" />\
  </form>\
  <form oninput="pwnColor_b()">\
  <input value="#FAFAFA" type="color" id="pwnClrB" />\
  </form>\
  <form oninput="pwnColor_c()">\
  <input value="#0AFFAF" type="color" id="pwnClrC" />\
  </form>\
  </div>';

// Inject
var pwnyBar = document.createElement("div")
pwnyBar.id = "pwny"
pwnyBar.innerHTML = hdump

// Create pwny bar
pwnyBar.style = "position:fixed;display:inline;width:100%;height:32px;font-size:10px;\
z-index:999;";
var position = ["left:-47.70%;top:400px:transform: rotate(-180deg)",
  "left:0%;top:0px","left:49.12%;top:400px;transform: rotate(180deg)",
  "left:0;bottom:-400;transform: rotate(90deg)"]
  
// Position on screen: right
pwnyBar.style.cssText += "left:49.12%;top:400px;transform: rotate(180deg)"

// Bar css
var pwnyStyle = document.createElement("style")
pwnyStyle.innerHTML = "\
  #pwny{outline:0;vertical-align:top;margin:-5px;padding:0;line-height: 1.5;font-size: 15px;\
    font-weight: 400;display:inline !important}\
  body{overflow-X:hidden}\
  #pwny input[type='range']{cursor:pointer;width:70px;height:12px;vertical-align: middle;}\
  #pwny input[type='checkbox']{padding:0;margin:0 2px 0 3px;vertical-align:middle;min-height:8px;min-width:8px}\
  #pwny input[type=checkbox]:checked {background: #BADA55}\
  #pwny input[type=range]::-moz-focus-outer{border:0}\
  #pwny input[type=range]::-moz-range-thumb {background-color:#9EB95D;width:6px;height:19px;\
    border:3px solid red;border-radius:1}\
  #pwny input[type=range]::-moz-focus-inner{border: 0;background-color:#9EB95D}\
  #pwny input[type=color]{border-color: #ff0000;width:20px;height:20px;padding:5px}\
  #pwny a{text-decoration:none;color:#111111}\
  #pwny input{vertical-align:middle}\
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
document.getElementsByTagName("body")[0].appendChild(pwnyBar)
document.getElementsByTagName("body")[0].appendChild(pwnyStyle)

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
        var r = document.getElementById("radHR").dataset.current
        var d = document.getElementById("radSaturate").dataset.current + "%";
        pwn.style.cssText += "filter:brightness(" + t + ")\
      sepia(" + n + ")invert(" + e + ")saturate(" + d + ")grayscale(" + a + ")\
      hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + n + ")\
      invert(" + e + ")saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")\
      hue-rotate(" + r + ")contrast(" + k + ")"
      document.getElementById("radContrast").dataset.current = document.getElementById("inVal").value
    }
    // Inversion
    if (document.getElementById("radInvert").checked >= 1) {
        document.getElementById("valBox").innerHTML =
      document.getElementById("inVal").value + "%";
        var e = document.getElementById("valBox").innerHTML;
        var t = document.getElementById("radBright").dataset.current;
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current
        var d = document.getElementById("radSaturate").dataset.current + "%";
        var k = document.getElementById("radContrast").dataset.current;
        pwn.style.cssText += "filter:brightness(" + t + ")\
      sepia(" + n + ")invert(" + e + ")saturate(" + d + ")grayscale(" + a + ")\
      hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + n + ")\
      invert(" + e + ")saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")\
      hue-rotate(" + r + ")contrast(" + k + ")"
      document.getElementById("radInvert").dataset.current = document.getElementById("inVal").value
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
      document.getElementById("radSepia").dataset.current = document.getElementById("inVal").value
    }
    // Saturation
    if (document.getElementById("radSaturate").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
      document.getElementById("inVal").value * 4 + 100 + "%"; // <^_^>
        var e = document.getElementById("valBox").innerHTML;
        var t = document.getElementById("radBright").dataset.current;
        var l = document.getElementById("radInvert").dataset.current + "%";
        var n = document.getElementById("radSepia").dataset.current + "%";
        var a = document.getElementById("radGray").dataset.current + "%";
        var r = document.getElementById("radHR").dataset.current
        var k = document.getElementById("radContrast").dataset.current;
        pwn.style.cssText += "filter:brightness(" + t + ")\
      sepia(" + n + ")invert(" + l + ")saturate(" + e + ")grayscale(" + a + ")\
      hue-rotate(" + r + ")contrast(" + k + ");-webkit-filter:sepia(" + n + ")\
      invert(" + l + ")saturate(" + e + ")brightness(" + t + ")grayscale(" + a + ")\
      hue-rotate(" + r + ")contrast(" + k + ")"
      document.getElementById("radSaturate").dataset.current = document.getElementById("inVal").value
    }
    // brightness
    if (document.getElementById("radBright").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
      document.getElementById("inVal").value * 4 + 20
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
      hue-rotate(" + r + ")contrast(" + k + ")"
        document.getElementById("radBright").dataset.current =
      document.getElementById("inVal").value
    }
    // Grayscale
    if (document.getElementById("radGray").checked >= 1) {
        document.getElementById("valBox").innerHTML = 
      document.getElementById("inVal").value
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
      hue-rotate(" + r + ")contrast(" + k + ")"
      document.getElementById("radGray").dataset.current = document.getElementById("inVal").value
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
      k = document.getElementById("radContrast").dataset.current
    pwn.style.cssText += "filter:brightness(" + t + ")sepia(" + n + ")\
      invert(" + l + ")saturate(" + d + ")grayscale(" + a + ")hue-rotate(" + e + ")\
      contrast(" + k + ");-webkit-filter:sepia(" + n + ")invert(" + l + ")\
      saturate(" + d + ")brightness(" + t + ")grayscale(" + a + ")\
      hue-rotate(" + e + ")contrast(" + k + ")"
    document.getElementById("radHR").dataset.current = document.getElementById("inVal").value
    }
}

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
  document.querySelectorAll("p, span, h1, h2, h3").forEach(function(e){  
    e.style.color = localStorage.getItem('pwnClrC')
  })
}

// Fix for firefox position:fixed bug when using css transformation
if (!window.webkitURL){
  document.body.setAttribute("onscroll","pwnyScroll()")
  document.body.setAttribute("onresize","pwnyScroll()")
}
console.log(pwnyBar);

onload = (() => {
  // Open media unfiltered
  document.querySelectorAll("img").forEach(function(e){
    e.setAttribute("onmouseup",
      "window.open(this.src,'this.src','width="+e.width+",height="+e.height+",resizable=1')")
  })
  inVal.value = 5
})

// keyboard events
document.addEventListener('keydown', (event) => {
  const keyName = event.key;
  if (keyName === 'Control') {return}
  if (event.ctrlKey) { var yop =  event.key;console.log(yop)
    if (yop ==","){
      document.documentElement.style.cssText = 'filter:none;-webkit-filter:none'
      writeStorage();
      window.location.reload(true)
      }
    if (yop =="ArrowRight"){
      pwnyBar.style.cssText += position[Math.round((Math.random() * 4))];
    }
    if (yop =="!"){
      writeStorage()}
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
 }, false)
 
// Save in local storage
function writeStorage() {
  localStorage.setItem('ponykits',document.documentElement.style.cssText)
  localStorage.setItem('pwnClrA',document.getElementById('pwnClrA').value)
  localStorage.setItem('pwnClrB',document.getElementById('pwnClrB').value)
  localStorage.setItem('pwnClrC',document.getElementById('pwnClrC').value)
}

// Nico KraZhtest @2018
