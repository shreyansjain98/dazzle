$(document).ready(function(){
      $('.div3').slick({
        	dots:true,
		  	infinite:true,
		  	speed: 300,
		  	arrows:true,
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	responsive: [
		    {
		    breakpoint: 1190,
		    settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: true,
		      }
		    },
		    {
		    breakpoint: 681,
		    settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: true,
		      }
		    },
		  ]
		      });
		    });

    $(document).ready(function(){
      $('.div8').slick({
        	dots:true,
		  	infinite:true,
		  	speed: 300,
		  	arrows:true,
		  	slidesToShow: 3,
		  	slidesToScroll: 1,
		  	responsive: [
		    {
		    breakpoint: 1190,
		    settings: {
		    slidesToShow: 2,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: true,
		      }
		    },
		    {
		    breakpoint: 681,
		    settings: {
		    slidesToShow: 1,
		    slidesToScroll: 1,
		    infinite: true,
		    dots: true,
		      }
		    },
		  ]
		      });
		    });

    $(document).ready(function(){
    $(".slidelink1").click(function(){
    	$(".slide1").addClass("fadeIn");
		$(".slide1").addClass("animated");
        $(".slide1").show();
        $(".slide2").hide();
        $(".slide3").hide();

    });
    $(".slidelink2").click(function(){
    	$(".slide2").addClass("fadeIn");
		$(".slide2").addClass("animated");
        $(".slide2").show();
        $(".slide1").hide();
        $(".slide3").hide();

    });
    $(".slidelink3").click(function(){
    	$(".slide3").addClass("fadeIn");
		$(".slide3").addClass("animated");
        $(".slide3").show();
        $(".slide1").hide();
        $(".slide2").hide();

    });
    $(window).resize(function(){
	    if($(window).width()<673) {
	        $(".slide1").show();
	        $(".slide2").show();
	        $(".slide3").show();
	    }
	    else{
	    	$(".slide1").show();
        	$(".slide2").hide();
        	$(".slide3").hide();
	    }
	});
	$(".pg").click(function(){
    	$(".pgdropdown").addClass("fadeIn");
		$(".pgdropdown").addClass("animated");
	});
	});


	$(window).resize(function(){
	    if($(window).width()<481) {
	        $(".blogbig").show();
	        $(".blogsmall").hide();
	    }
	    else{
	    	$(".blogbig").hide();
	        $(".blogsmall").show();
	    }
	});
	

	$(window).scroll(function() {
		$('#chknew').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+630) {
				$(this).addClass("zoomIn");
				$(this).addClass("animated");
			}
		});
		$('.spl').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+570) {
				$(this).addClass("zoomIn");
				$(this).addClass("animated");
			}
		});

		$('#newprod').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+620) {
				$(this).addClass("zoomIn");
				$(this).addClass("animated");
			}
		});
		$('.jl2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+630) {
				$(this).addClass("zoomIn");
				$(this).addClass("animated");
			}
		});
		$('.right').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+610) {
				$(this).addClass("slideInRight");
				$(this).addClass("animated");
			}
		});
		$('.left').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+610) {
				$(this).addClass("slideInLeft");
				$(this).addClass("animated");
			}
		});
	});