/*!jQuery Circular CountDown*/
/**
 * Downward compatible
 *
 * Version: 1.0.0 (26/04/2013)
 * Requires: jQuery v1.7+
 *
 * Copyright (c) 2013 Nikhil Navadiya
 *
 * Thanks to http://www.javascriptkit.com/
 */
(function($){
	$.fn.ccountdown = function(seconds){
		var $this = this;
		var _currSeconds = seconds;
		var timeOut;
		_changeTime(); // calling function first time so that it wll setup remaining time
		function _changeTime() {
			var el = $($this);
			var $ss = el.find(".second");
			$ss.val(_currSeconds).trigger("change");
			if(_currSeconds <= 0) {
				clearInterval(timeOut);
			}
			_currSeconds-=1;
		}
		timeOut = setInterval(_changeTime ,1000);
	};
})(jQuery);

$(function() {
	$(".knob").knob({
		/*change : function (value) {
		 //console.log("change : " + value);
		 },
		 release : function (value) {
		 console.log("release : " + value);
		 },
		 cancel : function () {
		 console.log("cancel : " + this.value);
		 },*/
		draw : function () {

			// "tron" case
			if(this.$.data('skin') == 'tron') {

				var a = this.angle(this.cv)  // Angle
					, sa = this.startAngle          // Previous start angle
					, sat = this.startAngle         // Start angle
					, ea                            // Previous end angle
					, eat = sat + a                 // End angle
					, r = true;

				this.g.lineWidth = this.lineWidth;

				this.o.cursor
				&& (sat = eat - 0.3)
				&& (eat = eat + 0.3);

				if (this.o.displayPrevious) {
					ea = this.startAngle + this.angle(this.value);
					this.o.cursor
					&& (sa = ea + 0.3)
					&& (ea = ea - 0.3);
					this.g.beginPath();
					this.g.strokeStyle = this.previousColor;
					this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sa, ea, false);
					this.g.stroke();
				}

				this.g.beginPath();
				this.g.strokeStyle = r ? this.o.fgColor : this.fgColor ;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth, sat, eat, false);
				this.g.stroke();

				this.g.lineWidth = 2;
				this.g.beginPath();
				this.g.strokeStyle = this.o.fgColor;
				this.g.arc(this.xy, this.xy, this.radius - this.lineWidth + 1 + this.lineWidth * 2 / 3, 0, 2 * Math.PI, false);
				this.g.stroke();

				return false;
			}
		}
	});
});