$(document).ready(function(){

	$('.newGame').on('click',game.start);

	$('.gameConsole').on('click','[value="Start Game"]',game.start);

	$('.gameConsole').on('click','.answers input',function(event){

		game.highlightAnswer(event.target);

	});

	$('.gameConsole').on('click','[value="Submit Answer"]',function () {

		if($('.highlighted').length){

			game.advance($('.highlighted').val());

		}

	});

	$('.gameConsole').on('click','[value="Next Question"]',function(){

		game.nextQuestion(  game.current  );

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

			$('.endGame').addClass('hide');

			quiz.feed();

			game.count = quiz.count;

			game.current = 0;

			game.correct = 0;

			$('.stats h4:first-of-type').text('Question ' + game.current + 1 + ' of ' + game.count);

			quiz.showQuestion(game.current);

			$('.answers').removeClass('hide');

			updateConsole(quiz.currentProblem.answers);

			$('.startGame input').prop('value','Submit Answer');

		},

		highlightAnswer: function(  answer  ){

			$('.highlighted').removeClass('highlighted');

			$(  answer  ).addClass('highlighted');

		},

		advance: function(  guess  ){

			var result = quiz.showAnswer(  guess  );

			$('.highlighted').removeClass('highlighted');

			if (  result  ){

				game.correct++;
			
			}

			game.current++;

			$('.stats:first-of-type').text('Question ' + game.current + ' of ' + game.count);

			$('.stats:last-of-type').text(100 * game.correct/game.current + '% Correct Answers');

			if (  game.current == game.count  ){

				game.end();

			} else {

				$('.startGame input').prop('value','Next Question');

				$('.answers').addClass('hide');

			}

		},

		nextQuestion: function(  currentQ  ){

			quiz.showQuestion(  currentQ  );

			$('[value="Next Question"]').prop('value','Submit Answer');

			$('.answers').removeClass('hide');

			updateConsole(quiz.currentProblem.answers);

		},

		end: function(){

			$('.endGame').removeClass('hide');

			$('.endGame p').text('Your Score was ' + 100 * game.correct/game.current + '%!  Nicely Done!');

		}

	}

})();