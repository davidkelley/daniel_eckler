define(['jquery', 'module'], function($, module) {

	//load module config
	var config = module.config();

	//get default animation duration
	var defaultDuration = config.duration;

	//get default easing
	var defaultEasing = config.easing;

	//get class attribute
	var classes = $('html').attr('class');

	//animation support?
	var cssAnimations = classes.indexOf('cssanimations') > 0 ? true : false;

	return function(el, props, duration, easing) {

		//props to default?
		duration = duration ? duration : defaultDuration;
		easing = easing ? easing : defaultEasing;

		if (cssAnimations) {
			$(el).css(props);
		} else {
			$(el).stop().animate(props, duration, easing);
		}
	}
});