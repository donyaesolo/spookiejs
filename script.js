// JavaScript is capitalized using "camel case": https://en.wikipedia.org/wiki/Camel_case
// Check out the power of the classList property: https://www.w3schools.com/jsref/prop_element_classlist.asp

// "elem" is an abbreviation for "the element that was clicked in the HTML"
// Here is where we DEFINE the function
function makeOpaque (elem) {
  elem.classList.add('opaque')
}

function turnOrange (elem) {
  elem.classList.remove('green')
  elem.classList.add('orange')
}

function toggleOpaque (elem) {
  elem.classList.toggle('opaque')
}
function disappear (elem) {
  elem.style.display = 'none'
}
function turnGreen (elem) {
  elem.classList.remove('red')
  elem.classList.add('green')
}
function bigBoyTime (elem) {
  elem.style.height = '100%'
}

function lightsOut (elem) {
  document.body.style.backgroundColor = 'black'
}
function showTime (elem) {
  document.getElementById('magic').innerHTML = 'Abracadabra I appeared!'
}
function boo (elem) {
  document.getElementById('restrict').style.display = 'block'
  document.getElementById('spookie').style.display = 'block'
  document.getElementById('spookie').innerHTML = 'Spookie Mode'
  document.getElementById('spookie').addEventListener('click', spookieModeActivate)
}
var skelie = new Boolean (false)
var n
function spookieModeActivate () {
	document.getElementById('title').innerHTML = 'Spookie Mode'
  var background = document.getElementById('spook')
  n = 0
  play1()
  document.getElementById('normal').style.display = 'none'
  document.getElementById('spook').style.display = 'flex'
  background.style.backgroundImage = 'url(images/s.jpg)'

  setInterval(function () {
    if (n === 0) {
      background.style.backgroundImage = 'url(images/p.png)'
      n = 1
    } else if (n === 1) {
      document.getElementById('spook').style.backgroundImage = 'url(images/o.jpg)'
      n = 2
    } else if (n === 2) {
      document.getElementById('spook').style.backgroundImage = 'url(images/oa.jpg)'
      n = 3
    } else if (n === 3) {
      document.getElementById('spook').style.backgroundImage = 'url(images/k.jpg)'
      n = 4
    } else if (n === 4) {
      document.getElementById('spook').style.backgroundImage = 'url(images/y.png)'
      n = 5
    } else if (n === 5) {
      document.getElementById('spook').style.backgroundImage = 'url(images/s.jpg)'
      n = 0
    }
  }, 769.23)
}

function play2 () {
  reset()
  var background = document.getElementById('spook')
  n = 6
  document.getElementById('play2').play()
  document.getElementById('play2').onplaying = function () {
    document.getElementById('pic1').src = 'images/skelie.gif'
    document.getElementById('pic2').src = 'images/skelie.gif'
    background.style.backgroundImage = 'url(images/sS.jpg)'
    setInterval(function () {
      if (n === 6) {
        background.style.backgroundImage = 'url(images/kK.jpg)'
        n = 7
      } else if (n === 7) {
        document.getElementById('spook').style.backgroundImage = 'url(images/E.jpg)'
        n = 8
      } else if (n === 8) {
        document.getElementById('spook').style.backgroundImage = 'url(images/l.jpg)'
        n = 9
      } else if (n === 9) {
        document.getElementById('spook').style.backgroundImage = 'url(images/i.gif)'
        n = 10
      } else if (n === 10) {
        document.getElementById('spook').style.backgroundImage = 'url(images/eE.jpg)'
        n = 11
      } else if (n === 11) {
        document.getElementById('spook').style.backgroundImage = 'url(images/sS.jpg)'
        n = 6
      }
    }, 521.74)
  }
}
function play1 () {
  reset()
  var background = document.getElementById('spook')
  document.getElementById('play1').play()
  background.style.backgroundImage = 'url(images/s.jpg)'
  document.getElementById('play1').onplaying = function () {
    document.getElementById('pic1').src = 'images/cutie.gif'
    document.getElementById('pic2').src = 'images/cutie.gif'
    setInterval(function () {
      if (n === 0) {
        background.style.backgroundImage = 'url(images/p.png)'
        n = 1
      } else if (n === 1) {
        document.getElementById('spook').style.backgroundImage = 'url(images/o.jpg)'
        n = 2
      } else if (n === 2) {
        document.getElementById('spook').style.backgroundImage = 'url(images/oa.jpg)'
        n = 3
      } else if (n === 3) {
        document.getElementById('spook').style.backgroundImage = 'url(images/k.jpg)'
        n = 4
      } else if (n === 4) {
        document.getElementById('spook').style.backgroundImage = 'url(images/y.png)'
        n = 5
      } else if (n === 5) {
        document.getElementById('spook').style.backgroundImage = 'url(images/s.jpg)'
        n = 0
      }
    }, 769.23)
  }
}

function reset () {
  if (skelie === true) {
    clearInterval()
    n = 6
  } else {
    clearInterval()
    n = 0
  }
}
// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
