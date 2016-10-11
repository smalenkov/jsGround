$(document).ready(function() {

	var getPersonPosition = $('#basic_person').position();
	var getBombPosition = $('#bomb').position();

	var bomb = {
		leftPosition: getBombPosition.left,
		topPosition: getBombPosition.top,
		rightPosition: (this.leftPosition + 30),
		bottomPosition: (this.topPosition + 30),
		alertPosition: function() {
			return ('Left: ' + this.leftPosition.toString() + 
				'\n' +  'Top: ' + this.topPosition.toString());
		}
	};

	var person = {
		leftPosition: getPersonPosition.left,
		topPosition: getPersonPosition.top,
		condition: true,
		contactCondition: function() {
			return !((this.leftPosition >= 330) && (this.leftPosition <= 420) && (this.topPosition >= 540) && (this.topPosition <= 630));
		},
		alertPosition: function() {
			return ('Left: ' + this.leftPosition.toString() + 
				'\n' +  'Top: ' + this.topPosition.toString());
		},
		moveLeft: function() {
			if ((this.leftPosition > 0) && this.contactCondition()) {
				this.leftPosition-=1;
			};
			this.setPosition();
		},
		moveRight: function() {
			if (this.contactCondition()) {
			this.leftPosition+=1;
		};
			this.setPosition();
		},
		moveTop: function() {
			if ((this.topPosition > 0) && this.contactCondition()) {
				this.topPosition-=1;
			};
			this.setPosition();
		},
		moveDown: function() {
			if (this.contactCondition()) {
			this.topPosition+=1;
			};
			this.setPosition();
		},
		setPosition: function() {
			$('#basic_person').css("left", this.leftPosition+"px");
			$('#basic_person').css("top", this.topPosition+"px");
			this.printPosition();
		},
		printPosition: function() {
			$('div.position_info_box').remove();
			$('body').before("<div class='position_info_box'>" + person.alertPosition() + "</div>");
		}
	};

	$('#basic_person').click(function() {
		$('div.position_info_box').remove();
		$('body').before("<div class='position_info_box'>" + person.alertPosition() + "</div>");
	});

	$('#bomb').click(function() {
		alert (person.contactCondition());
	});

	$('body').keydown(function(e) {
		if (e.which == 27) {
			$('div.position_info_box').remove();
		};
	});


	$('body').keydown(function(e) {
		switch(e.which) {
			case 37:
				person.moveLeft();
				break;
			case 38:
				person.moveTop();
				break;
			case 39:
				person.moveRight();
				break;
			case 40:
				person.moveDown();
				break;
		}

	
	});


})();