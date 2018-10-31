
/* ----------- WOW ------------ */

var wow = new WOW(
    {
      boxClass:     'wow',      // animated element css class (default is wow)
      animateClass: 'animated', // animation css class (default is animated)
      offset:       0,          // distance to the element when triggering the animation (default is 0)
      mobile:       true,       // trigger animations on mobile devices (default is true)
      live:         true,       // act on asynchronously loaded content (default is true)
      callback:     function(box) {
        // the callback is fired every time an animation is started
        // the argument that is passed in is the DOM node being animated
      },
      scrollContainer: null // optional scroll container selector, otherwise use window
    }
  );
  wow.init();

/* -------- Navigation --------- */
var menu = document.querySelectorAll(".nav-menu ul li a");
menu.forEach(function(e) {
    e.addEventListener("click", function(e) {
        
        var current = document.querySelector(".nav-menu ul li a.active");
        current.className = current.className.replace("active", "");
        this.classList.add("active");

        var clickedPage = this.getAttribute("href");

        var page = document.querySelector(".sub-page .current-page");
        page.className = page.className.replace("current-page", "");

        var currentPage = document.querySelector(".sub-page " + clickedPage);
        currentPage.classList.add("current-page");
        
        e.preventDefault();
    });
}, false);

/*---------- Preloader ---------- */

var preloader = document.getElementById("preloader");
window.addEventListener("load", function() {
    preloader.classList.add("complete");
}, false);