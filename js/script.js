// Sticky menu
// When the user scrolls the page, execute myFunction
window.onscroll = function() {stickyEffect()};

// Get the navbar
var navbar = document.getElementById("menu");

// Get the offset position of the navbar
var sticky = navbar.offsetTop;

// Add the sticky class to the navbar when you reach its scroll position. Remove "sticky" when you leave the scroll position
function stickyEffect() {
  if (window.pageYOffset >= sticky) {
    navbar.classList.add("sticky")
  } else {
    navbar.classList.remove("sticky");
  }
}

document.addEventListener('DOMContentLoaded', function() {
  window.onscroll = function(ev) {
    document.getElementById("cRetour").className = (window.pageYOffset > 100) ? "cVisible" : "cInvisible";
    stickyEffect()
  };
});

// Button back to top
document.addEventListener('DOMContentLoaded', function() {
  var aLiens = document.querySelectorAll('a[href*="#"]');
  for(var i=0, len = aLiens.length; i<len; i++) {
    aLiens[i].onclick = function () {
      if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
        var target = this.getAttribute("href").slice(1);
        if (target.length) {
          scrollTo(document.getElementById(target).offsetTop, 1000);
          return false;
        }
      }
    };
  }
});
function scrollTo(element, duration) {
  var e = document.documentElement;
  if(e.scrollTop===0){
    var t = e.scrollTop;
    ++e.scrollTop;
    e = t+1===e.scrollTop--?e:document.body;
  }
  scrollToC(e, e.scrollTop, element, duration);
}

function scrollToC(element, from, to, duration) {
  if (duration < 0) return;
  if(typeof from === "object")from=from.offsetTop;
  if(typeof to === "object")to=to.offsetTop;
  scrollToX(element, from, to, 0, 1/duration, 20, easeOutCuaic);
}

function scrollToX(element, x1, x2, t, v, step, operacion) {
  if (t < 0 || t > 1 || v <= 0) return;
  element.scrollTop = x1 - (x1-x2)*operacion(t);
  t += v * step;
  setTimeout(function() {
    scrollToX(element, x1, x2, t, v, step, operacion);
  }, step);
}

function easeOutCuaic(t){
  t--;
  return t*t*t+1;
}
