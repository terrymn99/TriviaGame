$(document).ready(function () {

    $("#startButton").click(function () {
        console.log("start");
        $("#startButton").remove();
    });

    var wins = 0;
    var losses = 0;
    var number = 45;
    var intervalId;

    function run() {
        clearInterval(intervalId);
        intervalId = setInterval(decrement, 1000);

        function decrement() {
            //  Decrease number by one.
            number--;
            //  Show the number in the #show-number tag.
            $("#show-number").html("<h2>" + number + "</h2>");
            //  Once number hits zero...
            if (number === 0) {
                //  ...run the stop function.
                stop();
                //  Alert the user that time is up.
                alert("Time Up!");
            }

            function stop() {
                //  Clears our intervalId
                //  We just pass the name of the interval
                //  to the clearInterval function.
                clearInterval(intervalId);
            }

        }
        function question01() {
            var question1 = {
                Question: "Which U.S. national park was the first park to be established",
                Answer1: "Yosemite NP",
                Answer2: "Glacier NP",
                Answer3: "Yellowstone NP",
                Answer4: "Rocky Mountain NP"
            }
        };

        function question02() {
            var question2 = {
                Question: "What state contains the most national parks?",
                Answer1: "Utah",
                Answer2: "Colorado",
                Answer3: "California",
                Answer4: "Alaska"
            }
        };

        function question03() {
            var question3 = {
                Question: "Which national park is the most visited?",
                Answer1: "Great Smoky Mtns. NP",
                Answer2: "Yosemite NP",
                Answer3: "Glacier NP",
                Answer4: "Yellowstone NP"
            }
        };

        function question04() {
            var question4 = {
                Question: "This man is considered to be the 'father' of the national parks.",
                Answer1: "Theodore Roosevelt",
                Answer2: "Abraham Lincoln",
                Answer3: "John Muir",
                Answer4: "John Wesley Powell"
            }
        };

        function question05() {
            var question5 = {
                Question: "Which national park is home to the deepest lake in the U.S.?",
                Answer1: "Denali NP",
                Answer2: "Crater Lake NP",
                Answer3: "Yellowstone NP",
                Answer4: "Everglades NP"
            }
        };

        function question06() {
            var question6 = {
                Question: "How many national parks are there in the U.S.?",
                Answer1: "37",
                Answer2: "46",
                Answer3: "59",
                Answer4: "71"
            }
        };

        function question07() {
            var question7 = {
                Question: "Which of the following is the newest national park?",
                Answer1: "Virgin Islands NP",
                Answer2: "Black Canyon of the Gunnison NP",
                Answer3: "Denali NP",
                Answer4: "Pinnacles NP"
            }
        };



        //ANSWERS
        //1-Yellowstone (March 1st, 1872)
        //2-California (9)
        //3-Great Smoky Mountains (11.3 mil 2016)
        //4-John Muir
        //5-Crater Lake, OR (1949')
        //6-59
        //7-Pinnacles, CA (January 10th, 2013)


        //Click event to begin game
        //Build functions

    }});
