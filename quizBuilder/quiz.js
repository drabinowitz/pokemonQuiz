var quiz = (function(){

	var problems = [];

	var questionFeed = [

		[

			'quizBuilder/images/pikachuOutline.png',

			'quizBuilder/images/bulbasaurOutline.png',

			'quizBuilder/images/kinglerOutline.png',

			'quizBuilder/images/koffingOutline.png'

		],

		[

			[  'Raichu','Jigglypuff','Pikachu','Charmander'  ],

			[  'Bulbasaur','Squirtle','Jigglypuff','Pidgey'  ],

			[  'Seal','Lapras','Geodude','Kingler'  ],

			[  'Koffing','Raticate','Ekans','Magmar'  ]

		],

		[

			[  'Pikachu','quizBuilder/images/pikachu.png'  ],

			[  'Bulbasaur','quizBuilder/images/bulbasaur.png'  ],

			[  'Kingler','quizBuilder/images/kingler.png'  ],

			[  'Koffing','quizBuilder/images/koffing.png'  ]

		]

	];

	return{

		count:0,

		problem: function (  question,answers,correctAnswer_  ){

			this.question = question;

			this.answers = answers;

			var correctAnswer = correctAnswer_[0];

			var correctDisplay = correctAnswer_[1];

			this.isCorrectAnswer = function(  answer  ){

				return [  answer == correctAnswer ? true : false,  correctDisplay,  correctAnswer  ];

			}

		},

		feed: function (  ){

			problems = [];

			quiz.count = 0;

			for (  var i = 0; i < questionFeed[0].length; i++  ){

				problems.push(  new quiz.problem(  questionFeed[0][i], questionFeed[1][i], questionFeed[2][i]  )  );

				quiz.count++;

			}

		},

		currentProblem: undefined,

		getProblem: function (  currentQ  ){

			return problems[  currentQ  ];

		},

		showQuestion: function(  currentQ  ){

			if (  $('.pokemon').hasClass('background')  ){

				$('.pokemon').removeClass('background')

				  .find('h2')

				    .text("Guess This Pokemon!")

				  .siblings('.questionBody')

				    .append($('<img>').attr('src',''))

				    .append($('<img>').attr('src',''));

			}

			quiz.currentProblem = quiz.getProblem(  currentQ  );

			$('.pokemon img:first-of-type').attr('src',quiz.currentProblem.question);

			$('.pokemon img:last-of-type').attr('src','quizBuilder/images/questionMark.png');

			$('.pokemon h2').text('Guess this Pokemon!');

		},

		showAnswer: function(  guess  ){

			var handler = quiz.currentProblem.isCorrectAnswer( guess )

			$('.pokemon img:first-of-type').attr('src',handler[1]);

			$('.pokemon h2').text('It was ' + handler[2]);

			if (  handler[0]  ){

				$('.pokemon img:last-of-type').attr('src','quizBuilder/images/checkMark.png');

				return true;				

			} else {

				$('.pokemon img:last-of-type').attr('src','quizBuilder/images/xMark.png');

				return false;

			}			

		}

	};

})();