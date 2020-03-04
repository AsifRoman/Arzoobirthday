/* Idea by @Ishola Obafemi */

// made with neo-ion.js 
// a simple js library by Animion

// neo-ion/math.js
var M = {
  floRand: function(x) {
    return Math.floor(Math.random() * x);
  },
  ceiRand: function(x) {
    return Math.ceil(Math.random() * x);
  },
  rand: function(x) {
    return (Math.random() * x);
  }
}
// neo-ion/selector_event.js
function $(elev, func) {
  w = window;
  if (elev == 'click') return w.onclick = func;
  else if (elev == 'load') return w.onload = func;
  else return document.querySelector(elev);
}
// eof neo-ion.js

i = 0;
W = window.innerWidth;
H = window.innerHeight;

function drawOrb() {
  n1 = M.ceiRand(H);
  n2 = M.ceiRand((W-20));
  R = M.ceiRand(255);
  G = M.ceiRand(255);
  B = M.ceiRand(255);
  
  if (i == (W/20)) clearInterval(time);
  else i+=1;
  
  tag = document.createElement('div');
  tagId = tag.setAttribute('id', 'love'+i);
  document.body.appendChild(tag);
  
  web_circ = '@-webkit-keyframes fall'+i+' {\
    0% {top: 0; left: '+n2+'px}\
    100% {top: '+H+'px; left: '+n2+'px}\
  }';
  moz_circ = '@-moz-keyframes fall'+i+' {\
    0% {top: 0; left: '+n2+'px}\
    100% {top: '+H+'px; left: '+n2+'px}\
  }';
  def_circ = '@keyframes fall'+i+' {\
    0% {top: 0; left: '+n2+'px}\
    100% {top: '+H+'px; left: '+n2+'px}\
  }';
  
  loveA = '#love'+i+' {\
    width: 10;\
    height: 30;\
    background: transparent;\
    position: fixed;\
    top: 10;\
    left: '+n2+'px;\
    -webkit-animation: fall'+i+' 6s linear infinite;\
    -moz-animation: fall'+i+' 6s linear infinite;\
    animation: fall'+i+' 6s linear infinite;\
  }';
  loveB = '#love'+i+':before, #love'+i+':after {\
    content: "";\
    width: 10px;\
    height: 18px;\
    background: rgb('+R+','+G+','+B+');\
    position: absolute;\
    top: 10;\
    border-radius: 50px 50px 0 0;\
  }';
  loveB1 = '#love'+i+':before {\
    left: -3px;\
    -webkit-transform: rotate(-45deg);\
  }';
  loveB2 = '#love'+i+':after {\
    left: 3px;\
    -webkit-transform: rotate(45deg);\
  }';
  
  css = document.createElement('style');
  css.innerHTML += web_circ + moz_circ + def_circ;
  css.innerHTML += loveA + loveB + loveB1 + loveB2;
  document.head.appendChild(css);
  
  $('html, body').style.background = 'url("http://image.kocholo.ir/reza/05_New/10_05/SweetCouples11.jpg") no-repeat 90% 50%';
  $('html, body').style.backgroundSize = 'cover';
  $('html, body').style.margin = 0;
  $('html, body').style.padding = 0;
  $('html, body').style.overflow = 'hidden';
}

//$('click', drawOrb);

time = setInterval(drawOrb, 500);