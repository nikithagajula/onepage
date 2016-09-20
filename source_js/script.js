/*var divs = document.getElementsByTagName('div');
for(var i=0; i<divs.length; i++) {
  divs[i].addEventListener("click", highlightThis);

  divs[i].addEventListener("click", highlightThis, true);
  divs[i].addEventListener("click", highlightThis, false);
}

function highlightThis(event) {
    //event.stopPropagation();

    var backgroundColor = this.style.backgroundColor;
    this.style.backgroundColor='yellow';
    alert(this.className);
    this.style.backgroundColor=backgroundColor;
}*/
var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}

$(document).ready(function() {

  var navOffset = $("nav").offset().top;
  //alert(navOffset);

  $(window).scroll(function() {
    var scrollpos = $(window).scrollTop();
    //jQuery(".status").html(scrollpos);
    if(scrollpos > 100) {
      $("header").removeClass("large").addClass("small");
    } else {
      $("header").removeClass("small").addClass("large");
    }

    if(scrollpos >= navOffset) {
      $("nav").addClass("fixed");
    } else {
      $("nav").removeClass("fixed");
    }
  });

  $(window).scroll(function() {
    var offset1 = $("#overview").offset().top;
    var offset2 = $("#dash").offset().top;
    var offset3 = $("#design").offset().top;
    var offset4 = $("#camera").offset().top;
    var offset5 = $("#technology").offset().top;
    var offset6 = $("#oxygen").offset().top;
    var scrollpos = $(window).scrollTop();
    if(scrollpos < offset2) {
      $("#li1").css("background-color", "#111");
      $("#li2").css("background-color", "#333");
      $("#li3").css("background-color", "#333");
      $("#li4").css("background-color", "#333");
      $("#li5").css("background-color", "#333");
      $("#li6").css("background-color", "#333");
    } else if(scrollpos >= offset2 && scrollpos < offset3) {
      $("#li1").css("background-color", "#333");
      $("#li2").css("background-color", "#111");
      $("#li3").css("background-color", "#333");
      $("#li4").css("background-color", "#333");
      $("#li5").css("background-color", "#333");
      $("#li6").css("background-color", "#333");
    } else if(scrollpos >= offset3 && scrollpos < offset4) {
      $("#li1").css("background-color", "#333");
      $("#li2").css("background-color", "#333");
      $("#li3").css("background-color", "#111");
      $("#li4").css("background-color", "#333");
      $("#li5").css("background-color", "#333");
      $("#li6").css("background-color", "#333");
    } else if(scrollpos >= offset4 && scrollpos < offset5) {
      $("#li1").css("background-color", "#333");
      $("#li2").css("background-color", "#333");
      $("#li3").css("background-color", "#333");
      $("#li4").css("background-color", "#111");
      $("#li5").css("background-color", "#333");
      $("#li6").css("background-color", "#333");
    } else if(scrollpos >= offset5 && scrollpos < offset6) {
      $("#li1").css("background-color", "#333");
      $("#li2").css("background-color", "#333");
      $("#li3").css("background-color", "#333");
      $("#li4").css("background-color", "#333");
      $("#li5").css("background-color", "#111");
      $("#li6").css("background-color", "#333");
    } else {
      $("#li1").css("background-color", "#333");
      $("#li2").css("background-color", "#333");
      $("#li3").css("background-color", "#333");
      $("#li4").css("background-color", "#333");
      $("#li5").css("background-color", "#333");
      $("#li6").css("background-color", "#111");
    }
  });


});

$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000);
        return false;
      }
    }
  });
});

// Get the modal
var modal = document.getElementById('myModal');
var modal2 = document.getElementById('myModal2');
var modal3 = document.getElementById('myModal3');
// Get the image and insert it inside the modal - use its "alt" text as a caption
var img = document.getElementById('myMImg');
var img2 = document.getElementById('myMImg2');
var img3 = document.getElementById('myMImg3');
var modalImg = document.getElementById("img01");
var modalImg2 = document.getElementById("img012");
var modalImg3 = document.getElementById("img013");
var captionText = document.getElementById("caption");
var captionText2 = document.getElementById("caption2");
var captionText3 = document.getElementById("caption3");
img.onclick = function(){
    modal.style.display = "block";
    //modalImg.src = this.src;
    captionText.innerHTML = this.alt;
}
img2.onclick = function(){
    modal2.style.display = "block";
    //modalImg2.src = this.src;
    captionText2.innerHTML = this.alt;
}
img3.onclick = function(){
    modal3.style.display = "block";
    //modalImg3.src = this.src;
    captionText3.innerHTML = this.alt;
}
// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
  modal.style.display = "none";
  modal2.style.display = "none";
  modal3.style.display = "none";

}
