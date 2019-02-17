$(document).ready(function(){

	// Convert all the links with the progress-button class to
	// actual buttons with progress meters.
	// You need to call this function once the page is loaded.
	// If you add buttons later, you will need to call the function only for them.

	$('.progress-button').progressInitialize();

	

	// Custom progress handling

	var controlButton = $('#controlButton');

	$('.ph1').click(function(){

		// Set the progress meter to the specified percentage

		controlButton.progressSet(10);
	});

	$('.ph3').click(function(){
		controlButton.progressSet(30);
	});

	$('.ph6').click(function(){

		controlButton.progressSet(60);
	});

});

// The progress meter functionality is available as a series of plugins.
// You can put this code in a separate file if you want to keep things tidy.

(function($){

	// Creating a number of jQuery plugins that you can use to
	// initialize and control the progress meters.

	$.fn.progressInitialize = function(){

		// This function creates the necessary markup for the progress meter
		// and sets up a few event listeners.


		// Loop through all the buttons:

		return this.each(function(){

			var button = $(this),
				progress = 0;

			// Extract the data attributes into the options object.
			// If they are missing, they will receive default values.

			var options = $.extend({
				type:'background-horizontal'
			}, button.data());

			
			var bar = $('<span class="tz-bar ' + options.type + '">').appendTo(button);


			// The progress event tells the button to update the progress bar
			button.on('progress', function(e, val, absolute, finish){

				if(!button.hasClass('in-progress')){

					// This is the first progress event for the button (or the
					// first after it has finished in a previous run). Re-initialize
					// the progress and remove some classes that may be left.

					bar.show();
					progress = 0;
					button.removeClass('finished').addClass('in-progress')
				}

				// val, absolute and finish are event data passed by the progressIncrement
				// and progressSet methods that you can see near the end of this file.

				if(absolute){
					progress = val;
				}
				else{
					progress += val;
				}

				
				setProgress(progress);
			});

			//required func
			function setProgress(percentage){
				bar.filter('.background-horizontal,.background-bar').width(percentage+'%');
				bar.filter('.background-vertical').height(percentage+'%');
			}

		});

	};

	$.fn.progressSet = function(val){
		val = val || 10;

		var finish = false;
		if(val >= 100){
			finish = true;
		}

		return this.first().trigger('progress',[val, true, finish]);
	};
	
})(jQuery);
