define(['jquery'], function($) {

	//percentage loaded
	var Loader = function Loader(container, complete) {

		if (container === void 0) throw new Exception("Loader needs container element");
		this.loaded = 0;
		this.container = container;
		this.complete = complete;
		this.imgs = $('img', container);

		this.check();

		(function() {
			var tags = container.getElementsByTagName('*');

			for (var i in tags) {
				var el = tags[i];

				if (this.hasBackground(el)) {
					var img = new Image();
					//remove url(...);
					var src = $(el).css('backgroundImage').replace(/^url\(|\)$/g, '');
					img.src = src;
					this.imgs.push(img);
				}
			}
		}).call(this);

		//loop through elements and append load function
		var that = this;

		//ensure loading timeout does not occur
		this.timeoutID = setTimeout(function() {
			//override!
			try { 
				if (that.loaded < 100) {
					console.log('timed out...');
					that.increment(100); 
				}
			} catch(e) {};
		},5000);

		//images found?
		if (this.imgs.length > 0) {
			//determine percentile for each image
			var percentile = 100/this.imgs.length;

			[].forEach.call(this.imgs, function(el) {
				if (el.complete && (typeof el.naturalWidth == "number" && el.naturalWidth > 0)) {
					that.increment(percentile);
				} else {
					el.onload = function() {
						that.increment(percentile);
					};
				}
			});
		} else {
			//no images found!
			this.increment(100);
		}
		
	};

	Loader.prototype.check = function() {
		if (this.loaded < 100) {
			$(this.container).addClass('loading');
		} else {
			$(this.container).removeClass('loading');
			$(this.container).addClass('loaded');

			if (typeof(this.complete) == "function") {
				this.complete.call(this);
			}
		}
	};

	Loader.prototype.increment = function(val) {
		if (this.loaded + val > this.loaded) {
			this.loaded += val;
			this.adjust();
			this.check();
		}
	};

	Loader.prototype.adjust = function() {
		$('.percentage', this.container).width(this.loaded+'%');
	}

	//determine if element has a background style
	Loader.prototype.hasBackground = function(el) {
		if (el.currentStyle) {
			if (el.currentStyle['backgroundImage'] !== 'none') {
				return true;
			}	
		} else if (window.getComputedStyle) {
			if (typeof el === "object") {
				var style = document.defaultView.getComputedStyle(el, null);
				if (style && style.getPropertyValue('background-image') !== 'none') {
					return true;
				}
			}
		}

		return false;
	};
	

	return Loader;

});