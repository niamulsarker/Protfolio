$('document').ready(function(){

var typed = new Typed('.element', { strings: ["Student.", 
           "Deginer.",
           "Developer."], 
           typeSpeed: 60,
            backSpeed: 60, 
             loop: true,
            });
$("#sticker").sticky({
topSpacing: 0,
});


var slider = tns({ 
  container: '#Team_Div', 
  items: 1, 
  slideBy: 'page', 
  autoplay: true , 
  controls: false,
  nav     : false,
  autoplayTimeout: 2000,
  });
  
var config = document.querySelector('.Mymixitup');
var mixer = mixitup(config);


AOS.init();

$('a').smoothScroll();

});