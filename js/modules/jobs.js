define(['jquery', 'helpers/binder', 'module'], function($, Binder, module) {

	var selector = module.config().selector;
	var links = module.config().links;
	var link = $(selector + ' .launch.visit');
	var frames = $(selector + ' .frames .frame');

	var m = {
		toggleLink: function() {

			var n;

			frames.each(function(i) {
				if ($(this).hasClass('active')) {
					n = i;
					return false;
				}
			});

			link.attr('href', links[n]);
		}
	};

	var binds = {};

	binds[selector] = {
		click: [
			function(e) {
				setTimeout(function() {
					m.toggleLink();	
				}, 1000);
			}
		]
	};

	var binder = new Binder(binds);

	return m;
});