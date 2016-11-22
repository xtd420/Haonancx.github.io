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
    var screenWidth=$(window).width();
    if(screenWidth <= 430){
        $(".menuClick").css("display","block");
    }else{
        $(".menuClick").css("display","none");
    }
});


// 顶部导航随左边菜单栏变化事件
function ShowMenu() {
     $(".menu-left-banner").css("width","0px");
    document.getElementById('menuClick').onclick=function(){
      HideMenu();
    }       
}
function HideMenu() {
    document.getElementById('menuClick').onclick=function(){
        ShowMenu();
    };
      $(".menu-left-banner").css("width","190px");
      $(".header").css("width","calc(100% - 190px)");
      $(".header").css("left","190px");

}
// 顶部导航随左边菜单栏变化事件