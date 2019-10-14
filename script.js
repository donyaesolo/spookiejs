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
  document.body.style.cursor = 'url(images/cursor.cur)'
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
  document.getElementById('spookie').innerHTML = 'Click for Spookie Mode'
  document.getElementById('soft').innerHTML = 'Click for Soft Boi Mode'
  document.getElementById('spookie').addEventListener('click', spookieModeActivate)
  document.getElementById('soft').addEventListener('click', softBoiModeActivate)
}

var skelie
var n
var background

function spookieModeActivate () {
  document.getElementById('title').innerHTML = 'Spookie Mode'
  n = 0
  play1()
  document.getElementById('normal').style.display = 'none'
  document.getElementById('spook').style.display = 'flex'
  document.getElementById('spook').style.backgroundImage = 'url(images/s.jpg)'

  setInterval(function () {
    if (n === 0) {
      document.getElementById('spook').style.backgroundImage = 'url(images/p.png)'
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
  }, 1000)
}

function play2 () {
  skelie = 0
  reset()

  n = 6
  document.getElementById('banner').style.fontFamily = 'spooky2'
  document.getElementById('play2').play()
  document.getElementById('play2').onplaying = function () {
		document.getElementById('spook').style.cursor = 'url(images/cursor.cur), auto'
    document.getElementById('pic1').src = 'images/skelie.gif'
    document.getElementById('pic2').src = 'images/skelie.gif'
    document.getElementById('spook').style.backgroundImage = 'url(images/sS.jpg)'
    background = setInterval(function () {
      if (n === 6) {
        document.getElementById('spook').style.backgroundImage = 'url(images/kK.jpg)'
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
    }, 1000)
  }
}
function play1 () {
  skelie = 1
  reset()
  document.getElementById('banner').style.fontFamily = 'spooky'
  document.getElementById('play1').play()
  document.getElementById('spook').style.backgroundImage = 'url(images/s.jpg)'
  document.getElementById('play1').onplaying = function () {
    document.getElementById('pic1').src = 'images/cutie.gif'
    document.getElementById('pic2').src = 'images/cutie.gif'
    background = setInterval(function () {
      if (n === 0) {
        document.getElementById('spook').style.backgroundImage = 'url(images/p.png)'
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
    }, 1000)
  }
}
function softBoiModeActivate () {
  var intViewportWidth = window.innerWidth
  var intViewportHeight = window.innerHeight
  skelie = 2
  reset()
  n = 12
  document.getElementById('title').innerHTML = 'Soft Boi Mode'
  document.getElementById('spook').style.cursor = 'url(images/normal.cur), auto'
  document.getElementById('banner').style.borderRadius = '0px'
  document.getElementById('bar-text').style.fontFamily = 'soft'
  document.getElementById('bar-text').style.fontSize = '50px'
  document.getElementById('bar-text').style.color = '#F2C438'
  document.getElementById('normal').style.display = 'none'
  document.getElementById('spook').style.display = 'flex'
  document.getElementById('bar-text').innerHTML = 'Soft Boi Activated'
  document.getElementById('spook').style.backgroundSize = '50% 100%'
  document.getElementById('spook').style.backgroundRepeat = 'no-repeat'
  document.getElementById('spook').style.backgroundPosition = 'center'
  document.getElementById('spook').style.backgroundImage = 'url(images/sSs.jpg)'
  document.getElementById('spook').style.backgroundColor = '#F2D3D0'
  document.getElementById('pic1').src = 'images/soft1.jpg'
  document.getElementById('pic2').src = 'images/soft2.jpg'
  if (intViewportWidth <= 414) {
    document.getElementById('spook').style.backgroundSize = 'cover'
    document.getElementById('banner').style.borderRadius = '20px'
  }
  if (intViewportHeight <= 896) {
    document.getElementById('bar-text').style.fontSize = '30px'
  }
  document.getElementById('play3').play()
  background = setInterval(function () {
    if (n === 12) {
      document.getElementById('spook').style.backgroundImage = 'url(images/sSs.jpg)'
      n = 13
    } else if (n === 13) {
      document.getElementById('spook').style.backgroundImage = 'url(images/oO.jpg)'
      n = 14
    } else if (n === 14) {
      document.getElementById('spook').style.backgroundImage = 'url(images/f.jpg)'
      n = 15
    } else if (n === 15) {
      document.getElementById('spook').style.backgroundImage = 'url(images/t.jpg)'
      n = 16
    } else if (n === 16) {
      document.getElementById('spook').style.backgroundImage = 'url(images/b.jpg)'
      n = 17
    } else if (n === 17) {
      document.getElementById('spook').style.backgroundImage = 'url(images/oOo.jpg)'
      n = 18
    } else if (n === 18) {
      document.getElementById('spook').style.backgroundImage = 'url(images/iI.png)'
      n = 12
    }
  }, 1000)
}
function play3 () {
   document.getElementById('play3').play()
}
function play4 () {
   document.getElementById('play4').play()
}
function play5 () {
   document.getElementById('play5').play()
}
function reset () {
  if (skelie === 0) {
    clearInterval(background)
    n = 6
  } else if (skelie === 1) {
    clearInterval(background)
    n = 0
  } else if (skelie === 2) {
    clearInterval(background)
    n = 12
  }
}
