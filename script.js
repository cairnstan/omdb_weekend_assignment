$(function(){
  var meAndYou = {};
  var tankGirl = {};
  var bigLebowski = {};
  //ajax call for Me and You and Everyone We Know
  $.ajax({
    url: "http://www.omdbapi.com/?t=me+and+you+and+everyone+we+know&y=&plot=short&r=json",
    type: "GET"
  }).done(function(response){
    console.log(response);
    meAndYou = response;
    // displayMovie(meAndYou);
  })
  //ajax call for Tank Girl
  $.ajax({
    url: "http://www.omdbapi.com/?t=tank+girl&y=&plot=short&r=json",
    type: "GET"
  }).done(function(response){
    console.log(response);
    tankGirl = response;
    $(".girlTank").append(displayMovie(tankGirl));
  })
  //ajax call for Big Lebowski
  $.ajax({
    url: "http://www.omdbapi.com/?t=big+lebowski&y=&plot=short&r=json",
    type: "GET"
  }).done(function(response){
    console.log(response);
    bigLebowski = response;
    // displayMovie(bigLebowski);
  })
  function displayMovie(movie){
    $(".title").text(movie.Title);
    // $(".poster").text(movie.Poster);
    $(".actor").text(movie.Actors);
    $(".director").text(movie.Director);
    $(".plot").text(movie.Plot);
    $(".year").text(movie.Year);
  }
});
