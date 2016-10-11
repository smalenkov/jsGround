$(document).ready(function() {
	var i = 0;

	$('#slide-box').click(function play() {

		if (i == 0) {
			$(this).animate({
				top: "0px",
				// left: "0px"
			}, 400);

			i++;
		} else {
			$(this).animate({
				top: "-140px",
				// left: "-130px"
			}, 400);

			i = 0;
		};

	});

	$('.button').click(function() {
		$('#loading').show();
		$.get(
			"/modules/homepage.php", {
				name: $("input[name='name']").val(),
				lastname: $("input[name='lastname']").val()
			},
			function(data) {
				$('.person-box').remove();
				$('.container').append(data);
				$('#loading').hide();
			});

	});

});