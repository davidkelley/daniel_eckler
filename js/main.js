(function() {
    var method;
    var noop = function () {};
    var methods = [
        'assert', 'clear', 'count', 'debug', 'dir', 'dirxml', 'error',
        'exception', 'group', 'groupCollapsed', 'groupEnd', 'info', 'log',
        'markTimeline', 'profile', 'profileEnd', 'table', 'time', 'timeEnd',
        'timeStamp', 'trace', 'warn'
    ];
    var length = methods.length;
    var console = (window.console = window.console || {});

    while (length--) {
        method = methods[length];

        // Only stub undefined methods.
        if (!console[method]) {
            console[method] = noop;
        }
    }
}());

/**
 * Configure RequireJS
 */
requirejs.config({
	
    baseUrl: 'js/modules',
    
    /**
     * Module variables
     */
    config: {
        slider: {
            selector: '.frames'
        }
	},
    
    shim: {

		'jquery': {
			exports: '$',
			init: function($)
			{
				return this.$.noConflict();
			}
		},
		
		'components/modernizr': {
			exports: 'Modernizr'
		}
	},

    paths: {
    	jquery : 'https://ajax.googleapis.com/ajax/libs/jquery/1.9.1/jquery.min',
        components: '../components',
        helpers: '../helpers',
    }
});

//init modernizr
require(['components/modernizr']);

//init loading module
require(['loader', 'jquery'], function(Loader, $) {
    var loaders = [];
	$('.work').each(function() { loaders.push(new Loader(this)); });
});

require(['helpers/binder','jquery', 'helpers/handler'], function(Binder, $, handler) {
    new Binder({
        '[data-event="click"]': {
            click: [ function(e) { handler(e, this); } ],
        },
        '.slide-to': {
            click: [
                function(e) {
                    e.preventDefault();
                    var href = $(this).attr('href').slice(1);
                    var top = $('a[name="'+href+'"]').offset().top;
                    $('html,body').animate({scrollTop: top}, 1500);
                }
            ]
        }
    })
});

/**
 * Perform post-initialisation DOM manipulations
 */
if (typeof(_a) != "undefined") for (var i in _a) (function() {
	var ev = _a[i];
	var t = require([ev[0]],function(b) {
		b[ev[1]](ev[2]);
	});
}());