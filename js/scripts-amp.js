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
        });//.trigger('to.owl.carousel',[$index,0]);

    }
    
    var sorted=function(){
        var current_width = $(document).width();
        if(current_width > 800) current_width = 800;
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

$(document).ready(function(){/* jQuery toggle layout */
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
    $('.btn-galery').click(function(){
        $('.galery').animate({'opacity':1},600).css('z-index',3);
    });
    
    $('.close-galery').click(function(){
        $('.galery').animate({'opacity':0},600,function(){$(this).css('z-index',-3);});
    });
    
    if($('.owl-carousel').length){
        $('.owl-carousel').owlCarousel({
            //loop: true,
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
            //loop: true,
            nav: true,
            navText:["",""],
            items: 1,
            thumbs: false,
            thumbImage: false,
         });
    }
        // Инициалиация
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
    $('body').on('click','#call-back-popup .close, #call-back-popup-mask',function(e){
        e.preventDefault();
       $('#call-back-popup').fadeOut(); 
       $('#call-back-popup-mask').fadeOut(); 
    });

    var h=$('footer').height();
    $('#content-wrapper').css('padding-bottom',h+'px').css('margin-bottom','-'+h+'px');
    $(window).resize(function(){sorted();});
});