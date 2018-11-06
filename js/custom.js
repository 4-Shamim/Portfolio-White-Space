
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

/*---------- Responsive Menu ------------*/
var menu_collapse = document.querySelector(".menu-collapse");
menu_collapse.addEventListener("click", () => {

  /* Menu open & close */
  var menu_area = document.querySelector(".menu-area");

  // var style = window.getComputedStyle(menu_area);
  // var left = style.getPropertyValue("left");
  // left = left.substring(0, left.length - 2);

  // if(left < 0) {
  //   menu_area.style.left = 0;

  // } else {
  //   menu_area.style.left = "-250px";
  // }
  
  menu_area.classList.toggle("open-menu");

  /* Collapse icon rotation */
  var collapse_icon = document.querySelector(".menu-collapse .collapse-icon");
  collapse_icon.classList.toggle("rotation-collapse");

}, false);


/*---------- Preloader ---------- */
var preloader = document.getElementById("preloader");
window.addEventListener("load", function() {
    preloader.classList.add("complete");
}, false);

/*--------------- Progress Bar ----------------*/
var skills = document.querySelectorAll(".skillBox .skill_level");
skills.forEach(function(e) {
    var progressValue = e.getAttribute("data-value");
    e.style.width = progressValue;
});



/*---------------- jQuery ---------------*/
$(document).ready(function() {

  /*----------- Portfolio Menu ---------------*/
  $(".portfolio-menu ul li button").click(function() {
    $(".portfolio-menu ul li button").removeClass("active");
    $(this).addClass("active");
  });
  
  /*----------- Portfolio Masonry ------------*/
  var $grid = $('.portfolio-grid').isotope({
    itemSelector: '.portfolio-item',
    percentPosition: true,
    masonry: {
      // use outer width of grid-sizer for columnWidth
      columnWidth: 0
    }
  });
  
  $('.portfolio-menu ul li').on( 'click', 'button', function() {
    var filterValue = $(this).attr('data-filter');
    $grid.isotope({ filter: filterValue });
  });

  /*------------- Contact Validation -------------*/
  $.validator.setDefaults({
    highlight: function(element) {
      $(element)
        .closest('.form-control')
        .addClass('has-error');
    },
    unhighlight: function(element) {
      $(element).closest(".form-control")
      .removeClass("has-error")
      .addClass("valid-field")
    }
  })

  $("#contact-form").validate({
    rules: {
      name: {
        required: true,
        normalizer: function(value) {
          return $.trim(value);
        }
      },
      email: {
        required: true,
        email: true
      },
      subject: "required",
      textarea: {
        required: true,
        // minlength: 5,
        // maxlength: 50
        rangelength: [5, 50]
      }
    },
    messages: {
      name: "Please enter your name!",
      subject: "Please enter subject!",
      email: {
        required: "Please enter email!",
        email: "Please enter valid email!"
      },
      textarea: {
        required: "Please enter you message!",
        // minlength: "At least 5 character!",
        // maxlength: "Maximum 50 character!"
        rangelength: "Message length between 5 to 50!"
      }
    }
  });


















})















