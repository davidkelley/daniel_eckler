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
        },

        playground: {
            selector: '#piccsy-playground',
            links: [
                'http://www.piccsy.com/everything-design',
                'http://www.piccsy.com/everything-design',
                'http://www.piccsy.com/everything-design',
                'http://www.piccsy.com/history-of-art-100-words',
                'http://www.piccsy.com/history-of-art-100-words',
                'http://www.piccsy.com/1000-images-you-need-to-see-before-you-die',
                'http://www.piccsy.com/1000-images-you-need-to-see-before-you-die',
                'http://www.piccsy.com/1000-images-you-need-to-see-before-you-die',
                'http://www.piccsy.com/404ward',
                'http://www.piccsy.com/luvnotes'
            ]
        },

        jobs: {
            selector: '#rememberum',
            links: [
                'http://www.rememberum.com/steve-jobs-tribute',
                'http://www.rememberum.com/steve-jobs-tribute',
                'http://www.rememberum.com/steve-jobs-tribute',
                'http://www.rememberum.com/',
                'http://www.rememberum.com/',
                'http://www.rememberum.com/',
                'http://www.rememberum.com/',
                'http://www.rememberum.com/'
            ]
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
require(['jquery'], function($) {
    $(window).load(function() {

        $('.work').addClass('loaded');

        $('.frame img').each(function() {
            var img = $(this);
            var src = img.attr('src');
            var rel = img.attr('rel');

            if (src == "" || src === void 0) {
                img.attr('src', rel);
            }
        });
    });
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
        },

        window: {
            scroll: [
                function() {
                    var st = $(window).scrollTop();

                    $('.work').each(function() {
                        var top = $(this).offset().top;
                        var h = $(this).height();
                        var offset = h/6;

                        if (st >= top+offset && st < top+h) {
                            $(this).addClass('over');
                        } else {
                            $(this).removeClass('over');
                        }
                    });
                }
            ]
        }
    })
});

//load playground module
require(['playground', 'jobs']);

/**
 * Perform post-initialisation DOM manipulations
 */
if (typeof(_a) != "undefined") for (var i in _a) (function() {
	var ev = _a[i];
	var t = require([ev[0]],function(b) {
		b[ev[1]](ev[2]);
	});
}());