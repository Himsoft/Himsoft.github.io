    var carousel_init=function($index,$parent){
        var content='';
        $parent.find('img').each(function(){
            content+='<div><img src="'+$(this).attr('data-src')+'" title="img" /></div>';
        });
        $('body').prepend('<div class="slider-popup"><div class="close"><span class="fa fa-close"></span></div><div class="slider-carousel">'+content+'</div></div>');
        $('.slider-carousel').owlCarousel({
            loop: true,
            nav: true,
            navText:["",""],
            items: 1,
            startPosition: $index,
            thumbs: false,
            thumbImage: false,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item',
        });

    }
    
    var sorted=function(){	
	if($('.galery').length){
	        var current_width = $(document).width();
	        if(current_width > 1260) current_width = 1260;
	        if(current_width < 410) current_width = 410;
	        $(".galery .container").css('width',current_width - 100 + "px");
	        var n = parseInt((current_width - 110)/(300));
	        var elem_width = parseInt((current_width - 110)/n - 13);
	        $('.galery .container .galery-item').width(elem_width);
	        $('.galery .container .content').masonry({
	            itemSelector: '.galery-item',
	            singleMode: true,
	            resizeable: true,
	            isAnimated: true,
	            animationOptions: {
	                queue: false,
	                duration: 500
	            }
	        });
    	}
    }

    var permutation=function(){
        console.log($(window).width());
        if($(window).width()>=751){
            
            $('.project-item:not(.destinations-item):not(.tours-item):odd,.project-item.destinations-item:not(.tours-item):even,.project-item.tours-item:even').each(function(){
                var $img=$(this).children('.image-item');
                $img.addClass('righted');
                $(this).children('.caption-item').addClass('lefted');
                $(this).children('.image-item').remove();
                $(this).append($img);
            });
                        
            $('.why-we-item:odd,.secret-item:odd').each(function(){
                var $img=$(this).children('.image-item');
                $img.addClass('lefted');
                $(this).children('.caption-item').addClass('righted');
                $(this).children('.image-item').remove();
                $(this).prepend($img);
            });
                        

            $('.reviews-item:even').each(function(){
                var $img=$(this).children('.caption-item').children('img');
                $(this).prepend('<div class="image-item lefted"></div>');                
                $(this).children('.caption-item').addClass('righted');
                $(this).children('.caption-item').children('img').remove();      
                $(this).children('.image-item').append($img);;         
            });
                        
            $('.reviews-item:odd').each(function(){
                var $img=$(this).children('.caption-item').children('img');
                $(this).append('<div class="image-item"></div>');                
                $(this).children('.caption-item').children('img').remove();      
                $(this).children('.image-item').append($img);;         
            });
                        
            if($(window).width()<1920){
                if($(window).width()>=751){
                    var k=1;
                    if($(window).width()<1200) k=0.855;
                    if($(window).width()<992) k=0.702;
                    $('.why-we-item .image-item img').each(function(){
                        $(this).css('width','');
                         var img_w=$(this).width();
                         $(this).css('width',(img_w*k)+'px');
                   });
                }
            }
        }else{
            $('.why-we-item:odd,.secret-item:odd').each(function(){
                var $img=$(this).children('.image-item');
                $(this).children('.image-item').remove();
                $(this).append($img);
            });
            $('.project-item').each(function(){
                var $img=$(this).children('.image-item');
                $(this).children('.image-item').remove();
                $(this).prepend($img);
            });
            $('img').css('width','');
        }
        var h=$('footer').height();
        $('#content-wrapper').css('padding-bottom',h+'px').css('margin-bottom','-'+h+'px');
    }

$(document).ready(function(){
    permutation();
    sorted();
    $('body').on('click','.slider-popup .close',function(){$('body').find('.slider-popup').remove();});
    $('.controls-galery .bottom>div').click(function(){
        if($(this).hasClass('up')){var step=-300;}
        if($(this).hasClass('down')){var step=300;}
        var tmp_scroll1 = $(".scroller").scrollTop() + step;
        $(".scroller").animate({scrollTop:tmp_scroll1},"slow");
    });

    $('.galery-item').click(function(){
        carousel_init($(this).index(),$(this).parent());
    });
    if($('.owl-carousel').length){
        $('.owl-carousel').owlCarousel({
            nav: true,
            navText:["",""],
            items: 1,
            thumbs: true,
            thumbImage: true,
            thumbContainerClass: 'owl-thumbs',
            thumbItemClass: 'owl-thumb-item',
        });
    }
    if($('.owl-carousel-no-thumb').length){
        $('.owl-carousel-no-thumb').owlCarousel({
            nav: true,
            navText:["",""],
            items: 1,
            thumbs: false,
            thumbImage: false,
         });
    }
        var video = $("#main-video");
    $('.show-video').click(function(){
        $('.top-video-container').fadeOut(500);
        $('.main-video-container').fadeIn(500);

        setTimeout(function(){
         video.get(0).play();
        }, 1100);

    });       
        
    video.bind("ended", function(){
        $('.top-video-container').fadeIn(500);
        $('.main-video-container').fadeOut(500);       
    });

    $('.call-back').click(function(){
       $('#call-back-popup').fadeIn();
       $('#call-back-popup-mask').fadeIn();
    });
    
    $('.btn-galery').click(function(){
        $('.galery').animate({'opacity':1},600).css('z-index',3);
    });
    
    $('.close-galery').click(function(){
        $('.galery').animate({'opacity':0},600,function(){$(this).css('z-index',-3);});
    });
    
    $('body').on('click','#call-back-popup .close, #call-back-popup-mask',function(e){
        e.preventDefault();
       $('#call-back-popup').fadeOut(); 
       $('#call-back-popup-mask').fadeOut(); 
    });

    $('.nav li').hover(function(){
        $(this).find('.sub-menu:not(:visible)').slideDown(300);
        }, function(){
        $(this).find('.sub-menu:visible').slideUp(300);
    });

    $('.nav .sub-menu li').hover(function(){
        $(this).children('ul:not(:visible)').animate({ opacity: 1,width: "show"},300);
        }, function(){
        $(this).children('ul:visible').animate({ opacity: "hide",width: "hide"},300);
    }); 
    
        $(window).resize(function(){
            permutation();
            sorted();
        });
    
});