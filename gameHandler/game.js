$(document).ready(function(){

	$('.startGame input').on('click',game.start);

	$('.answers input').on('click',function (event) {

		game.advance($(this).val());

	});

});

var game = (function(){

	function updateConsole(  answers  ){

		var i = 0;

		$('.answers input').each(function(){

			$( this ).attr('value',answers[i]);

			i++;

		});

	};

	return{

		count: 0,

		current: 0,

		correct: 0,

		start: function(){

			quiz.feed();

			game.count = quiz.count;

			game.current = 0;

			game.correct = 0;

			quiz.showQuestion(game.current);

			updateConsole(quiz.currentProblem.answers);

			$('.startGame input').prop('value','Submit Answer');

		},

		advance: function(  guess  ){

			var result = quiz.showAnswer(  guess  );

			if (  result  ){

				game.correct++;
			
			}

			game.current++;

			quiz.showQuestion(game.current);

		},

		end: function(){}

	}

})();