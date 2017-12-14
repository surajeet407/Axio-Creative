$(document).foundation();

$(document).ready(function(){


	//hamburg menu--------------

    $(function(){
	    $('.navbar-toggle, nav').click(function(){
	        $('.navbar-toggle').toggleClass('navbar-on');
	        $('nav').fadeToggle();
	        $('nav').removeClass('nav-hide');
	    });
	});

	//counter-----------------

	$('#number,#number1,#number2,#number3,#number4,#number5').each(function () {
          $(this).prop('Counter',0).animate({
              Counter: $(this).text()
          }, {
              duration: 50000,
              easing: 'swing',
              step: function (now) {
                  $(this).text(Math.ceil(now));
              }
          });
      });


    // page top-to-bottom scroll----------------

 
   
   $('#pageScroll').click(function () {
      $('html, body').animate({scrollTop:1930}, 'slow');
      return false;
  });

});


//preloader----------------


$(document).ready(function() {
  
  $('#ud_dots').delay(6050).fadeOut(300,function() {
    $('#ud_bg_left').animate({left: '-50%'},300);
    $('#ud_bg_right').animate({right: '-50%'},300,function() {
      $('#ud_preloader').fadeOut(10);
    });
  });
  
});



//isotope----------------



   $('.filter a').click(function(){
        $('.filter a').removeClass('active');
        $(this).addClass('active');
 
        var selector = $(this).attr('data-filter');
          $('#rig').isotope({
        filter: selector
    });
    return false;
}); 




//parallax scrolling---------------------


$(function() {
  var h = $(window).height()
  $('.bg').height(h - (h / 6))
  $('.cover').height(h)
   $(window).resize(function() {
    var h = $(window).height()
    $('.bg').height(h - (h / 6))
    $('.cover').height(h)
  })

})

$(function() {
  var h = $(window).height()
  $('.bg1').height(h - (h / 4))
  $('.cover1').height(h)
   $(window).resize(function() {
    var h = $(window).height()
    $('.bg1').height(h - (h / 4))
    $('.cover1').height(h)
  })

})





//animated progress bar-------------------



$(document).ready(function() {
  $('.design-1').css('width', '60%');
  $('.developement').css('width', '80%');
  $('.brand').css('width', '70%');
  $('.javascript').css('width', '45%');
});




//google-map--------------------------------------------------------------



function initMap() {

        var map = new google.maps.Map(document.getElementById('map'), {
          center: new google.maps.LatLng(40.675, -73.945),
          zoom: 8,
          styles: [
            {
              featureType: 'all',
              stylers: [
                { saturation: -80 }
              ]
            },{
              featureType: 'road.arterial',
              elementType: 'geometry',
              stylers: [
                { hue: '#00ffee' },
                { saturation: 50 }
              ]
            },{
              featureType: 'poi.business',
              elementType: 'labels',
              stylers: [
                { visibility: 'off' }
              ]
            }
          ]
        });
        var infoWindow = new google.maps.InfoWindow({map: map});

        // Try HTML5 geolocation.
        if (navigator.geolocation) {
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            infoWindow.setPosition(pos);
            infoWindow.setContent('Location found.');
            map.setCenter(pos);
          }, function() {
            handleLocationError(true, infoWindow, map.getCenter());
          });
        } else {
          // Browser doesn't support Geolocation
          handleLocationError(false, infoWindow, map.getCenter());
        }

      function handleLocationError(browserHasGeolocation, infoWindow, pos) {
        infoWindow.setPosition(pos);
        infoWindow.setContent(browserHasGeolocation ?
                              'Error: The Geolocation service failed.' :
                              'Error: Your browser doesn\'t support geolocation.');
      }

   }



//style-switcher------------------------------



$(window).load(function(){
    $("#style-switcher h2 a").click(function() {
      return $("#style-switcher").toggleClass("open"),
      !1
  });
  $("#style-switcher li").click(function(a) {
      a.preventDefault();
      var b = $(this);
      return $(".colors").attr("href", "css/" + b.attr("id") + ".css"),
      $("#style-switcher").removeClass("open"),
      !1
  });

});


//form validation---------------------------



(function() {
  "use strict";
  var //GLOBAL VARIABLES
  input,
      container,
      //CSS CLASSES
      classSuccess = "success",
      classError = "error",
      //FORM VALIDATOR
      formValidator = {
        init: function() {
          this.cacheDom();
          this.bindEvents();
        },
        cacheDom: function() {
          //MAIN PARENT ELEMENT
          this.contactForm = document.getElementById("contactForm");
      
          this.inputContainer = document.getElementsByClassName("inputContainer");
          //USER INPUT ELEMENTS
          //INPUT FIELDS
          this.fields = {
            userName: document.getElementById("userName"),
            userEmail: document.getElementById("userEmail"),
            userMessage: document.getElementById("userMessage")
          };
          this.submitBtn = document.getElementById("submitBtn");
        },
        bindEvents: function() {
          var i;
          //RUN RULES ON SUBMIT BUTTON CLICK
          this.submitBtn.onclick = this.runRules.bind(this);
          //BIND EVENTS TO EACH INPUT FIELD
          for (i in this.fields) {
            if (this.fields.hasOwnProperty(i)) {
              //VARIABLES
              input = this.fields[i];
              container = input.parentElement;
              //RUN RULES WHEN INPUT HAS FOCUS
              input.onfocus = this.runRules.bind(this);
              //RESET ERRORS WHEN CONTAINER IS CLICKED
              container.onclick = this.resetErrors.bind(this, input);
            }
          }
        },
        runRules: function(evnt) {
          var target = evnt.target,
              type = evnt.type;
          //IF EVENT ON SUBMIT BUTTON
          if (target === this.submitBtn) {
            //PREVENT FORM SUBMITTION
            this.preventDefault(evnt);
            //IF INPUT HAS FOCUS
          } else if (type === "focus") {
            //RESET CLASSLIST
            this.resetClassList(target.parentElement);
            //RESET ERRORS
            this.resetErrors(target);
            return false;
          }
          //RESET CLASSLIST
          this.resetClassList();
          //CHECK FIELDS
          this.checkFields();
        },
        preventDefault: function(evnt) {
          //PREVENT DEFUALT
          evnt.preventDefault();
        },
        checkFields: function() {
          var i,
              validCount = 0,
              //EMAIL FILTER 
              filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
          //CYLCE THROUGH INPUTS
          for (i in this.fields) {
            if (this.fields.hasOwnProperty(i)) {
              input = this.fields[i];
              //CHECK IF FIELD IS EMPTY
              if (input.value === "") {
                //ADD ERROR CLASS
                this.addClass(input, classError);
                //CHECK IF EMAIL IS VALID
              } else if (i === "userEmail" && !filter.test(input.value)) {
                //ADD ERROR CLASS
                this.addClass(input, classError);
              } else {
                //FIELD IS VALID
                this.addClass(input, classSuccess);
                validCount += 1;
              }
            }
          }
          //IF ALL FEILDS ARE VALID
          if (validCount === 3) {
            //SUBMIT FORM
            this.submitForm();
          }
        },
        addClass: function(input, clss) {
          container = input.parentElement;
          //IF INPUT HAS ERROR
          if (clss === classError) {
            //SHOW ERROR MESSAGE
            this.errorMessage(input);
          }
          //ADD CLASS
          input.parentElement.classList.add(clss);
        },
        errorMessage: function(input) {
          var message;
          //IF USERNAME HAS ERROR
          if (input === this.fields.userName) {
            message = "Please enter your name";
            //ELSE IF USEREMAIL HAS ERROR 
          } else if (input === this.fields.userEmail) {
            message = "Please enter a valid email";
            //ELSE IF USERMESSAGE HAS ERROR
          } else if (input === this.fields.userMessage) {
            message = "Please enter your message";
          }
          this.renderError(input, message);
        },
        renderError: function(input, message) {
          var html;
          //GET INPUT CONTAINER
          container = input.parentElement;
          //RENDER HTML
          html = document.createElement("div");
          html.setAttribute("class", "message");
          html.innerHTML = message;
          //IF MESSAGE ELEMENT DOESN'T EXIST
          if (!container.getElementsByClassName("message")[0]) {
            //INSERT MESSAGE TO INPUT CONTAINER
            container.insertBefore(html, container.firstElementChild);
          }
        },
        resetClassList: function(input) {
          var i;
          //IF TARGETING SPECIFIC INPUT
          if (input) {
            //GET INPUT CONTAINER
            container = input.parentElement;
            //REMOVE CLASSES
            container.classList.remove(classError, classSuccess);
            //FOCUS ON INPUT FIELD
            input.focus();
          } else {
            for (i in this.fields) {
              if (this.fields.hasOwnProperty(i)) {
                //REMOVE CLASSES FROM ALL FIELDS
                this.fields[i].parentElement.classList.remove(classError, classSuccess);
              }
            }
          }
        },
        resetErrors: function(input) {
          //GET INPUT CONTAINER
          container = input.parentElement;
          //IF CONTAINER CONTAINS ERROR
          if (container.classList.contains(classError)) {
            //RESET CLASSES
            this.resetClassList(input);
          }
        },
        submitForm: function() {
          var waitForAnimation;
          //ADD SUCCESS CLASS
          this.contactForm.classList.add(classSuccess);
          //WAIT FOR ANIMATION TO FINISH
          this.changeHeader("Sent Succesfully");
          //WAIT FOR ANIMATION TO FINISH
          setTimeout(this.changeHeader.bind(this, "Thank you for your feedback"), 1200);
        },
        changeHeader: function(text) {
          //CHANGE HEADER TEXT
          this.formHeader.innerHTML = text;
        }
      };
  //INITIATE FORM VALIDATOR
  formValidator.init();
}());




