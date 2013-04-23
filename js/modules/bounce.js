define(['jquery', 'helpers/binder'], function($, Binder) {

	var arrow;

	var m = {
		bounce: function(st) {
			//get center of screen
			var center = st + $(window).height() / 2;

			//find currently centered frame
			$('.work').each(function() {
				var t = $(this).offset().top;
				var h = $(this).height();

				if (center > t && center < t + h) {
					arrow = $('.arrow', this);
					arrow.addClass('bounce');
					return false;
				}
			});
		},

		clearBounce: function() {
			if (arrow) {
				arrow.removeClass('bounce');
			}			
		}
	}
	
	var tID, b = new Binder({
		window: {
			scroll: [
				function() {
					clearTimeout(tID);
					m.clearBounce();
					tID = setTimeout(function() {
						m.bounce($(this).scrollTop());
					}, 3000);
				}
			]
		}
	});

	return m;
});