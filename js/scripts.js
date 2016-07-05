
    var permutation=function(){
        if($(window).width()>767){
            $('.why-we-item:odd').each(function(){
                var $img=$(this).children('.image-item');
                $img.addClass('lefted');
                $(this).children('.caption-item').addClass('righted');
                $(this).children('.image-item').remove();
                $(this).prepend($img);
            });
            
            $('.project-item:odd').each(function(){
                var $img=$(this).children('.image-item');
                $img.addClass('righted');
                $(this).children('.caption-item').addClass('lefted');
                $(this).children('.image-item').remove();
                $(this).append($img);
            });
                        
            $('.secret-item:odd').each(function(){
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
                if($(window).width()>767){
                    var k=1;
                    if($(window).width()<1200) k=0.855;
                    if($(window).width()<992) k=0.702;
                    $('.why-we-item .image-item img').each(function(){
                        $(this).css('width','');
                         var img_w=$(this).width();
                         $(this).css('width',(img_w*k)+'px');
                   });
                    $('.project-item .image-item img').each(function(){
                        $(this).css('width','');
                         var img_w=$(this).width();
                         $(this).css('width',(img_w*k)+'px');
                   });
                }
            }
        }else{
            $('.why-we-item:odd').each(function(){
                var $img=$(this).children('.image-item');
                $(this).children('.image-item').remove();
                $(this).append($img);
            });
            $('.project-item:odd').each(function(){
                var $img=$(this).children('.image-item');
                $(this).children('.image-item').remove();
                $(this).prepend($img);
            });
            
            $('img').css('width','');
        }
        var h=$('footer').height();
        $('#content-wrapper').css('padding-bottom',h+'px').css('margin-bottom','-'+h+'px');
    }

$(document).ready(function(){/* jQuery toggle layout */
    permutation();
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
        // Инициалиация
        var video = $("#main-video");

//    function vidplay() {
//       if (video.paused) {
//          video.play();
//       } else {
//          video.pause();
//       }
//    }        
//
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
        });
    
});