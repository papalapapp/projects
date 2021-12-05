const navSlide = () => {
	const burger = document.querySelector('.burger-button');
	const nav = document.querySelector('.nav-list');
	const navLinks = document.querySelectorAll('.nav-list li');

	burger.addEventListener('click',()=>{
		nav.classList.toggle('nav-active');

		burger.classList.toggle('toggle');
	});

}

navSlide();



// adabtive nabar
$(function() {
    //caches a jQuery object containing the header element
    var header = $(".navbar");
    $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll >= 100) {
            header.removeClass('bignavbar').addClass("smallnavbar");
        } else {
            header.removeClass("smallnavbar").addClass('bignavbar');
        }
    });
});

