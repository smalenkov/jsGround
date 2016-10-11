$(document).ready(function() {
	var i = 0;

	$('#slide-box').click(function() {
		// play();
		_.delay(play, 400);

		function play() {
			if (i == 0) {
				$('#slide-box').animate({
					top: "0px"
					// left: "0px"
				}, 400, "easeOutBounce");

				i++;
			} else {
				$('#slide-box').animate({
					top: "-140px"
					// left: "-130px"
				}, 400, "easeOutDown");

				i = 0;
			};
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
		$("input[name='name']").val("");
		$("input[name='lastname']").val("");

	});

	var testObject = {
		onelement: "hello wold",
		sayoneelement: function() {
			alert(this.onelement);
		}
	
	};

	// $('.button_two').click(function() {
	// 	testObject.sayoneelement();
	// });

	var calc = {
		sum: function () {
			return (+this.num1) + (+this.num2);
		},
		proiz: function () {
			return this.num1*this.num2;
		},
		readValues: function () {
			this.num1 = $("input[name='num1']").val();
			this.num2 = $("input[name='num2']").val();
		}
	}

	
	$('.button-summ').click(function() {
		calc.readValues();
		$('.rezults').text(calc.sum());
	});

	$('.button-proiz').click(function() {
		calc.readValues();
		$('.rezults').text(calc.proiz());
	});

// Функция преобразования arguments в массив
	function sayHii() {
	  // вызов arr.slice() скопирует все элементы из this в новый массив
	  var args = [].slice.call(arguments);
	  var smallest = Math.max.apply(this, arguments);
	  alert(smallest);
	  alert( args.join(':') ); // args -- массив аргументов
	}

	$('.button_user').click(function() {
			sayHii(1,6,1,12,45,2,8,2,9,44);
		});

// Функция конструктор Users
	function User(name, lastname, sex, age) {
		this.name = name;
		this.lastname = lastname;
		this.sex = sex;
		this.age = age;
		this.infoUser = function() {
			alert(this.name + this.lastname + this.sex + this.age);
		};
	}

	var ivan = new User("Иван", "Петров", "Мужской", 24);
	var petr = new User("Петр", "Семенов", "Мужской", 23);

	$('.button_user').click(function() {
		ivan.infoUser();
	});

// Функция cсчетчик
	function makeCounter() {
	  var currentCount = 0;
	    
	  return function() {
	    currentCount++;
	    return currentCount;
	  };
	}

	var counter = makeCounter();


	$('.button_shetch').click(function() {
		alert(counter());
	});

// Прототип
	function Squar(num1, num2) {
		this.num1 = num1;
		this.num2 = num2;
	};

	Squar.prototype.proiz = function(c) {
		var rez = this.num1 * this.num2;
		if (rez < c) {
			return (rez);
		} else {
			return "Произведение больше 100!";
		};
	};

	$('.button_proto').click(function() {
		var oneSquar = new Squar(5, 5);
		alert (oneSquar.proiz(24)); 
	});

// Функция-конструктор сумматор
	function Summator() {
		this.sum = function(a, b) {
			return a + b;
		};
		this.run = function() {
			var a = +prompt('Число а');
			var b = +prompt('Число b');
			alert(this.sum(a, b));
		};
	}

// Объект размер блока
	var nextprew = {
		value: $('.schet').width(),
		prev: function() {
			this.value-=4;
			this.showvalue();
		},
		next: function() {
			this.value+=4;
			this.showvalue();
		},
		showvalue: function() {
			$('.schet').css("width", this.value+"px");
		}
	}

	$('.prev').click(function() {
		nextprew.prev();
	});

	$('.next').click(function() {
		nextprew.next();
	});

// Функция
	var bigobject = {
		one: 1111,
		two: {
			two_one: 21,
			two_two: 22	
		},
		three: function() {
			return this.two.two_one + this.two.two_two
		},
		four: function() {
			alert(this.three());
		}
	}

	$('.button_two').click(function() {
		bigobject.four();
	});

// КОД — МОДАЛЬНОЕ ОКНО
	var modal = {
		left: 0, 
		step: $('.modal_li').width(),
		li_height: $('.modal_li').height(),
		li_total: $('ul.modal_ul').children().length,
		wrapper_margin_top: function() {
			return wrapper_margin_top = '-' + this.li_height / 2 + 'px';
		},
		wrapper_margin_left: function() {
			return wrapper_margin_left = '-' + this.step / 2 + 'px';
		},
		ul_total: function() {
			return ultotal = this.step * this.li_total;
		},
		step_next: function() {
			var new_left = modal.left - this.step + "px";
			this.left = modal.left - this.step;
			return new_left;
		},
		step_prew: function() {
			var new_left = modal.left + this.step + "px";
			this.left = modal.left + this.step;
			return new_left;
		},
		next: function() {
			$('.modal_ul').animate(
			{
				left: this.step_next()
			}, 200, "easeOutDown");
		},
		prew: function() {
			$('.modal_ul').animate(
			{
				left: this.step_prew()
			}, 200, "easeOutDown");
		}
	}

	
	$('.modal_wrapper').css({
		'width' : modal.step,
		'height' : modal.li_height, 
		'margin-top' : modal.wrapper_margin_top(), 
		'margin-left' : modal.wrapper_margin_left()
	});

	$('.modal_ul').width(modal.ul_total());
	
	$('.modal_btn_next').click(function() {
		modal.next();
	});
	
	$('.modal_btn_prew').click(function() {
		modal.prew();
	});
	
	$('.modalbackgr').click(function() {
			$(this).css({
				'display' : 'none'
			});
			$('.modal_wrapper').css({
				'display' : 'none'
			});
			$('.modal_ul').css({
				'display' : 'none'
			});
	});

	$('.modal_button').click(function() {
			$('.modalbackgr').css({
				'display' : 'block'
			});
			$('.modal_wrapper').css({
				'display' : 'block'
			});
			$('.modal_ul').css({
				'display' : 'block'
			});
	});

	$('.modal_button').click(function() {
			$('.modal_ul').css({
				'display' : 'block'
			});
	});

// Конец кода для модального окна

	$('.elem').click(function() {
		$(this).toggleClass('select');
	});

// Метод в конструкторе 

	function User(name) {
		this.name = name;
		this.hello = function() {
			alert("Hello" + this.name);
		};
	}

	$('.button_three').click(function() {
		var ivan = new User('Иван');
		ivan.hello();
	});

})();