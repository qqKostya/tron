$(function() {
	$('.close-over, .close-undermodal').on('click', function () {
		$('#comebacker').fadeOut(300); // 300 скорость исчезновения | disappear speed
		$('body').removeClass('comebackerhidden');
	});

	var comebacker = true;
	
	// $(window).mouseout(function(e){
	// 	// На ===MouseOut===
	// 	if(e.pageY - $(window).scrollTop() < 1 && comebacker == true){
	// 		$('#comebacker').fadeIn(300); 
	// 		$('body').addClass('comebackerhidden');
	// 		comebacker = false;
	// 	}
	// });

	$(document).keyup(function(e) {
		// На нажатие ===Backspace===
		if(e.key === 'Backspace' && comebacker){
			$('#comebacker').fadeIn(300); 
			$('body').addClass('comebackerhidden');
			comebacker = false;
		}
	});


	$(window).on("beforeunload", function() {
			$('#comebacker').fadeIn(300); // 300 скорость появления | appear speed 
			$('body').addClass('comebackerhidden');
			comebacker = false;
		return "Вы уверены, что хотите покинуть страницу?";

	});

	

	// try {
	// 	setTimeout(
	// 		function show_comebacker() {
	// 			if(comebacker) {
	// 				$('#comebacker').fadeIn(300); // 300 скорость появления | appear speed 
	// 				$('body').addClass('comebackerhidden');
	// 				comebacker = false;
	// 			}
	// 		}, 10000 //Время появления в милисекундах | Appear time in milliseconds
	// 	)
	// }
	// catch (e) {}
});