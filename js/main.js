jQuery.noConflict();
(function( $ ) {
	$(function() {
	  
	function initToggle() {
		if( $('body').hasClass('admin-bar') && !$('body').hasClass('wp-admin') ) {
			$('html').attr('style', 'margin-top: 0 !important;');
			$('#wpadminbar').attr('style', 'display: none !important;');
			$('body').prepend('<div id="admin-toggle" style="cursor: pointer; z-index: 99999999999 !important; width: 10px; height: 10px; position: fixed; left: 0; top: 0; background-color: #333;"><i style="color: white !important; width: 12px; font-size: 10px; margin-left: -1px; top: 0 !important; position: absolute !important;" class="admin-toggle-plus fa fa-plus"></i></div>');
			
			$('#admin-toggle').click(function(){
				$(this).toggleClass('open');
				opnCls();
			});
			function opnCls() {
				if( $('#admin-toggle').hasClass('open') ) {
					$('#wpadminbar').attr('style', 'display: fixed !important;');
					$('html').attr('style', 'margin-top: 32px !important;');
					$('.admin-toggle-plus').attr('style', 'color: white !important; width: 12px; font-size: 10px; margin-left: -1px; height: 2px; overflow: hidden; margin-top: 4px; line-height: 0.3; top: 0 !important; position: absolute !important;');
			} else {
				$('html').attr('style', 'margin-top: 0 !important;');
				$('#wpadminbar').attr('style', 'display: none !important;');
				$('.admin-toggle-plus').attr('style', 'color: white !important; width: 12px; font-size: 10px; margin-left: -1px; top: 0 !important; position: absolute !important;');
			}
			}
		}
	}
	setTimeout(initToggle, 100);
	
	});
})(jQuery);