$(document).ready(function(){
	// HTML markup implementation, overlap mode
	$( '#menu' ).multilevelpushmenu({
		containersToPush: [$( '#pushobj' )],
                hideUL: false,
                overlapWidth: 100
	});
});