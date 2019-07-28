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
            20: "Where does David, Phoebe's boyfriend, move to?"
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
            20: "Minsk"
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
            20: ["Yemen", "Minsk", "Bulgaria", "Mongolia"]
        },
        right: 0,
        wrong: 0,
        skipped: 0,
        get questionCount() {
            return Object.keys(this.questions).length;
        },
        counter: 1,
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
            // run timer function
            var newChoices = triviaGame.choices[triviaGame.counter];
            triviaGame.shuffle(newChoices);
            var index = triviaGame.counter;

            if ($("#start").css("display") === "inline-block" && triviaGame.counter === 1) {
                $("#start").css("display", "none");
                $("#game").css("display", "block");
            }
            if (triviaGame.counter < triviaGame.questionCount) {
                $("#answers").empty();
                $("#question").text(triviaGame.questions[triviaGame.counter]);
                triviaGame.counter++;
                $(newChoices).each(function (i, val) {
                    var newP = $("<p>");
                    $(newP).text(val);
                    $("#answers").append(newP);
                })
            }
        },

    }

    $("#start").on("click", triviaGame.displayQuestion);

})