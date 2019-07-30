$(document).ready(function () {

    var triviaGame = {
        questions: {
            1: "What's the name of the episode that has the Trivia Game?",
            2: "How many times has Ross been divorced?",
            3: "What doesn't Joey share?",
            4: "How many long-stemmed roses did Ross send to Emily?",
            5: "Condoms are only how effective?",
            6: "What is Monica's apartment number?",
            7: "What is the name of Joey's stuffed penguin?",
            8: "What is Chandler's middle name?",
            9: "What did Joey name his barcalounger?",
            10: "What was Chandler's job in the early seasons of the show?",
            11: "Who pees on Monica's leg when she gets stung by a jellyfish?",
            12: "What caused the fire in Phoebe and Rachel's apartment?",
            13: "Who lives in the apartment below Monica's?",
            14: "What color is the couch in Central Perk?",
            15: "Who sang the Friends theme?",
            16: "How many types of towels does Monica have?",
            17: "What is Danny Devito's stripper name?",
            18: "What does Paul (Bruce Willis) call himself to build his confidence?",
            19: "Which famous person does Phoebe believe is her grandfather?",
            20: "Where does David, Phoebe's boyfriend, move to?",
            21: "In \"The One at the Beach\", how many pages is the letter Rachel writes Ross?",
            22: "Who says \"I gave you my Snack Pack\"?",
            23: "What city is Chandler forced to move to when he falls asleep in a meeting?",
            24: "What is the name of the Barista at Central Perk who is in love with Rachel?",
            25: "What is the color of the sweater that indicates who the father of Rachel's baby is?"
        },
        answers: {
            1: "The One with the Embyros",
            2: "3",
            3: "Food",
            4: "72",
            5: "97%",
            6: "20",
            7: "Hugsy",
            8: "Muriel",
            9: "Rosita",
            10: "IT Procurement Manager",
            11: "Chandler",
            12: "Rachel's hair straightener",
            13: "Mr. Heckles",
            14: "Orange",
            15: "The Rembrandts",
            16: "11",
            17: "Officer Goodbody",
            18: "A neat guy",
            19: "Albert Einstein",
            20: "Minsk",
            21: "18, front and back",
            22: "Rhonda",
            23: "Tulsa",
            24: "Gunther",
            25: "Red"
        },
        choices: {
            1: ["The One with the Contest", "The One with Ross's Thing", "The One Where They Switch Apartments", "The One with the Embyros"],
            2: ["1", "2", "3", "4"],
            3: ["Women", "Food", "Money", "Advice"],
            4: ["72", "100", "50", "24"],
            5: ["96%", "97%", "98%", "95%"],
            6: ["15", "18", "20", "12"],
            7: ["Snuggles", "Hugsy", "Mr. Penguin", "Arty"],
            8: ["Marcel", "Michelle", "Millicent", "Muriel"],
            9: ["Rosita", "Rosa", "Rosie", "Rosalind"],
            10: ["IT Procurement Manager", "Data Analyst", "Transponster", "Financial Analyst"],
            11: ["Monica", "Joey", "Chandler", "Richard"],
            12: ["Phoebe's candles", "Phoebe's incense", "Rachel's hair dryer", "Rachel's hair straightener"],
            13: ["Mr. Heckles", "Mr. Annoying", "Mr. Creepy", "Mr. Chill"],
            14: ["Green", "Orange", "Yellow", "Red"],
            15: ["Fool's Garden", "Smash Mouth", "Sunrise Avenue", "The Rembrandts"],
            16: ["9", "10", "11", "12"],
            17: ["Officer Goodbody", "Officer Sexy", "Officer Hunky", "Officer Sultry"],
            18: ["A neat guy", "A cool guy", "A special guy", "A good guy"],
            19: ["Thomas Edison", "Albert Einstein", "Nikola Tesla", "JP Morgan"],
            20: ["Mumbai", "Minsk", "Moscow", "Manila"],
            21: ["15, front and back", "18, front and back", "12, front and back", "9, front and back"],
            22: ["Rhonda", "Brenda", "Donna", "Alisha"],
            23: ["Tulsa", "Omaha", "St. Louis", "Wichita"],
            24: ["Trevor", "Tyler", "Gunther", "Gunner"],
            25: ["Green", "Blue", "Brown", "Red"]
        },
        videos: {
            1: "",
            2: "assets/videos/3Divorces.mp4",
            3: "assets/videos/joeyDoesntShareFood.mp4",
            4: "",
            5: "assets/videos/condoms.mp4",
            6: "assets/videos/apartment20.mp4",
            7: "assets/videos/hugsy.mp4",
            8: "",
            9: "assets/videos/rosita.mp4",
            10: "assets/videos/transponster.mp4",
            11: "assets/videos/jellyfish.mp4",
            12: "",
            13: "",
            14: "",
            15: "",
            16: "assets/videos/monicasTowels.mp4",
            17: "assets/videos/officeGoodbody.mp4",
            18: "assets/videos/neatGuy.mp4",
            19: "",
            20: "",
            21: "assets/videos/18Pages.mp4",
            22: "assets/videos/rhonda.mp4",
            23: "",
            24: "",
            25: ""
        },
        correctAnswerVid: ["assets/videos/thatIsCorrect.mp4", "assets/videos/iKnewIt.mp4", "assets/videos/excited.mp4"],
        wrongAnswerVid: ["assets/videos/moreWrong.mp4", "assets/videos/youIdiot.mp4", "assets/videos/pivot.mp4", "assets/videos/dontBlameQuestions.mp4"],
        skippedQuestionVid: ["assets/videos/dontKnowAnything.mp4", "assets/videos/fellAsleep.mp4"],
        lightningRoundVid: "assets/videos/lightningRound.mp4",
        get questionCount() {
            delete this.questionCount;
            return this.questionCount = Object.keys(this.questions).length;
        },
        get shuffledQuestions() {
            delete this.shuffledQuestions;
            return this.shuffledQuestions = Object.values(this.questions);
        },
        get shuffledChoices() {
            delete this.shuffledChoices;
            return this.shuffledChoices = Object.values(this.choices);
        },
        get shuffledAnswers() {
            delete this.shuffledAnswers;
            return this.shuffledAnswers = Object.values(this.answers);
        },
        get shuffledVideos() {
            delete this.shuffledVideos;
            return this.shuffledVideos = Object.values(this.videos);
        },
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
                if (triviaGame.timeLimit >= 6 && $("#time").hasClass("hurry")) {
                    $("#time").removeClass("hurry");
                } else if (triviaGame.timeLimit === 5 && !$("#time").hasClass("hurry")) {
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
        shuffle: function (obj1, obj2, obj3, obj4) {
            var index = obj1.length;
            var random, temp1, temp2, temp3, temp4;
            if (arguments.length === 4) {
                while (index) {
                    random = Math.floor(Math.random() * index);
                    index -= 1;
                    temp1 = obj1[index];
                    temp2 = obj2[index];
                    temp3 = obj3[index];
                    temp4 = obj4[index];
                    obj1[index] = obj1[random];
                    obj2[index] = obj2[random];
                    obj3[index] = obj3[random];
                    obj4[index] = obj4[random];
                    obj1[random] = temp1;
                    obj2[random] = temp2;
                    obj3[random] = temp3;
                    obj4[random] = temp4;
                }
            } else if (arguments.length === 3) {
                while (index) {
                    random = Math.floor(Math.random() * index);
                    index -= 1;
                    temp1 = obj1[index];
                    temp2 = obj2[index];
                    temp3 = obj3[index];
                    obj1[index] = obj1[random];
                    obj2[index] = obj2[random];
                    obj3[index] = obj3[random];
                    obj1[random] = temp1;
                    obj2[random] = temp2;
                    obj3[random] = temp3;
                }
            } else if (arguments.length === 2) {
                while (index) {
                    random = Math.floor(Math.random() * index);
                    index -= 1;
                    temp1 = obj1[index];
                    temp2 = obj2[index];
                    obj1[index] = obj1[random];
                    obj2[index] = obj2[random];
                    obj1[random] = temp1;
                    obj2[random] = temp2;
                }
            } else if (arguments.length === 1) {
                while (index) {
                    random = Math.floor(Math.random() * index);
                    index -= 1;
                    temp1 = obj1[index];
                    obj1[index] = obj1[random];
                    obj1[random] = temp1;
                }
            } else {
                throw new Error("illegal argument count, accepts 1 to 4");
            }
        },
        displayQuestion: function () {
            var clickCheck = triviaGame.clicked;
            if (triviaGame.counter === triviaGame.questionCount) {
                $("#right").text(triviaGame.right + "/" + triviaGame.questionCount);
                $("#wrong").text(triviaGame.wrong + "/" + triviaGame.questionCount);
                $("#skipped").text(triviaGame.skipped + "/" + triviaGame.questionCount);
                $("#stats").css("display", "block");
                $("#game").css("display", "none");
                $("#start").css("display", "inline-block");
                $("#start").text("Play Again");
                triviaGame.right = 0;
                triviaGame.wrong = 0;
                triviaGame.skipped = 0;
                triviaGame.counter = 0;
                triviaGame.lightningRound = false;
                $(".lightningRound").remove();
            } else {
                if ($("#start").css("display") === "inline-block" && triviaGame.counter === 0) {
                    triviaGame.shuffle(triviaGame.shuffledQuestions, triviaGame.shuffledAnswers, triviaGame.shuffledChoices, triviaGame.shuffledVideos);
                    $("#start").css("display", "none");
                    $("#stats").css("display", "none");
                    $("#game").css("display", "block");
                }

                triviaGame.newQuestion();
            }
        },
        newQuestion: function () {
            let newChoices = triviaGame.shuffledChoices[triviaGame.counter];
            triviaGame.shuffle(newChoices);
            $("#answers").empty();
            $("#question").text(triviaGame.shuffledQuestions[triviaGame.counter]);
            $(newChoices).each(function (index, value) {
                var newSelection = $("<h2>");
                $(newSelection).addClass("choice rounded py-1");
                $(newSelection).attr("data-answer", value);
                $(newSelection).text(value);
                $(newSelection).on("click", {
                    clickCheck: true
                }, triviaGame.showAnswer);
                $("#answers").append(newSelection);
            });
            triviaGame.startTimer();
            triviaGame.counter++;
            if (triviaGame.questionCount - triviaGame.counter === 5) {
                triviaGame.lightningRound = true;
            }
        },
        lightningRoundFuncCheck: function () {
            if (triviaGame.questionCount - triviaGame.counter === 5) {
                setTimeout(triviaGame.lightningRoundFunc, 8000);
                setTimeout(triviaGame.displayQuestion, 20000);
            } else {
                setTimeout(triviaGame.displayQuestion, 8000);
            }
        },
        lightningRoundFunc: function () {
            if (triviaGame.lightningRound && triviaGame.questionCount - triviaGame.counter === 5) {
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
                $("#questions").prepend(newH2);
            }
        },
        showAnswer: function (clickCheck) {
            var newH2 = $("<h2 class=\"mb-3\">");
            var newH3 = $("<h3>");
            var answersElem = $("#answers");
            var embedElem = $("<div id=\"embed\" class=\"embed-responsive embed-responsive-16by9 rounded\">");
            var videoElem = $("<video class=\"embed-responsive-item\" autoplay controls>");
            var sourceElem = $("<source type=\"video/mp4\">");
            if (triviaGame.shuffledAnswers[triviaGame.counter - 1] === $(this).attr("data-answer")) {
                triviaGame.stopTimer();
                $(answersElem).empty();
                $(newH2).addClass("green");
                $(newH2).text("You couldn't BE any more correct!");
                $(answersElem).append(newH2);
                if (triviaGame.shuffledVideos[triviaGame.counter - 1] !== "") {
                    $(sourceElem).attr("src", triviaGame.shuffledVideos[triviaGame.counter - 1]);
                } else {
                    triviaGame.shuffle(triviaGame.correctAnswerVid);
                    $(sourceElem).attr("src", triviaGame.correctAnswerVid[0]);
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
                $(newH3).text("The correct answer was: " + triviaGame.shuffledAnswers[triviaGame.counter - 1]);
                triviaGame.shuffle(triviaGame.wrongAnswerVid);
                $(sourceElem).attr("src", triviaGame.wrongAnswerVid[0]);
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
                $(newH3).text("The correct answer was: " + triviaGame.shuffledAnswers[triviaGame.counter - 1]);
                triviaGame.shuffle(triviaGame.skippedQuestionVid);
                $(sourceElem).attr("src", triviaGame.skippedQuestionVid[0]);
                $(videoElem).append(sourceElem);
                $(embedElem).append(videoElem);
                $(answersElem).append(newH2);
                $(answersElem).append(newH3);
                $(answersElem).append(embedElem);
                triviaGame.skipped++;
                triviaGame.lightningRoundFuncCheck();
            }
        }
    }

    $("#start").on("click", triviaGame.displayQuestion);

})