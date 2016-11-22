$(function(){
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        }, 500);
    });
    $(window).load(function() {
		$('#gotop').hide();
    })
    
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });

      $(".navbar-toggle").click(function(){
      $(".nav").toggle(1000);
      });

    var screenWidth=$(window).width();
    if(screenWidth <= 430){
        $(".navbar-toggle").css("display","inline-block");
        $(".nav").css({"margin":"0","position":"fixed","top":"55px","width":"100%","height":"auto","left":"0","background-image":"linear-gradient(to right, #207ce5 0, #26a9ff 100%)"});
    }else{
        $(".navbar-toggle").css("display","none");
        $(".nav").css("display","block");
        
    }
});

// function ShowMenu() {
//      $(".menu-left-banner").css("width","0px");
//     document.getElementById('menuClick').onclick=function(){
//       HideMenu();
//     }       
// }
// function HideMenu() {
//     document.getElementById('menuClick').onclick=function(){
//         ShowMenu();
//     };
//       $(".menu-left-banner").css("width","190px");
//       $(".header").css("width","calc(100% - 190px)");
//       $(".header").css("left","190px");

// }
