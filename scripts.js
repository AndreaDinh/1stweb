// // alert("Hello Andrea");
// // document.write("<h1>Welcome to my website</h1>")
// // alert("Thanks for visting")
//
// console.log("Programme start");
//
// var message = "Hello!";
// alert(message);
// message = "Welcome to my website";
// alert(message);
// console.log("Programme complete");
//
//

console.log("Programme start");
// var visitorName = prompt("What's yo name?");
// console.log(visitorName);
//
// var message = "Hello " + visitorName;
// message += ". Welcome to Treehouse. ";
// message += "We are so glad that you came by to visit, ";
// message += visitorName;
// message += ". Please come again, when you want to learn more."
// document.write(message);

// var passphrase = "Open Sesame";
// console.log(passphrase.length);
//
// console.log(passphrase.toLowerCase());
// console.log(passphrase);
// console.log(passphrase.toUpperCase());

/********************
  SHOUT OUT APP
*********************/

  // var stringToShout = prompt ("What would you like to give a shout out to? :o :o");
  // var mainMessage = "Here we gooooooooo: " + stringToShout.toUpperCase() + "!!!";
  // alert(mainMessage);

  /********************
    STORY MAKING GAME
  *********************/

  alert ("Let's guess your artistic identity, shall we? :)");
  alert ("In order to get the most accurate result possible, I need you to think quite a bit to give a short and meaningful answer. If you're all set, here we go!");

  // "<h2> [favArtist1] meets [favArtist2] with a healthy dose of [uniqueThing] LOL.</h2>"

  var favArtist1 = prompt ("Which artist is your biggest influence and also has similar personality traits as yours?");
  var favArtist2 = prompt ("Name another favorite artist of yours, but this time, choose the one that has a huge personality contrast as yours, think hard, we're close");
  var uniqueThing = prompt ("What's the one noun/few words that best describes your (artistic) personality?");

  alert ("It's done! Are you ready for the result?");

  var phrase = "<h2>" + favArtist1.toUpperCase() + " meets ";
  phrase += favArtist2.toUpperCase() + " with a healthy dose of ";
  phrase += uniqueThing.toUpperCase() + ".</h2>";

  document.write(phrase);

console.log("Programme complete");

  // var phrase = favArtist1.toUpperCase()
  // + " meets "
  // + favArtist2.toUpperCase()
  // + " with a healthy dose of "
  // + uniqueThing.toUpperCase()
  // + " LOL";
  //
  // document.write(phrase);
  //
  // document.write("<p>Best of luck on your artistic journey!</p>".toUpperCase());
