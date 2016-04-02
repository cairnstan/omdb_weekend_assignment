
$(function(){
  var meAndYou = {};
  var tankGirl = {};
  var bigLebowski = {};


  //ajax call for Tank Girl
  // $("#tankGirlButton").on("click", function(){
  $.ajax({
    url: "http://www.omdbapi.com/?t=tank+girl&y=&plot=short&r=json",
    type: "GET"
  }).done(function(response){
    console.log(response);
    tankGirl = response;
    displayTankGirl(tankGirl);
  })
  // })
  //ajax call for Big Lebowski
  $.ajax({
    url: "http://www.omdbapi.com/?t=big+lebowski&y=&plot=short&r=json",
    type: "GET"
  }).done(function(response){
    console.log(response);
    bigLebowski = response;
    displayBigLebowski(bigLebowski);
  })
//ajax call for Me and You and Everyone We Know
  $.ajax({
    url: "http://www.omdbapi.com/?t=me+and+you+and+everyone+we+know&y=&plot=short&r=json",
    type: "GET"
  }).done(function(response){
    console.log(response);
    meAndYou = response;
    displayMeAndYou(meAndYou);
  })
});
//This function will put the information about Tank Girl on the page
function displayTankGirl(movie){
  $(".titleTankGirl").text(movie.Title);
  $(".titleTankGirl").append("<img src= \"" + movie.Poster + "\"/>");
  $(".actorTankGirl").text("Starring: " + movie.Actors);
  $(".directorTankGirl").text("Directed by: " + movie.Director);
  $(".plotTankGirl").text(movie.Plot);
  $(".yearTankGirl").text("Driving tanks and kicking ass since " + movie.Year);
}
//This function will put the information about Big Lebowski on the page
function displayBigLebowski(movie){
  $(".titleBigLebowski").text(movie.Title);
  $(".titleBigLebowski").append("<img src= \"" + movie.Poster + "\"/>");
  $(".actorBigLebowski").text("Starring: " + movie.Actors);
  $(".directorBigLebowski").text("Directed by: " + movie.Director);
  $(".plotBigLebowski").text(movie.Plot);
  $(".yearBigLebowski").text("The dude has abided since " + movie.Year);
}
//This function will put the information about Me and You and Everyone We Know on the page
function displayMeAndYou(movie){
  $(".titleMeAndYou").text(movie.Title);
  $(".titleMeAndYou").append("<img src= \"" + movie.Poster + "\"/>");
  $(".actorMeAndYou").text("Starring: " + movie.Actors);
  $(".directorMeAndYou").text("Directed by: " + movie.Director);
  $(".plotMeAndYou").text(movie.Plot);
  $(".yearMeAndYou").text("))<>(( forever starting in " + movie.Year);
}
//Tried to use this as a function to pass each movie into, but the movies kept getting rewritten as it was passed through.
//I worked on trying many different things to assign it to each div class specifically and none of the things I tried worked for me.
//Still think there is a way that could make it work, but the individual functions above are getting the results I want.
// function displayMovie(movie){
//   $(".title").text(movie.Title);
//   $(".title").append("<img src= \"" + movie.Poster + "\"/>");
//   $(".actor").text(movie.Actors);
//   $(".director").text(movie.Director);
//   $(".plot").text(movie.Plot);
//   $(".year").text(movie.Year);
// }
