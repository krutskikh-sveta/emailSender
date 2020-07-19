$(document).ready(function() {
    $("#btn").click(
		function(){
			sendAjaxForm();
			return false;
		}
	);
});

function sendAjaxForm() {
    $.ajax({
        url:     'https://ey2cfmkmak.execute-api.eu-central-1.amazonaws.com/sendEmail',
        type:    "POST",
        dataType: "html",
        data: $("#ajax_form").serialize(),
        success: function(response) {
        	$('#successAlert').toggleClass('hidden');
    	},
    	error: function(response) {
            $('#failAlert').toggleClass('hidden');
    	}
 	});
}
