//Navbar scroll color change 
             
var myNav=document.querySelector(".navbar")
$(function() {
    $(document).scroll(function() { 
    var scroll = $(window).scrollTop();
//    console.log(scroll);
        if (scroll >= 200) {
            myNav.style.backgroundColor = "cornflowerblue";
            myNav.style.height="50px";
        } else {
            myNav.style.backgroundColor = "transparent";
             myNav.style.height="auto";
        }
    });
});




            
//Testimonials Carousal Interval calculated in millisecond            
$('.carousel').carousel({
  interval: 3000
})       

