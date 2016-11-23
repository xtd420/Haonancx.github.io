$(function(){$("#gotop").click(function(){jQuery("html,body").animate({scrollTop:0},500)}),$(window).load(function(){$("#gotop").hide()}),$(window).scroll(function(){$(this).scrollTop()>300?$("#gotop").fadeIn("fast"):$("#gotop").stop().fadeOut("fast")}),$(".navbar-toggle").click(function(){$(".nav").toggle(300)});var a=$(window).width();430>=a?($(".navbar-toggle").css("display","inline-block"),$(".nav").css({margin:"0",position:"fixed",top:"55px",width:"100%",height:"auto",left:"0","background-image":"linear-gradient(to right, #207ce5 0, #26a9ff 100%)"}),$(".nav li").css({width:"100%",margin:"0"})):($(".navbar-toggle").css("display","none"),$(".nav").css("display","block"))});
var _hmt = _hmt || [];
(function() {
  var hm = document.createElement("script");
  hm.src = "https://hm.baidu.com/hm.js?002f6ffa5129d9ed6ae4b02cd3ca7585";
  var s = document.getElementsByTagName("script")[0]; 
  s.parentNode.insertBefore(hm, s);
})();