// NAV BAR

/* Toggle between adding and removing the "responsive" class to topnav when the user clicks on the icon */
function toggleMenu() {
    var x = document.getElementById("myTopnav");
    if (x.className === "nav") {
        x.className += " responsive";
    } else {
        x.className = "nav";
    }
}

/* Scroll to an element within the given duration
  @param element - HTMLElement that should be scrolled
  @param toPosition - vertical position in pixels
  @param duration - time in milliseconds */
function scroll(element, toPosition, duration) {
  if(duration <= 0) { return; }
  /* scrollTop measures how far the element has been scrolled */
  var distance = toPosition - element.scrollTop;
  /* calculate increment */
  var tick = distance / duration * 10;

  setTimeout(function() {
    element.scrollTop += tick;
    scroll(element, toPosition, duration - 10);
  }, 10);
}

function addHandlersToNavButtons() {
  var navButtons = document.querySelectorAll(".nav__item a");
  for(var i = 0; i < navButtons.length; i++) {
    /* Iterate through each nav button. Need to use closure to make i local */
    (function(i) {
      navButtons[i].addEventListener("click", function(e) {
        e.preventDefault();
        /* Each nav item has id as href attribute e.g. '#fac'. Find element with that id minus # */
        var target = document.getElementById(navButtons[i].getAttribute("href").substr(1));
        /* offsetTop is the number of pixels from the nearest relatively positioned element, or
         * html element if there are none */
        var elem = navigator.userAgent.indexOf("Firefox") > -1 ? document.documentElement : document.body;
        scroll(elem, target.offsetTop, 250)
      });
    })(i);
  };
};

// Tell browser to add event handlers when page is loaded
window.onload = addHandlersToNavButtons;
