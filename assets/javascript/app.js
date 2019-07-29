$(document).ready(function () {

    var triviaGame = {
        questions: {
            1: "What's the name of the episode that has the Trivia Game?",
            2: "How many times has Ross been divorced?",
            3: "What doesn't Joey share?",
            4: "How many long-stemmed roses did Ross send to Emily?",
            5: "How many lasagnas did Monica make for her aunt?",
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
            21: "How many pages, front and back, is the letter Rachel writes to Ross before they get back together for the second time?",
            22: "Who says \"I gave you my Snack Pack\"?",
            23: "What city is Chandler forced to move to when he falls asleep in a meeting?",
            24: "What is the name of the Barista at Central Perk who is in love with Rachel?",
            25: "What is the color of the sweater that indicates the father of Rachel's baby?"
        },
        answers: {
            1: "The One with the Embyros",
            2: "3",
            3: "Food",
            4: "72",
            5: "12",
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
            21: "18",
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
            5: ["6", "12", "2", "8"],
            6: ["15", "18", "20", "12"],
            7: ["Snuggles", "Hugsy", "Mr. Penguin", "Arty"],
            8: ["Marcel", "Michelle", "Millicent", "Muriel"],
            9: ["Rosita", "Rosa", "Rosie", "Rosalind"],
            10: ["IT Procurement Manager", "Data Analyst", "Transpondster", "Financial Analyst"],
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
            21: ["15", "18", "12", "9"],
            22: ["Rhonda", "Brenda", "Donna", "Alisha"],
            23: ["Tulsa", "Omaha", "St. Louis", "Wichita"],
            24: ["Trevor", "Tyler", "Gunther", "Gunner"],
            25: ["Green", "Blue", "Brown", "Red"]
        },
        right: 0,
        wrong: 0,
        skipped: 0,
        counter: 0,
        timerRunning: false,
        timeLimit: 14,
        timer: function () {
            if (triviaGame.timeLimit === 0) {
                $("#time").removeClass("hurry").addClass("timeUp");
                $("#time").text("Time's up!");
                triviaGame.stopTimer();
            } else {
                if (triviaGame.timeLimit > 1) {
                    $("#time").text(triviaGame.timeLimit + " seconds");
                } else {
                    $("#time").text(triviaGame.timeLimit + " second");
                }
                if (triviaGame.timeLimit > 6 && $("#time").hasClass("hurry")) {
                    $("#time").removeClass("hurry")
                } else if (triviaGame.timeLimit === 5 && !$("#time").hasClass("hurry")) {
                    $("#time").addClass("hurry")
                }
                triviaGame.timeLimit--;
            }
        },
        startTimer: function () {
            if (!triviaGame.timerRunning) {
                triviaGame.timeLimit = 14;
                $("#time").text("15 seconds");
                setInterval(triviaGame.timer, 1000);
                triviaGame.timerRunning = true;
            }
        },
        stopTimer: function () {
            clearInterval(triviaGame.timer);
            triviaGame.timerRunning = false;
        },
        get questionCount() {
            return Object.keys(this.questions).length;
        },
        shuffle: function (obj1, obj2, obj3) {
            var index = obj1.length;
            var random, temp1, temp2, temp3;
            if (arguments.length === 3) {
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
                throw new Error("illegal argument count, accepts 1, 2, or 3");
            }
        },
        displayQuestion: function () {
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
            } else {
                if ($("#start").css("display") === "inline-block" && triviaGame.counter === 0) {
                    var shuffledQuestions = Object.values(triviaGame.questions);
                    var shuffledChoices = Object.values(triviaGame.choices);
                    var shuffledAnswers = Object.values(triviaGame.answers);
                    triviaGame.shuffle(shuffledQuestions, shuffledAnswers, shuffledChoices);
                    $("#start").css("display", "none");
                    $("#stats").css("display", "none");
                    $("#game").css("display", "block");
                }

                if (triviaGame.counter < triviaGame.questionCount) {
                    let newChoices = shuffledChoices[triviaGame.counter];
                    triviaGame.shuffle(newChoices);
                    triviaGame.startTimer();
                    $("#answers").empty();
                    $("#question").text(shuffledQuestions[triviaGame.counter]);
                    triviaGame.counter++;
                    $(newChoices).each(function (index, value) {
                        var newP = $("<p>");
                        $(newP).text(value);
                        $("#answers").append(newP);
                    })
                }
            }
        },
    }

    $("#start").on("click", triviaGame.displayQuestion);

})