$(document).ready(function() {
// Hello 2 :)
	var ind;

	var windowProp = {
		leftBorder: 0,
		topBorder: 0
	};

	windowProp.rightBorder = $(document).width();
	windowProp.bottomBorder = $(document).height();

	function CreateBox(box) {
		this.idbox = box.idbox;
		this.x = box.x;
		this.y = box.y;
		this.w = $(this.idbox).width();
		this.h = $(this.idbox).height();
		this.speed = box.speed;
	}

	CreateBox.prototype = {
		x1: function() {
			return this.x + this.w;
		},
		y1: function() {
			return this.y + this.h;
		}
	};

	var boxOne = {
		idBox: '#basic-person',
		x: 300,
		y: 500,
		dx: 0,
		dy: 0,
		w: $('#basic-person').width(),
		h: $('#basic-person').height(),
		x1: function() {
			return this.x + this.w;
		},
		y1: function() {
			return this.y + this.h;
		},
		speed: 10,
		contactCounter: 0
	};

	var boxBomb = {
		idBox: '#bomb',
		x: 700,
		y: 300,
		w: $('#bomb').width(),
		h: $('#bomb').height(),
		x1: function() {
			return this.x + this.w;
		},
		y1: function() {
			return this.y + this.h;
		}
	};

	$(boxOne.idBox).css("left", boxOne.x + "px");
	$(boxOne.idBox).css("top", boxOne.y + "px");

	$(boxBomb.idBox).css("left", boxBomb.x + "px");
	$(boxBomb.idBox).css("top", boxBomb.y + "px");

	window.onkeydown = moveBox;

	function moveBox(e) {
		// Если значок находится в движении, останавливаем его
		boxOne.dx = 0;
		boxOne.dy = 0;

		// Если нажата стрелка вверх, начинаем двигаться вверх
		if (e.keyCode == 38) {
			boxOne.dy = -1;
			drawBox();
		}

		// Если нажата стрелка вниз, начинаем двигаться вниз
		if (e.keyCode == 40) {
			boxOne.dy = 1;
			drawBox();
		}
		
		// Если нажата стрелка влево, начинаем двигаться влево
		if (e.keyCode == 37) {
			boxOne.dx = -1;
			drawBox();
		}

		// Если нажата стрелка вправо, начинаем двигаться вправо
		if (e.keyCode == 39) {
			boxOne.dx = 1;
			drawBox();
		}
	}


	// $('body').keydown(function(e) {
	//  switch(e.which) {
	//      case 37:
	//          boxOne.dx = -1;
	//          break;
	//      case 38:
	//          boxOne.dy = -1;
	//          break;
	//      case 39:
	//          boxOne.dx = 1;
	//          break;
	//      case 40:
	//          boxOne.dy = 1;
	//          break;
	//  }

	// });

	function drawBox() {
		if (boxOne.dx != 0 || boxOne.dy != 0) {

			var i = 0;

			function move() {

				i++;

				boxOne.x += boxOne.dx;
				boxOne.y += boxOne.dy;

				if (!((boxOne.x1() > 692) && (boxOne.x < 732) && (boxOne.y1() > 298) && (boxOne.y < 332))) {
						ind = 0;
					}


				if (((boxOne.x1() > boxBomb.x) && (boxOne.x < boxBomb.x1()) && (boxOne.y1() > boxBomb.y) && (boxOne.y < boxBomb.y1()))) {

					if (ind == 0) {
						boxOne.contactCounter++;
						ind = 1; 
						alert ('hello');
					}
					
				}

				if (checkForCollision()) {
					boxOne.x -= boxOne.dx;
					boxOne.y -= boxOne.dy;
					boxOne.dx = 0;
					boxOne.dy = 0;
				}
				
				$(boxOne.idBox).css("left", boxOne.x + "px");
				$(boxOne.idBox).css("top", boxOne.y + "px");
				$('#basic-person__counter').text(boxOne.contactCounter);

				if (i <= boxOne.speed) {
					var timer = setTimeout(move, 20);
				}

			}

			move();
			// var timer = setInterval(move, 10);
		}

	}

	function checkForCollision() {
		if ((boxOne.x == windowProp.leftBorder) || (boxOne.y == windowProp.topBorder) || (boxOne.x1() == windowProp.rightBorder) || (boxOne.y1() == windowProp.bottomBorder)) {

			return true;
		}

		if (((boxOne.x1() > boxBomb.x) && (boxOne.x < boxBomb.x1()) && (boxOne.y1() > boxBomb.y) && (boxOne.y < boxBomb.y1()))) {

			return true;
		}

		return false;
	}

	drawBox();

})();