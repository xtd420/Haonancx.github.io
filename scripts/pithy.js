$(function(){$(".gotopBox").click(function(){jQuery("html,body").animate({scrollTop:0},500)}),$(window).load(function(){$(".gotopBox").hide()}),$(window).scroll(function(){$(this).scrollTop()>300?$(".gotopBox").fadeIn("fast"):$(".gotopBox").stop().fadeOut("fast")}),$(".navbar-toggle").click(function(){$(".nav").toggle(200)});var a=$(window).width();430>=a?($(".navbar-toggle").css("display","inline-block"),$(".nav").css({margin:"0",position:"fixed",top:"55px",width:"100%",height:"auto",left:"0","background-image":"linear-gradient(to right, #207ce5 0, #26a9ff 100%)"}),$(".nav li").css({width:"100%",margin:"0"})):($(".navbar-toggle").css("display","none"),$(".nav").css("display","block"));var Accordion=function(el,multiple){this.el=el||{};this.multiple=multiple||false;var links=this.el.find(".link");links.on("click",{el:this.el,multiple:this.multiple},this.dropdown)};Accordion.prototype.dropdown=function(e){var $el=e.data.el;$this=$(this),$next=$this.next();$next.slideToggle();$this.parent().toggleClass("open");if(!e.data.multiple){$el.find(".submenu").not($next).slideUp().parent().removeClass("open")}};var accordion=new Accordion($(".well"),false)

 var time1 = 0;
        var show = false;
        var names = new Array(); //文章名字等
        var urls = new Array(); //文章地址
        $(document).keyup(function (e) {
            var time2 = new Date().getTime();
            if (e.keyCode == 17) {
                var gap = time2 - time1;
                time1 = time2;
                if (gap < 500) {
                    if (show) {
                        $(".cb-search-tool").css("display", "none");
                        show = false;
                    } else {
                        $(".cb-search-tool").css("display", "block");
                        show = true;
                        $("#cb-search-content").val("");
                        $("#cb-search-content").focus();
                    }
                    time1 = 0;
                }
			}else if(e.keyCode == 27){
                    $(".cb-search-tool").css("display", "none");
                    show = false;
                    time1 = 0;
                }
        });

 		$("#cb-search-content").keyup(function (e) {
            var time2 = new Date().getTime();
            if (e.keyCode == 17) {
                var gap = time2 - time1;
                time1 = time2;
                if (gap < 500) {
                    if (show) {
                        $(".cb-search-tool").css("display", "none");
                        show = false;
                    } else {
                        $(".cb-search-tool").css("display", "block");
                        show = true;
                        $("#cb-search-content").val("");
                        $("#cb-search-content").focus();
                    }
                    time1 = 0;
                }
            }
        });

        $("#cb-close-btn").click(function () {
            $(".cb-search-tool").css("display", "none");
            show = false;
            time1 = 0;
        });

        $("#cb-search-btn").click(function(){
            $(".cb-search-tool").css("display", "block");
            show = true;
            $("#cb-search-content").val("");
            $("#cb-search-content").focus();
            time1 = 0;
        });

        $.getJSON("/scripts/cb-search.json").done(function (data) {
            if (data.code == 0) {
                for (var index in data.data) {
                    var item = data.data[index];
                    names.push(item.title);
                    urls.push(item.url);
                    alert("err")
                }

                $("#cb-search-content").typeahead({
                    source: names,

                    afterSelect: function (item) {
						$(".cb-search-tool").css("display", "none");
                        show = false;
                        window.location.href = (urls[names.indexOf(item)]);
                        return item;
                    }
                });
            }
        });
});