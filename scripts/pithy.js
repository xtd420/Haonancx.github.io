$(function(){$(".gotopBox").click(function(){jQuery("html,body").animate({scrollTop:0},500)}),$(window).load(function(){$(".gotopBox").hide()}),$(window).scroll(function(){$(this).scrollTop()>300?$(".gotopBox").fadeIn("fast"):$(".gotopBox").stop().fadeOut("fast")}),$(".navbar-toggle").click(function(){$(".nav").toggle(200)});var a=$(window).width();430>=a?($(".navbar-toggle").css("display","inline-block"),$(".nav").css({margin:"0",position:"fixed",top:"55px",width:"100%",height:"auto",left:"0","background-image":"linear-gradient(to right, #207ce5 0, #26a9ff 100%)"}),$(".nav li").css({width:"100%",margin:"0"})):($(".navbar-toggle").css("display","none"),$(".nav").css("display","block"))});
$(function() {
	var Accordion = function(el, multiple) {
		this.el = el || {};
		this.multiple = multiple || false;

		// Variables privadas
		var links = this.el.find('.link');
		// Evento
		links.on('click', {el: this.el, multiple: this.multiple}, this.dropdown)
	}

	Accordion.prototype.dropdown = function(e) {
		var $el = e.data.el;
			$this = $(this),
			$next = $this.next();

		$next.slideToggle();
		$this.parent().toggleClass('open');

		if (!e.data.multiple) {
			$el.find('.submenu').not($next).slideUp().parent().removeClass('open');
		};
	}	

	var accordion = new Accordion($('.well'), false);
});