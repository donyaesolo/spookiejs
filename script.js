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
function spookieModeActivate () {
  var background = document.getElementById('spook')
  var n = 0
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
  }, 1000)
}

function play2 () {
  document.getElementById('play2').play()
}
function play1 () {
  document.getElementById('play1').play()
}
// These W3Schools links show efficient ways of completing some of the challenges!
// https://www.w3schools.com/jsref/prop_style_height.asp
// https://www.w3schools.com/jsref/prop_html_innerhtml.asp
// https://www.w3schools.com/js/tryit.asp?filename=tryjs_visibility
