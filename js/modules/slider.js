define(['jquery', 'module', 'helpers/binder'], function($, module, Binder) {
	var config = module.config();

	var containers = $(config.selector);

	var m = {
		run: function() {},

		gotoNext: function(el) {
			var next = $(el).siblings('.frames').children('.active').next();
			this.goto(next);
		},

		goto: function(el, force) {

			if (document.width <= 560) return;

			//$ wrap
			el = $(el);

			var that = this;

			var frame = el.parent();
			var current = $('.active', frame);

			if ( ! el.hasClass('active') || ( force && el.hasClass('active') && el.hasClass('home')) ) {

				if (el.nextAll('.active').length == 0) {
					current.next().addClass('active');
				} else {
					current.prev().addClass('active');
				}

				current.removeClass('active');//.removeAttr('style');
			} 

			var frames = frame.children();

			if ( ! $(frames).first().hasClass('active')) {
				$(frame).addClass('transitioned').removeClass('first tease');
				$(frame).parent().addClass('transitioned');
			} else {
				$(frame).removeClass('transitioned').addClass('first');;
				$(frame).parent().removeClass('transitioned');
			}

			var n;

			frames.each(function(i) {
				if ($(this).hasClass('active')) {
					n = i;
					return false;
				}
			});

			frames.each(function(i) {
				if ( ! $(this).hasClass('home')) {
					if (i < n) {
						that.adjust(this, 1.25);
					} else if (i == n) {
						that.adjust(this, 2);
					} else {
						that.adjust(this, 5);
					}
				}

				var left = 50 * i + 50 - 50 * n;
				$(this).css({left:left + '%'});
			});
		},

		adjust: function(el, m) {
			var w = $('img', el).width();
			var h = $('img', el).height();

			//fallback for unloaded images
			h = h > 0 ? h : 600;

			$(el).css({marginLeft:-Math.floor(w / m), marginTop:-Math.floor(h / 2)});
		},
	};

	$(containers).each(function() {
		m.goto($(this).children('.active'), false);
	});

	var tIDl = null, tIDe = null;

	var binds = {
		window: {
			scroll: [
				function() {
					var st = $(window).scrollTop();

					$(containers).each(function() {
						if (st > $(this).offset().top + $(this).height()) {
							m.goto($(this).children().first(), false);
						}
					});
				}
			]
		},

		'.right.arrow': {
			mouseenter: [
				function() {
					clearTimeout(tIDl);
					var that = this;
					tIDe = setTimeout(function() {
						$(that).siblings('.frames').addClass('tease');
					}, 100);
					//$(this).siblings('.frames').addClass('tease');
				}
			],

			mouseleave: [
				function() {
					clearTimeout(tIDe);
					var that = this;
					tIDl = setTimeout(function() {
						$(that).siblings('.frames').removeClass('tease');
					}, 100);
				}
			]
		}
	};

	var binder = new Binder(binds);

	return m;
})