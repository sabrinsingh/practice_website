//Navbar scroll color change 
             
var myNav=document.querySelector(".navbar");
console.log(myNav);
$(function() {
    $(document).scroll(function() { 
    var scroll = $(window).scrollTop();
//    console.log(scroll);
        if (scroll >= 200 && window.matchMedia("(min-width: 991px)").matches) {
            console.log("YES");
            myNav.style.backgroundColor = "cornflowerblue";
            myNav.style.height="50px";
        } else {
            console.log("NO");
            myNav.style.backgroundColor = "transparent";
            myNav.style.height="auto";
        }
        console.log(myNav);
    });
});






            
//Testimonials Carousal Interval calculated in millisecond            
$('.carousel').carousel({
  interval: 3000
})   


//Add Animtaion/ Initiate WOW JS
$(function(){
    'use strct';
    new WOW().init();                  
            });

