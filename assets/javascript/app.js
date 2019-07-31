$(document).ready(function () {

    var triviaGame = {
        questions: [{
            question: "What's the name of the episode that has the Trivia Game?",
            answer: "The One with the Embyros",
            choices: ["The One with the Contest", "The One with Ross's Thing", "The One Where They Switch Apartments", "The One with the Embyros"],
            video: ""
        }, {
            question: "How many times has Ross been divorced?",
            answer: "3",
            choices: ["1", "2", "3", "4"],
            video: "assets/videos/3Divorces.mp4"
        }, {
            question: "What doesn't Joey share?",
            answer: "Food",
            choices: ["Women", "Food", "Money", "Advice"],
            video: "assets/videos/joeyDoesntShareFood.mp4"
        }, {
            question: "How many long-stemmed roses did Ross send to Emily?",
            answer: "72",
            choices: ["72", "100", "50", "24"],
            video: ""
        }, {
            question: "Condoms are only how effective?",
            answer: "97%",
            choices: ["96%", "97%", "98%", "95%"],
            video: "assets/videos/condoms.mp4"
        }, {
            question: "What is Monica's apartment number?",
            answer: "20",
            choices: ["15", "18", "20", "12"],
            video: "assets/videos/apartment20.mp4"
        }, {
            question: "What is the name of Joey's stuffed penguin?",
            answer: "Hugsy",
            choices: ["Snuggles", "Hugsy", "Mr. Penguin", "Arty"],
            video: "assets/videos/hugsy.mp4"
        }, {
            question: "What is Chandler's middle name?",
            answer: "Muriel",
            choices: ["Marcel", "Michelle", "Millicent", "Muriel"],
            video: ""
        }, {
            question: "What did Joey name his barcalounger?",
            answer: "Rosita",
            choices: ["Rosita", "Rosa", "Rosie", "Rosalind"],
            video: "assets/videos/rosita.mp4"
        }, {
            question: "What was Chandler's job in the early seasons of the show?",
            answer: "IT Procurement Manager",
            choices: ["IT Procurement Manager", "Data Analyst", "Transponster", "Financial Analyst"],
            video: "assets/videos/transponster.mp4"
        }, {
            question: "Who pees on Monica's leg when she gets stung by a jellyfish?",
            answer: "Chandler",
            choices: ["Monica", "Joey", "Chandler", "Richard"],
            video: "assets/videos/jellyfish.mp4"
        }, {
            question: "What caused the fire in Phoebe and Rachel's apartment?",
            answer: "Rachel's hair straightener",
            choices: ["Phoebe's candles", "Phoebe's incense", "Rachel's hair dryer", "Rachel's hair straightener"],
            video: ""
        }, {
            question: "Who lives in the apartment below Monica's?",
            answer: "Mr. Heckles",
            choices: ["Mr. Heckles", "Mr. Annoying", "Mr. Creepy", "Mr. Chill"],
            video: ""
        }, {
            question: "What color is the couch in Central Perk?",
            answer: "Orange",
            choices: ["Green", "Orange", "Yellow", "Red"],
            video: ""
        }, {
            question: "Who sang the Friends theme?",
            answer: "The Rembrandts",
            choices: ["Fool's Garden", "Smash Mouth", "Sunrise Avenue", "The Rembrandts"],
            video: ""
        }, {
            question: "How many types of towels does Monica have?",
            answer: "11",
            choices: ["9", "10", "11", "12"],
            video: "assets/videos/monicasTowels.mp4"
        }, {
            question: "What is Danny Devito's stripper name?",
            answer: "Officer Goodbody",
            choices: ["Officer Goodbody", "Officer Sexy", "Officer Hunky", "Officer Sultry"],
            video: "assets/videos/officeGoodbody.mp4"
        }, {
            question: "What does Paul (Bruce Willis) call himself to build his confidence?",
            answer: "A neat guy",
            choices: ["A neat guy", "A cool guy", "A special guy", "A good guy"],
            video: "assets/videos/neatGuy.mp4"
        }, {
            question: "Which famous person does Phoebe believe is her grandfather?",
            answer: "Albert Einstein",
            choices: ["Thomas Edison", "Albert Einstein", "Nikola Tesla", "JP Morgan"],
            video: ""
        }, {
            question: "Where does David, Phoebe's boyfriend, move to?",
            answer: "Minsk",
            choices: ["Mumbai", "Minsk", "Moscow", "Manila"],
            video: ""
        }, {
            question: "In \"The One at the Beach\", how many pages is the letter Rachel writes Ross?",
            answer: "18, front and back",
            choices: ["15, front and back", "18, front and back", "12, front and back", "9, front and back"],
            video: "assets/videos/18Pages.mp4"
        }, {
            question: "Who says \"I gave you my Snack Pack!\"?",
            answer: "Rhonda",
            choices: ["Rhonda", "Brenda", "Donna", "Alisha"],
            video: "assets/videos/rhonda.mp4"
        }, {
            question: "What city is Chandler forced to move to when he falls asleep in a meeting?",
            answer: "Tulsa",
            choices: ["Tulsa", "Omaha", "St. Louis", "Wichita"],
            video: ""
        }, {
            question: "What is the name of the Barista at Central Perk who is in love with Rachel?",
            answer: "Gunther",
            choices: ["Trevor", "Tyler", "Gunther", "Gunner"],
            video: ""
        }, {
            question: "What is the color of the sweater that indicates who the father of Rachel's baby is?",
            answer: "Red",
            choices: ["Green", "Blue", "Brown", "Red"],
            video: ""
        }],
        correctAnswerVids: ["assets/videos/thatIsCorrect.mp4", "assets/videos/iKnewIt.mp4", "assets/videos/excited.mp4"],
        wrongAnswerVids: ["assets/videos/moreWrong.mp4", "assets/videos/youIdiot.mp4", "assets/videos/pivot.mp4", "assets/videos/dontBlameQuestions.mp4"],
        skippedQuestionVids: ["assets/videos/dontKnowAnything.mp4", "assets/videos/fellAsleep.mp4"],
        lightningRoundVid: "assets/videos/lightningRound.mp4",
        gameOverVid: "assets/videos/weAreOver.mp4",
        right: 0,
        wrong: 0,
        skipped: 0,
        counter: 0,
        timerRunning: false,
        timeLimit: 0,
        clicked: false,
        lightningRound: false,
        intervalId: null,
        timer: function () {
            if (triviaGame.timeLimit === 0) {
                $("#time").removeClass("hurry").addClass("timeUp");
                triviaGame.showAnswer();
            } else {
                if (triviaGame.timeLimit > 1) {
                    $("#time").text(triviaGame.timeLimit + " seconds");
                } else {
                    $("#time").text(triviaGame.timeLimit + " second");
                }
                if (triviaGame.timeLimit === 5 && !$("#time").hasClass("hurry")) {
                    $("#time").addClass("hurry");
                }
                triviaGame.timeLimit--;
            }
        },
        startTimer: function () {
            if (!triviaGame.timerRunning) {
                if ($("#time").hasClass("timeUp")) {
                    $("#time").removeClass("timeUp");
                }
                if ($("#time").hasClass("hurry")) {
                    $("#time").removeClass("hurry");
                }
                if (triviaGame.lightningRound) {
                    triviaGame.timeLimit = 6;
                    $("#time").text("7 seconds");
                    triviaGame.intervalId = setInterval(triviaGame.timer, 1000);
                    triviaGame.timerRunning = true;
                    triviaGame.test++;
                } else {
                    triviaGame.timeLimit = 14;
                    $("#time").text("15 seconds");
                    triviaGame.intervalId = setInterval(triviaGame.timer, 1000);
                    triviaGame.timerRunning = true;
                    triviaGame.test++;
                }
            }
        },
        stopTimer: function () {
            clearInterval(triviaGame.intervalId);
            triviaGame.timerRunning = false;
            triviaGame.test = 0;
        },
        shuffle: function (obj1) {
            var index = obj1.length;
            var random, temp1
            while (index) {
                random = Math.floor(Math.random() * index);
                index -= 1;
                temp1 = obj1[index];
                obj1[index] = obj1[random];
                obj1[random] = temp1;
            }
        },
        displayQuestion: function () {
            var clickCheck = triviaGame.clicked;
            var statsElem = $("#stats");
            var embedElem = $("<div id=\"embed\" class=\"embed-responsive embed-responsive-16by9 rounded\">");
            var videoElem = $("<video class=\"embed-responsive-item\" autoplay controls>");
            var sourceElem = $("<source type=\"video/mp4\">");
            if (triviaGame.counter === triviaGame.questions.length) {
                $("#right").text(triviaGame.right + "/" + triviaGame.questions.length);
                $("#wrong").text(triviaGame.wrong + "/" + triviaGame.questions.length);
                $("#skipped").text(triviaGame.skipped + "/" + triviaGame.questions.length);
                $(statsElem).css("display", "block");
                $("#game").css("display", "none");
                $("#start").css("display", "inline-block");
                $("#start").text("Play Again");
                $(sourceElem).attr("src", triviaGame.gameOverVid);
                $(videoElem).append(sourceElem);
                $(embedElem).append(videoElem);
                $(statsElem).prepend(embedElem);
                if ($(embedElem).css("max-width") === "50%") {
                    $(embedElem).css("max-width", "90%");
                }
                triviaGame.right = 0;
                triviaGame.wrong = 0;
                triviaGame.skipped = 0;
                triviaGame.counter = 0;
                triviaGame.lightningRound = false;
                $(".lightningRound").remove();
            } else {
                if ($("#start").css("display") === "inline-block" && triviaGame.counter === 0) {
                    triviaGame.shuffle(triviaGame.questions);
                    $("#start").css("display", "none");
                    $(statsElem).css("display", "none");
                    $("#game").css("display", "block");
                    $("#stats #embed").remove();
                }
                if ($("#questions").css("display") === "none") {
                    $("#questions").css("display", "block");
                }
                triviaGame.newQuestion();
            }
        },
        newQuestion: function () {
            let newChoices = triviaGame.questions[triviaGame.counter].choices;
            triviaGame.shuffle(newChoices);
            $("#answers").empty();
            $("#question").text(triviaGame.questions[triviaGame.counter].question);
            $(newChoices).each(function (index, value) {
                var newSelection = $("<h2>");
                $(newSelection).addClass("choice rounded py-1");
                $(newSelection).attr("data-answer", value);
                $(newSelection).css("cursor", "pointer");
                $(newSelection).text(value);
                $(newSelection).on("click", {
                    clickCheck: true
                }, triviaGame.showAnswer);
                $("#answers").append(newSelection);
            });
            triviaGame.startTimer();
            triviaGame.counter++;
            if (triviaGame.questions.length - triviaGame.counter === 5) {
                triviaGame.lightningRound = true;
            }
        },
        lightningRoundFuncCheck: function () {
            if (triviaGame.questions.length - triviaGame.counter === 5) {
                setTimeout(triviaGame.lightningRoundFunc, 8000);
                setTimeout(triviaGame.displayQuestion, 20000);
            } else {
                setTimeout(triviaGame.displayQuestion, 8000);
            }
        },
        lightningRoundFunc: function () {
            if (triviaGame.lightningRound && triviaGame.questions.length - triviaGame.counter === 5) {
                var answersElem = $("#answers");
                var embedElem = $("<div id=\"embed\" class=\"embed-responsive embed-responsive-16by9 rounded\">");
                var videoElem = $("<video class=\"embed-responsive-item\" autoplay controls>");
                var sourceElem = $("<source type=\"video/mp4\">");
                var newH2 = $("<h2 class=\"mb-3\">");
                $(newH2).text("The Lightning Round");
                $(newH2).attr("class", "lightningRound friends rounded mx-auto mb-3 py-2");
                $(answersElem).empty();
                $(sourceElem).attr("src", triviaGame.lightningRoundVid);
                $(videoElem).append(sourceElem);
                $(embedElem).append(videoElem);
                $(answersElem).append(embedElem);
                triviaGame.increaseEmbedElemWidth();
                $("#questions").prepend(newH2);
                $("#questions").css("display", "none");
            }
        },
        showAnswer: function (clickCheck) {
            var newH2 = $("<h2 class=\"mb-3\">");
            var newH3 = $("<h3>");
            var answersElem = $("#answers");
            var embedElem = $("<div id=\"embed\" class=\"embed-responsive embed-responsive-16by9 rounded\">");
            var videoElem = $("<video class=\"embed-responsive-item\" autoplay controls>");
            var sourceElem = $("<source type=\"video/mp4\">");
            if (triviaGame.questions[triviaGame.counter - 1].answer === $(this).attr("data-answer")) {
                triviaGame.stopTimer();
                $(answersElem).empty();
                $(newH2).addClass("green");
                $(newH2).text("You couldn't BE any more correct!");
                $(answersElem).append(newH2);
                if (triviaGame.questions[triviaGame.counter - 1].video !== "") {
                    $(sourceElem).attr("src", triviaGame.questions[triviaGame.counter - 1].video);
                } else {
                    triviaGame.shuffle(triviaGame.correctAnswerVids);
                    $(sourceElem).attr("src", triviaGame.correctAnswerVids[0]);
                }
                $(videoElem).append(sourceElem);
                $(embedElem).append(videoElem);
                $(answersElem).append(embedElem);
                triviaGame.right++;
                triviaGame.lightningRoundFuncCheck();
            } else if (clickCheck) {
                triviaGame.stopTimer();
                $(answersElem).empty();
                $(newH2).text("Oops, it looks like you needed to PIVOT your answer!");
                $(newH3).addClass("friends red mb-3");
                $(newH3).text("The correct answer was: " + triviaGame.questions[triviaGame.counter - 1].answer);
                triviaGame.shuffle(triviaGame.wrongAnswerVids);
                $(sourceElem).attr("src", triviaGame.wrongAnswerVids[0]);
                $(videoElem).append(sourceElem);
                $(embedElem).append(videoElem);
                $(answersElem).append(newH2);
                $(answersElem).append(newH3);
                $(answersElem).append(embedElem);
                triviaGame.wrong++;
                triviaGame.lightningRoundFuncCheck();
            } else {
                $("#time").text("Time's up!");
                triviaGame.stopTimer();
                $(answersElem).empty();
                $(newH2).text("I realize it's probably a moo point now, but:");
                $(newH3).addClass("friends red mb-3");
                $(newH3).text("The correct answer was: " + triviaGame.questions[triviaGame.counter - 1].answer);
                triviaGame.shuffle(triviaGame.skippedQuestionVids);
                $(sourceElem).attr("src", triviaGame.skippedQuestionVids[0]);
                $(videoElem).append(sourceElem);
                $(embedElem).append(videoElem);
                $(answersElem).append(newH2);
                $(answersElem).append(newH3);
                $(answersElem).append(embedElem);
                triviaGame.skipped++;
                triviaGame.lightningRoundFuncCheck();
            }
        },
        increaseEmbedElemWidth: function () {
            if ($("#embed").css("max-width") === "50%") {
                $("#embed").css("max-width", "90%");
            }
        },
    }

    $("#start").on("click", triviaGame.displayQuestion);

})