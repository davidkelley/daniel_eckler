define(['jquery', 'module', 'helpers/binder'], function($, module, Binder) {
	var config = module.config();
	var containers = $(config.selector);

	var m = {
		run: function() {},

		gotoNext: function(el) {
			var next = $(el).siblings('.frames').children('.active').next();
			this.goto(next);
		},

		goto: function(el) {

			//$ wrap
			el = $(el);

			var frame = el.parent();
			var current = $('.active', frame);

			if ( ! el.hasClass('active')) {

				if (el.nextAll('.active').length == 0) {
					current.removeClass('active');
					current.next().addClass('active');

				} else {
					current.prev().addClass('active');
					current.removeClass('active');
				}
			}

			var frames = frame.children();

			if ( ! $(frames).first().hasClass('active')) {
				$(frame).addClass('transitioned');
				$(frame).parent().addClass('transitioned');
			} else {
				$(frame).removeClass('transitioned');
				$(frame).parent().removeClass('transitioned');
			}

			frames.each(this.each);
		},

		each: function(i) {

			var frames = $(this).parent().children();
			var a;

			frames.each(function(i) {
				if ($(this).hasClass('active')) {
					a = i;
					return false;
				}
			});
			
			//var left = -(50 - (50 * a)) + 50 * i;
			var left = 50 * i + 50 - 50 * a;

			$(this).css({left:left + '%'});
		}
	};

	$(containers).each(function() {
		m.goto($(this).children('.active'));
	});

	/*var tID = null;

	var binds = {
		'.right.arrow': {
			mouseenter: [
				function() {
					clearTimeout(tID);
					$(this).siblings('.frames').addClass('tease');
				}
			],

			mouseleave: [
				function() {
					var that = this;
					tID = setTimeout(function() {
						$(that).siblings('.frames').removeClass('tease');
					}, 1000);
				}
			],

			click: [
				function() {
					var active = $(this).siblings('.frames').children('.active');
					m.goto(active.next());
				}
			]
		}
	};

	var binder = new Binder(binds);*/

	return m;
})