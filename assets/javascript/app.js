$(document).ready(function () {
    //*************************************************************************************************
    //Question 1
    question03();
    question02();
    question01();
    function question01()  {
    $("#startButton").click(function () {
        console.log("start");
        $("#startButton").remove();
        $(".question").text(questions[0]);
        var answers1 = ["Yosemite NP", "Glacier NP", "Yellowstone NP", "Rocky Mountain NP"];
            $(".answer-a").text(answers1[0]);
            $(".answer-b").text(answers1[1]);
            $(".answer-c").text(answers1[2]);
            $(".answer-d").text(answers1[3]);
            run();

            function clearData ()  {
                $(".question").remove();
                $(".answer-a").remove(); 
                $(".answer-b").remove();
                $(".answer-c").remove();
                $(".answer-d").remove();
                question02();
                run();
                stop();
                } //Ends clearData function
               

            $(".answer-c").click(function ()  {
                alert ("You are correct!");
                clearData();
            })
            $(".answer-a").click(function () { 
                alert ("Wrong! The correct answer is Yellowstone NP")
                clearData();

            })

            $(".answer-b").click(function () { 
                alert ("Wrong! The correct answer is Yellowstone NP")
                clearData();
            })

            $(".answer-d").click(function () { 
                alert ("Wrong! The correct answer is Yellowstone NP")
                clearData();
            })   
    });
    }//Ends question01 function

     //*************************************************************************************************
     //Question 2
     function question02()  {
+   $("#startButton").click(function () {
    console.log("start");
    $("#startButton").remove();
    $(".question").text(questions[1]);
    var answers2 = ["Utah", "Colorado", "California", "Alaska"];
        $(".answer-a").text(answers2[0]);
        $(".answer-b").text(answers2[1]);
        $(".answer-c").text(answers2[2]);
        $(".answer-d").text(answers2[3]);
        run();

        function clearData ()  {
            $(".question").remove();
            $(".answer-a").remove(); 
            $(".answer-b").remove();
            $(".answer-c").remove();
            $(".answer-d").remove();
            run();
            stop();
            } //Ends clearData function

        $(".answer-c").click(function ()  {
            alert ("You are correct!");
            clearData();
        })
        $(".answer-a").click(function () { 
            alert ("Wrong! The correct answer is Yellowstone NP")
            clearData();

        })

        $(".answer-b").click(function () { 
            alert ("Wrong! The correct answer is Yellowstone NP")
            clearData();
        })

        $(".answer-d").click(function () { 
            alert ("Wrong! The correct answer is Yellowstone NP")
            clearData();
        })   
});
     }//Ends question02 function

    //*************************************************************************************************
     //Question 3 
     function question03()  {
        +   $("#startButton").click(function () {
            console.log("start");
            $("#startButton").remove();
            $(".question").text(questions[1]);
            var answers3 = ["Great Smoky Mtns. NP", "Yosemite NP", "Glacier NP", "Yellowstone NP"];
                $(".answer-a").text(answers3[0]);
                $(".answer-b").text(answers3[1]);
                $(".answer-c").text(answers3[2]);
                $(".answer-d").text(answers3[3]);
                run();
        
                function clearData ()  {
                    $(".question").remove();
                    $(".answer-a").remove(); 
                    $(".answer-b").remove();
                    $(".answer-c").remove();
                    $(".answer-d").remove();
                    run();
                    stop();
                    } //Ends clearData function
        
                $(".answer-c").click(function ()  {
                    alert ("Wrong! The correct answer is Yellowstone NP");
                    clearData();
                })
                $(".answer-a").click(function () { 
                    alert ("You are correct!")
                    clearData();
        
                })
        
                $(".answer-b").click(function () { 
                    alert ("Wrong! The correct answer is Yellowstone NP")
                    clearData();
                })
        
                $(".answer-d").click(function () { 
                    alert ("Wrong! The correct answer is Yellowstone NP")
                    clearData();
                })   
        });
        }//Ends question03 function






    var wins = 0;
    var losses = 0;
    var intervalId;
    var questions = ["Which U.S. national park was the first park to be established?",
        "Which U.S. state contains the most national parks?",
        "Which national park is the most visited?",
        "This man is considered to be the 'father' of the national parks.",
        "Which national park is home to the deepest lake in the U.S.?",
        "How many national parks are there in the U.S.?",
        "Which of the following is the newest national park?",];

   
    var answers4 = ["Theodore Roosevelt", "Jim Bridger", "John Muir", "John Wesley Powell"];
    var answers5 = ["Denali NP", "Crater Lake NP", "Yellowstone NP", "Everglades NP"];
    var answers6 = ["37", "46", "59", "71"];
    var answers7 = ["Virgin Islands NP", "Black Canyon of the Gunnison NP", "Denali NP", "Pinnacles NP"];


    function run() {
        var number = 30;
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
                alert("Time's Up!");
            }

            function stop() {
                //  Clears our intervalId
                //  We just pass the name of the interval
                //  to the clearInterval function.
                clearInterval(intervalId);
            } //Ends stop function

        } //Ends decrement function
    } //Ends run function
});
