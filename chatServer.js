/*
chatServer.js
Author: David Goedicke (da.goedicke@gmail.com)
Closley based on work from Nikolas Martelaro (nmartelaro@gmail.com) as well as Captain Anonymous (https://codepen.io/anon/pen/PEVYXz) who forked of an original work by Ian Tairea (https://codepen.io/mrtairea/pen/yJapwv)
*/

var express = require('express'); // web server application
var app = express(); // webapp
var http = require('http').Server(app); // connects http library to server
var io = require('socket.io')(http); // connect websocket library to server
var serverPort = 8000;

//---------------------- WEBAPP SERVER SETUP ---------------------------------//
// use express to create the simple webapp
app.use(express.static('public')); // find pages in public directory

// start the server and say what port it is on
http.listen(serverPort, function() {
  console.log('listening on *:%s', serverPort);
});
//----------------------------------------------------------------------------//


//---------------------- WEBSOCKET COMMUNICATION -----------------------------//
// this is the websocket event handler and say if someone connects
// as long as someone is connected, listen for messages
io.on('connect', function(socket) {
  console.log('a new user connected');
  var questionNum = 0; // keep count of question, used for IF condition.
  socket.on('loaded', function() { // we wait until the client has loaded and contacted us that it is ready to go.


    socket.emit('changeBG', 'green');
    socket.emit('changeFont', 'white')
    socket.emit('answer', "Hi! I am TunesBot, a simple chat bot that recommends music catered to your situation."); //We start with the introduction;
    setTimeout(timedQuestion, 6500, socket, "What is your name?"); // Wait a moment and respond with a question.

  });
  socket.on('message', (data) => { // If we get a new message from the client we process it;
    console.log(data);
    questionNum = bot(data, socket, questionNum); // run the bot function with the new message
  });
  socket.on('disconnect', function() { // This function  gets called when the browser window gets closed
    console.log('user disconnected');
  });
});
//--------------------------CHAT BOT FUNCTION-------------------------------//
var moving_val = 0;

function bot(data, socket, questionNum) {
  var input = data; // This is generally really terrible from a security point of view ToDo avoid code injection
  var answer;
  var question;
  var waitTime;
  var song1 = "Happy by Pharrell Williams";
  var song2 = "Gravity By Sara Bareilles";
  var song3 = "Let It Go From Disney’s Frozen";
  var song4 = "Weather by Novo Amor";
  var song5 = "No Brainer by Justin Bieber";
  var song6 = "Levels by Avicii";
  var song7 = "Family Business by Kanye West";
  var song8 = "Day Glo by Brazos";
  var song9 = "Brokedown by The California Honeydrops";
  var song10 = "Such Great Heights by Iron and Wine";
  var song11 = "Colorado by Lotus";

  /// These are the main statments that make up the conversation.
  if (questionNum == 0) {
    answer = 'Hello ' + input + ' :-). By answering the following questions for me, I will best be able to recommend music to you!'; // output response
    waitTime = 6500;
    question = 'What activity are you trying to do: relax, workout, or study?'; // load next question
    questionNum = 1;
  }

  else if (moving_val == 0) {
    if (input.toLowerCase()  == "relax") {
      answer = "Awesome, let's find you a song that will help you relax!"; // output response
      waitTime = 5000;
      question = 'How are you feeling: happy, sad, or angry?'; // load next question
      moving_val = 1;
    }
    else if (input.toLowerCase()  == "workout") {
      answer = "Awesome, let's find you a song that will help you workout!"; // output response
      waitTime = 5000;
      question = 'Are you: lifting or jogging?'; // load next question
      moving_val = 2;
    }
    else if (input.toLowerCase()  == "study") {
      answer = "Awesome, let's find you a song that will help you study!"; // output response
      waitTime = 5000;
      question = 'Are you studying: alone or with friends?'; // load next question
      moving_val = 3;
    }
    else {
      answer = "I don't recognize this activity. Please tell me if you want to relax, workout, or study!"; // output response
      waitTime = 5000;
      question = 'What activity are you trying to do: relax, workout, or study?'; // load next question
    }
  }

  else if (moving_val == 1) {
    if (input.toLowerCase()  == "happy") {
      answer = "I'm HAPPY to hear that you are HAPPY! I would recommend the song " + song1 + "  to you ;)"; // output response
      waitTime = 7000;
      moving_val = -1;
    }
    else if (input.toLowerCase()  == "sad") {
      answer = "I'm sorry to hear you are feeling sad :( I think the song " + song2 + "  might help calm you down and feel better :)"; // output response
      waitTime = 7000;
       moving_val = -1;
      question = "Which was your favorite song?";
    }
    else if (input.toLowerCase()  == "angry") {
      answer = "Anger is a terrible feeling to have. I think the song " + song3 + "  might help you throw away your anger and adopt a new perspective!"; // output response
      waitTime = 7000;
      moving_val = -1;
      question = "Which was your favorite song?";
    }
    else {
      answer = "I don't recognize this activity. Please tell me if you are happy, sad, or angry!"; // output response
      waitTime = 5000;
      question = 'How are you feeling: happy, sad, or angry?'; // load next question
    }
  }

  else if (moving_val == 2) {
    if (input.toLowerCase()  == "lifting") {
      answer = "Awesome, let's find you a song that will help you lift!"; // output response
      waitTime = 5000;
      question = 'When you lift, do you enjoy music that is: intense or mellow?'; // load next question
      moving_val = 4;
    }
    else if (input.toLowerCase()  == "jogging") {
      answer = "Awesome, let's find you a song that will help you jog!"; // output response
      waitTime = 5000;
      question = 'Are you jogging: outside or inside?'; // load next question
      moving_val = 5;
    }
    else {
      answer = "I don't recognize this activity. Please tell me if you want to go jogging or lifting!"; // output response
      waitTime = 5000;
      question = 'Are you: lifting or jogging?'; // load next question
    }
  }


  else if (moving_val == 3) {
    if (input.toLowerCase()  == "alone") {
      answer = "Sounds lonely :( Let's find you a song to make studying more enjoyable :)"; // output response
      waitTime = 5000;
      question = 'When you study, do you like music: with words or without words?'; // load next question
      moving_val = 6;
    }
    else if (input.toLowerCase()  == "with friends") {
      answer = "Friends + Good Tunes = GREAT Times!"; // output response
      waitTime = 5000;
      question = 'Do you and your friends want background music that is: mellow or upbeat?'; // load next question
      moving_val = 7;
    }
    else {
      answer = "I don't recognize this activity. Please tell me if you are studying alone or with friends!"; // output response
      waitTime = 5000;
      question = 'Are you studying: alone or with friends?'; // load next question
    }
  }


  else if (moving_val == 4) {
    if (input.toLowerCase()  == "intense") {
      answer = "GO GO GO! A good song for you would be " + song6 + "."; // output response
      waitTime = 7000;
      moving_val = -1;
      question = "Which was your favorite song?";
    }
    else if (input.toLowerCase()  == "mellow") {
      answer =  song7 + " should be a good option for a more mellow lifting session. But that doesn't mean you can skip legs!"; // output response
      waitTime = 7000;
      moving_val = -1;
      question = "Which was your favorite song?";
    }
    else {
      answer = "I don't recognize this activity. Please tell me if you want your workout music to be mellow or intense!"; // output response
      waitTime = 5000;
      question = 'When you lift, do you enjoy music that is: intense or mellow?'; // load next question
    }
  }

  else if (moving_val == 5) {
    if (input.toLowerCase()  == "outside") {
      answer = "That sounds lovely :) Let's give you a more soothing song that will allow you to enjoy the beautiful scenery of the outdoors: " + song4 + "."; // output response
      waitTime = 7000;
      moving_val = -1;
      question = "Which was your favorite song?";
    }
    else if (input.toLowerCase()  == "inside") {
      answer = "Bad weather ruins everything :/ A good song to combat the gloomy weather is " + song5 + "." ; // output response
      waitTime = 7000;
      moving_val = -1;
      question = "Which was your favorite song?";
    }
    else {
      answer = "I don't recognize this activity. Please tell me if you are jogging inside or outside!"; // output response
      waitTime = 5000;
      question = 'Are you jogging: outside or inside?'; // load next question
    }
  }

  else if (moving_val == 6) {
    if (input.toLowerCase()  == "with words") {
      answer = "Is a song really a song without words?! Here is a mellow song that will calm you while you study: " + song10 + "."; // output response
      waitTime = 7000;
      moving_val = -1;
      question = "Which was your favorite song?";
    }
    else if (input.toLowerCase()  == "without words") {
      answer = "Words distract me too! Here is a calming song with a smooth guitar melody: " + song11 + "."; // output response
      waitTime = 7000;
      moving_val = -1;
      question = "Which was your favorite song?";
    }
    else {
      answer = "I don't recognize this activity. Please tell me if you want music with or without words!"; // output response
      waitTime = 5000;
      question = 'When you study, do you like music: with words or without words?'; // load next question   
    }
  }

  else if (moving_val == 7) {
    if (input.toLowerCase()  == "mellow") {
      answer = "Don't want music that will distract you too much! " + song8 + " is a good one -- check it out."; // output response
      waitTime = 7000;
      moving_val = -1;
      question = "Which was your favorite song?";
    }
    else if (input.toLowerCase()  == "upbeat") {
      answer = "Get pumped! Here is a fun one that I love: " + song9 + "."; // output response
      waitTime = 7000;
      moving_val = -1; 
      question = "Which was your favorite song?";
    }
    else {
      answer = "I don't recognize this activity. Please tell me if you want upbeat or mellow music!"; // output response
      waitTime = 5000;
      question = 'Do you and your friends want background music that is: mellow or upbeat?'; // load next question
    }
  }



  else {
    answer = 'Hope you are enjoying those tunes!'; // output response
    waitTime = 5000;
    question = '';
  }


  /// We take the changed data and distribute it across the required objects.
  socket.emit('answer', answer);
  setTimeout(timedQuestion, waitTime, socket, question);
  return (questionNum + 1);
}

function timedQuestion(socket, question) {
  if (question != '') {
    socket.emit('question', question);
  } else {
    //console.log('No Question send!');
  }

}
//----------------------------------------------------------------------------//
