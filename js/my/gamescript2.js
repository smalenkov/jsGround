$(document).ready(function() {

	var windowProp = {
		leftBorder: 0,
		topBorder: 0,
		rightBorder: $(document).width(),
		bottomBorder: $(document).height()
	};

	function Box(prop) {
		this.idBox = prop.idBox;
		this.leftPosition = prop.leftPosition;
		this.topPosition = prop.topPosition;
		this.dleftPosition = 0;
		this.dtopPosition = 0;
		this.w = $(this.idBox).width();
		this.h = $(this.idBox).height();
		this.speed = prop.speed;
		this.setPosition();
	};

	Box.prototype.contactCondition = {};

	Box.prototype.contactCondition.topBorderContact = function(o) {
		if (!((o.rightPosition >= boxTwo.leftPosition) && (o.leftPosition <= boxTwo.rightPosition) && (o.bottomPosition >= boxTwo.topPosition))) {
			return true;
		}	
	};

	Box.prototype.contactCondition.rightBorderContact = function(o) {
		if (!((o.leftPosition <= boxTwo.rightPosition) && (o.bottomPosition >= boxTwo.topPosition) && (o.topPosition <= boxTwo.bottomPosition))) {
			return true;
		}
	};

	Box.prototype.contactCondition.bottomBorderContact = function(o) {
		if (!((o.rightPosition >= boxTwo.leftPosition) && (o.leftPosition <= boxTwo.rightPosition) && (o.topPosition <= boxTwo.bottomPosition))) {
			return true;
		}
	};

	Box.prototype.contactCondition.leftBorderContact = function(o) {
		if (!((o.rightPosition >= boxTwo.leftPosition) && (o.bottomPosition >= boxTwo.topPosition) && (o.topPosition <= boxTwo.bottomPosition))) {
			return true;
		}
	};

	// function() {
	// 		return !((this.rightPosition >= boxTwo.leftPosition) && (this.leftPosition <= boxTwo.rightPosition) && (this.bottomPosition >= boxTwo.topPosition) && (this.topPosition <= boxTwo.bottomPosition));

	Box.prototype.moveLeft = function() {
		if (checkForCollision()) {
			this.dtopPosition = 0;
			this.dleftPosition = -this.speed;
		} else {
			this.dleftPosition = this.speed;
		};
		this.setPosition();
	};

	Box.prototype.moveTop = function() {
		if (checkForCollision()) {
			this.dleftPosition = 0;
			this.dtopPosition = -this.speed;
		} else {
			this.dtopPosition = 0;
		};
		this.setPosition();
	};

	Box.prototype.moveRight = function() {
		if (checkForCollision()) {
			this.dtopPosition = 0;
			this.dleftPosition = this.speed;
		} else {
			this.dleftPosition = 0;
		};
		this.setPosition();
	};

	Box.prototype.moveDown = function() {
		if (checkForCollision()) {
			this.dleftPosition = 0;
			this.dtopPosition = this.speed;
		} else {
			this.dtopPosition = 0;
		};
		this.setPosition();
	};

	Box.prototype.setPosition = function() {
		if (this.dleftPosition != 0 || this.dtopPosition != 0) {
		this.leftPosition += this.dleftPosition;
		this.topPosition += this.dtopPosition;
		this.rightPosition = (this.leftPosition + this.w);
		this.bottomPosition = (this.topPosition + this.h);
		$(this.idBox).css("left", this.leftPosition+"px");
		$(this.idBox).css("top", this.topPosition+"px");
		$(this.idBox).html(this.leftPosition+'<br>'+this.topPosition+'<br>'+this.rightPosition+'<br>'+this.bottomPosition);
		};
	};

	// Свойства фигуры boxOne
	var boxOneProp = {
		idBox: '#basic_person',
		leftPosition: 300,
		topPosition: 300,
		speed: 8
	};

	// Указываем координаты фигуры boxOne
	var boxOne = new Box(boxOneProp);

	
	// Свойства фигуры boxTwo
	var boxTwoProp = {
		idBox: '#bomb',
		leftPosition: 390,
		topPosition: 600,
		speed: false
	};

	// Указываем координаты фигуры boxTwo
	var boxTwo = new Box(boxTwoProp);

	
	// Свойства фигуры boxThree
	var boxThreeProp = {
		idBox: '#slave_person',
		leftPosition: 150,
		topPosition: 150,
		speed: 10
	};

	// Указываем координаты фигуры boxThree
	var boxThree = new Box(boxThreeProp);


	var boxFourProp = {
		idBox: '#bomb2',
		leftPosition: 500,
		topPosition: 182,
		speed: false
	};

	// Указываем координаты фигуры boxTwo
	var boxFour = new Box(boxFourProp);

	function checkForCollision() {
		if (boxOne.speed) {
			if (((boxOne.leftPosition - boxOne.speed) > windowProp.leftBorder) && ((boxOne.topPosition - boxOne.speed) > windowProp.topBorder) && ((boxOne.rightPosition + boxOne.speed) < windowProp.rightBorder) && ((boxOne.bottomPosition + boxOne.speed) < windowProp.bottomBorder)) {
				return true;
			};
			return false; 
		};
		
	};

	$('body').keydown(function(e) {
		switch(e.which) {
			case 37:
				boxOne.moveLeft();
				break;
			case 38:
				boxOne.moveTop();
				break;
			case 39:
				boxOne.moveRight();
				break;
			case 40:
				boxOne.moveDown();
				break;
		}

	
	});


})();