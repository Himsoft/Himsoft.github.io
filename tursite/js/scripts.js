    var res_img=function(){
        if($('.top-block .owl-carousel-no-thumb .owl-item img').width()>$('.top-block .owl-carousel-no-thumb .owl-item img').parent().width()){
            var marg=($('.top-block .owl-carousel-no-thumb .owl-item img').width()-$('.top-block .owl-carousel-no-thumb .owl-item img').parent().width())/2;
            $('.top-block .owl-carousel-no-thumb .owl-item img').css('margin-left','-'+marg+'px');
        }else{
            $('.top-block .owl-carousel-no-thumb .owl-item img').css('margin-left','');        
        }
        var h=$('footer').height();
        $('#content-wrapper').css('padding-bottom',h+'px').css('margin-bottom','-'+h+'px');

    }
    
    var show_moore=function($this){
        var h='';
        if($(window).width()>=563){var h=$this.parents('.inner').find('.img-blk + .caption').innerHeight()+'px';}
        if($this.hasClass('active')){
            $this.parents('.inner').find('li.hides').hide();
            $this.parents('.inner').removeClass('collapseds').css('padding-bottom','');
            $this.removeClass('active');
        }else{
            $('li.hides').hide();
            $('.inner.collapseds').removeClass('collapseds').css('padding-bottom','');
            $this.parents('.inner').find('li.hides').show();
            $this.parents('.inner').addClass('collapseds').css('padding-bottom',h);
            $('.resttypes .show-moore.active').removeClass('active');
            $this.addClass('active');            
        }

    }
    
    var carousel_init=function($index,$parent){
        var content='',i=0;
        $parent.parent().find('img').each(function(){
            content+='<div><img src="'+$(this).attr('data-src')+'" title="img" /></div>';
            i++;
        });
        $('body').prepend('<div class="slider-popup"><div class="close base-second-bg-color"><span></span></div><div class="slider-carousel">'+content+'</div></div>');
        if(i>1){
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

    }
    
    var sorted=function(){
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

    var permutation=function(){
        console.log($(window).width());
        if($(window).width()>=751){
            
            $('.project-item:not(.destinations-item):not(.tours-item):odd,.project-item.destinations-item:not(.tours-item):even,.project-item.tours-item:even,.secret-item:odd').each(function(){
                var $img=$(this).children('.image-item');
                $img.addClass('righted');
                $(this).children('.caption-item').addClass('lefted');
                $(this).children('.image-item').remove();
                $(this).append($img);
            });
                        
            $('.why-we-item:odd').each(function(){
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
            $('.why-we-item:odd').each(function(){
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
    $(window).scroll(function() {
        if($(this).scrollTop() >= ($(window).height()/2)) {
            $('.back-to-top').fadeIn();
        } else {
            $('.back-to-top').fadeOut();
        }
    });

$(document).ready(function(){
    
    
    if($('.comments > .item .ellipsis').length&&$('.comments > .item .ellipsis').is(":visible")){
        $(".comments > .item .ellipsis").dotdotdot({
    		after: "a.show-moore"
    	});
        //console.log('ellipsis.length='+$('.ellipsis').length);
     }
     $('.nav.nav-tabs a').click(function(){

        setTimeout(function(){
         //if($('.comments > .item .ellipsis').is(":visible")){
            $('.comments > .item .text > p').each(function(){
                console.log($(this).attr('class'));
                if($(this).hasClass('is-truncated')){
                    $(this).trigger("update");
                }else{
                    if($(this).hasClass('ellipsis')){
                        $(this).dotdotdot({
                    		after: "a.show-moore"
                    	});
                    }else{
                        $(this).attr('realH',$(this).height()).addClass('ellipsis').dotdotdot({
                    		after: "a.show-moore"
                    	});
                    }
                }
            });
            //console.log('ellipsis.length='+$('.ellipsis').length);
         //}    
         console.log('ellipsis.length='+$('.comments > .item .ellipsis').length);    
            
        }, 3)

     });
     $('.comments > .item .show-moore').click(function(){
        console.log($(this).parent().css('height'));
        var $parent=$(this).parent();
        var realH=$parent.attr('realH')+'px';
        console.log(realH);
        if($parent.css('height')!=realH){
            $parent.css('height',realH).trigger("update").find('.show-moore').addClass('active');
        }else{
            $parent.css('height','36px').trigger("update").find('.show-moore').removeClass('active');
        }
        
     });
        
    //$('#ui-datepicker-div').append('<span class="close" data-handler="hide" data-event="click"></span>');
    $('.perriod .time_fild + span').click(function(){
        $(this).prev().focus();
    });
    
    $('.back-to-top').click(function(e) {e.preventDefault(); $('body,html').animate({scrollTop:0},1000);});
    $('.map-contacts-block .view-map > .btn,.map-contacts-block .contacts-feedback-block > .btn').click(function(e){
        e.preventDefault();
        if($('.map-contacts-block .contacts-feedback-block:visible').length) $('.map-contacts-block .contacts-feedback-block,.map-contacts-block .mask').fadeOut(500);
        else $('.map-contacts-block .contacts-feedback-block,.map-contacts-block .mask').fadeIn(500);
    });
    $('#search-tur select,.head-res select,.prise-blk select,.chos').chosen({disable_search_threshold: 15});
    $( "#datepicker1,#ord_datepicker1").datepicker({
        minDate: 0,
        changeMonth: true,
        changeYear: true,
        onClose: function( selectedDate ) {
            $( "#datepicker2" ).datepicker( "option", "minDate", selectedDate||0 );
            $( "#ord_datepicker2" ).datepicker( "option", "minDate", selectedDate||0 );
        }
    });
    $( "#datepicker2,#ord_datepicker2").datepicker({
        minDate: 0,
        changeMonth: true,
        changeYear: true,
        onClose: function( selectedDate ) {
            $( "#datepicker1" ).datepicker( "option", "maxDate", selectedDate );
            $( "#ord_datepicker1" ).datepicker( "option", "maxDate", selectedDate );
        }
    });
    $('.resttypes .show-moore').click(function(){
        show_moore($(this));
    });
    $('.abbr_ext').click(function(){
        if($(this).hasClass('open')){
            $(this).removeClass('open');
            $('#search-tur-form').removeClass('extended').addClass('abbreviated');
            $('#search-hotels-form').show();
            $('#search-tur.hotels h5').hide();
        }else{
            $(this).addClass('open');
            $('#search-tur-form').addClass('extended').removeClass('abbreviated');
            $('#search-hotels-form').hide();
            $('#search-tur.hotels h5').show();
        }
    });
    $('.grid-block .filter-block input[type="checkbox"]').change(function(){
        if($('.grid-block .filter-block input[type="checkbox"]:checked').length){
            $('.grid-block .result-block > .item').hide();
            $('.grid-block .filter-block input[type="checkbox"]:checked').each(function(){
                $('.grid-block .result-block > .item.'+$(this).val()).show();
            });
        }else{
            $('.grid-block .result-block > .item').show();
        }
    });
    $('.tour.top-block .prise-blk select').change(function(){
        $('.prise-blk .res.active:not([data-val="'+$(this).val()+'"])').removeClass('active');
        $(this).parent().find('.res[data-val="'+$(this).val()+'"]').addClass('active');
    });
    
    $(window).load(function(){
    $('.pluso .pluso-wrap a').addClass('base-second-bg-color');    
    });
    
   	$("body").on("click","a.to-anchor", function (event) {
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: (top)}, 800);
	});
    $('a.add-comment').click(function(e){
        e.preventDefault();
        $('.comments-wrapper').fadeOut(800);
        $('.add-comment-wrapper').fadeIn(800);
    });
    var wrapper = $( ".file_upload" ),
            inp = wrapper.find( "input" ),
            btn = wrapper.find( ".button" ),
            lbl = wrapper.find( "mark" );
    
        wrapper.click(function(){
            lbl.text( '' );
        });
        // Crutches for the :focus style:
        inp.focus(function(){
            wrapper.addClass( "focus" );
        }).blur(function(){
            wrapper.removeClass( "focus" );
        });
    
        var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;
    
        inp.change(function(){
            var file_name;
            if( file_api && inp[ 0 ].files[ 0 ] )
                file_name = inp[ 0 ].files[ 0 ].name;
            else
                file_name = inp.val().replace( "C:\\fakepath\\", '' );
    
            if( ! file_name.length )
                return;
            lbl.text( file_name );
        }).change();
        
        $('.ratings-stars.ev .rating-star').hover(
            function(){
                var index=$(this).index();
                $(this).parent().find('.rating-star').removeClass('hov1 hov2 hov3 base-bg-color base-second-bg-color');
                if(index<2){
                     $(this).parent().find('.rating-star').each(function(){if($(this).index()<=index) $(this).addClass('hov1 base-second-bg-color')});
                }
                if(index==2){
                     $(this).parent().find('.rating-star').each(function(){if($(this).index()<=index) $(this).addClass('hov2')});
                }
                if(index>2){
                     $(this).parent().find('.rating-star').each(function(){if($(this).index()<=index) $(this).addClass('hov3 base-bg-color')});
                }
            },
            function(){
                $(this).parent().find('.rating-star').removeClass('hov1 hov2 hov3 base-bg-color base-second-bg-color');
                $(this).parent().find('.rating-star.sel1').addClass('base-second-bg-color');
                $(this).parent().find('.rating-star.sel3').addClass('base-bg-color');
            }
        );
        $('.ratings-stars.ev .rating-star').click(function(){
            var index=$(this).index();
            $(this).parent().find('.rating-star').removeClass('sel1 sel2 sel3 hov1 hov2 hov3 base-bg-color base-second-bg-color');
            if(index<2){
                $(this).parent().find('.rating-star').each(function(){if($(this).index()<=index) $(this).addClass('sel1 base-second-bg-color')});
            }
            if(index==2){
                $(this).parent().find('.rating-star').each(function(){if($(this).index()<=index) $(this).addClass('sel2')});
            }
            if(index>2){
                $(this).parent().find('.rating-star').each(function(){if($(this).index()<=index) $(this).addClass('sel3 base-bg-color')});
            }
            $(this).parent().parent().find('input[type="hidden"]').val(index+1);
        });
        
        $('.map-block .view-map .show-map').click(function(e){
            e.preventDefault();
            $('.map-block .view-map .show-map,.map-block .view-map .dimmer').fadeOut(800);
            $('.map-block .view-map .hide-map').fadeIn(800);
        });
        
        $('.map-block .view-map .hide-map').click(function(e){
            e.preventDefault();
            $('.map-block .view-map .hide-map').fadeOut(800);
            $('.map-block .view-map .show-map,.map-block .view-map .dimmer').fadeIn(800);
        });
        
    $( window ).resize(function(){
        $( ".file_upload input" ).triggerHandler( "change" );
    });
    
    //permutation();
    //sorted();        
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
    if($('.owl-carousel-turs').length){
        $('.owl-carousel-turs').owlCarousel({
            nav: true,
            navText:["",""],
            responsive: {
                0: {
                    items: 1
                },
                580: {
                    items: 3
                },
                768: {
                    items: 4
                },
                960: {
                    items: 5
                }
            },
            thumbs: false,
            thumbImage: false,
         });
    }
    if($('.owl-carousel-hot').length){
        $('.owl-carousel-hot').owlCarousel({
            nav: true,
            navText:["",""],
            responsive: {
                0: {
                    items: 1
                },
                580: {
                    items: 2
                },
                768: {
                    items: 3
                },
                1200: {
                    items: 4
                }
            },
            thumbs: false,
            thumbImage: false,
         });
    $('.hot-items .owl-item .hot-item').each(function(){
        $(this).height($(this).parents('.owl-stage').height());
    });

    }
    if($('.owl-carousel-no-thumb').length){
        $('.owl-carousel-no-thumb').owlCarousel({
            loop:true,
            nav: true,
            navText:["",""],
            items: 1,
            autoplay: true,
            autoplaySpeed: 1500,
            autoplayTimeout: 3000,
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
        if($(this).hasClass('open')){
            $('.galery').animate({'opacity':1},600).css('z-index',4);
            $(this).removeClass('open');
        }else{
            $('.galery').animate({'opacity':0},600,function(){$(this).css('z-index',-3);});
            $(this).addClass('open');
        }
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
    
        res_img();
        $(window).resize(function(){
            res_img();
            show_moore($('.resttypes .show-moore.active'));
            //permutation();
            //sorted();
        });
    
});