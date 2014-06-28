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

		},

		advance: function(){},

		end: function(){}

	}

})();