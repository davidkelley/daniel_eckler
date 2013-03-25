define(['jquery'],

function($) {	
	return function (e, el) {
		
		var c;

		if (typeof(e) == "string") {
			c = e;
		} else {
			var c = $(el).data('action');
		}

		c = c.split(',');
		
		for (var i in c) {
			(function() {
				var x = c[i].split('/');
				
				require([x[0]],function(a) {
					a[x[1]](el, e);
				});
				
			}());
		}
	};
});
