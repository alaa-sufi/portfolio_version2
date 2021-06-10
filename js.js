$(document).ready(function () {
  "use strict";
//smooth scroll and active 
$(".mynav li").click(function(){
$(this).addClass("active").siblings().removeClass("active");
$("html , body").animate({
  scrollTop:$("#" + $(this).data("scroll")).offset().top + 1
},1000) 
})


$(window).scroll(function(){
// active in scroll
  $(".about ,.skills ,.portfolio ,.contact").each(function(){
    var blockId= $(this).attr("id");
    if($(window).scrollTop()>$(this).offset().top){
       $(".mynav li").removeClass("active");
       $(".mynav li[data-scroll="+ blockId +"]").addClass("active");
//if  window.scrollY ==window.scrollMaxY- active contact
       if(window.scrollY==window.scrollMaxY){
        $(".mynav li").removeClass("active");
       $(".mynav li[data-scroll=contact]").addClass("active");
       }
      //  solve scroll to about
      
     }
   })
   
//small nav in scroll
//    if($(document).scrollTop() >= 50){
//     $(".mynav").css({
//       padding: 0,
//       // opacity: 0.8
//     }
//     );
    
//     $(".mynav .logo").css("font-size","1.5rem");
//   }
//   else{
//     $(".mynav").css({
//       padding: "0.5rem 1rem",
//       // opacity: 1
//     }
//     );
    
//     $(".mynav .logo").css({ 
//     fontSize:"2rem"
//     }
//     );
//   }
 })

// margin top for body to be nav best
// $("body").css("margin-top",$(".mynav").height())


//project link in about
$(".about .main p span").click(function(){
  $("html , body").animate({
    scrollTop:$("#projects").offset().top + 1
  },1000) 
})
})

// collps navigator in click 
$(".nav-item").click(function(){
$(".navbar-toggler").toggleClass("collapsed");
$("#navbarSupportedContent").removeClass("show");
  // $("#navbarSupportedContent").css("display","none")
})
var myFullpage = new fullpage("#fullpage", {});