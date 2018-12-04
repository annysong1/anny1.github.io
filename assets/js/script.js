var workSectionCurrentImage = 0;
var hobbiesSectionCurrentImage = 0;

$(document).ready(function() {
	$('#work-carousel > .carousel').css('width', $('#work-carousel .carousel-item').length * 960);
	$('#hobbies-carousel > .carousel').css('width', $('#hobbies-carousel .carousel-item').length * 960);

	$(window).on('scroll', function() {
		if ($(window).scrollTop()) {
			$('nav').addClass('black');
		} else {
			$('nav').removeClass('black');
		}
	});

	$("#work-carousel > .carousel-prev").click(function() {
		if (workSectionCurrentImage > 0) {
			workSectionCurrentImage -= 1;
		}
		updateWorkCarousel();
	});

	$("#work-carousel > .carousel-next").click(function() {
		if (workSectionCurrentImage < $('#work-carousel .carousel-item').length - 1) {
			workSectionCurrentImage += 1;
		}
		updateWorkCarousel();
	});

	$("#hobbies-carousel > .carousel-prev").click(function() {
		if (hobbiesSectionCurrentImage > 0) {
			hobbiesSectionCurrentImage -= 1;
		}
		updateHobbiesCarousel();
	});

	$("#hobbies-carousel > .carousel-next").click(function() {
		if (hobbiesSectionCurrentImage < $('#hobbies-carousel .carousel-item').length - 1) {
			hobbiesSectionCurrentImage += 1;
		}
		updateHobbiesCarousel();
	});

$("a[href]").click(function() {
    $('body').removeClass('no-scroll');
    $('html, body').animate({
      scrollTop: $( $.attr(this, 'href')).offset().top
    }, 800);
    setTimeout(function() {
        $("#sidebar-button").removeClass("button-active");
        $(".sidebar-container").removeClass("sidebar-active");
        $(".page-wrapper").removeClass(".wrapper-active");
        return false;
    }, 300);
  });

});

function updateWorkCarousel() {
	var marginleft = workSectionCurrentImage * 960 * -1;
  	$('#work-carousel > .carousel').css("margin-left", marginleft);
}

function updateHobbiesCarousel() {
	var marginleft = hobbiesSectionCurrentImage * 960 * -1;
  	$('#hobbies-carousel > .carousel').css("margin-left", marginleft);
}


