// var userAPI = "https://api.github.com/users/brentoneill";
// var reposAPI = "https://api.github.com/users/brentoneill/repos";
// var activityAPI = "https://api.github.com/users/brentoneill/events";

var userAPI = "assets/JSON/user.json";
var reposAPI = "assets/JSON/repos.json";
var activityAPI = "assets/JSON/events.json";


var createPage = {

  init: function() {
    createPage.initStyling();
    createPage.initEvents();
    console.log("page initialized!");
  },

  initStyling: function () {
    //initialize styling here...
    console.log("styling initialized!")
    reposJSON = jQuery.getJSON(reposAPI, function(parsedReposJSON){
      createPage.renderAllRepos(parsedReposJSON);
    });
    userJSON = jQuery.getJSON(userAPI, function(parsedUserJSON){
      createPage.renderUser(parsedUserJSON);
    });
    activityJSON = jQuery.getJSON(activityAPI, function(parsedActivityJSON){
      var wherePush = _.where(parsedActivityJSON, {type:"PushEvent"});
      var whereCreate = _.where(parsedActivityJSON, {type:"CreateEvent"});
      var whereDelete = _.where(parsedActivityJSON, {type:"DeleteEvent"});
      console.log(wherePush);
      console.log(whereCreate);
      console.log(whereDelete);
      createPage.renderAllActivity(wherePush);
    });

  },
  initEvents: function () {
    //initialize events here...
    console.log("events initialized!");

    //Hide repos/activity;


  },
  renderUser: function(user, index, array) {
    var compiled = _.template(templates.user);
    $('.vcard-col').append(compiled(user));
  },
  renderRepo: function(repo, index, array) {
    var compiled = _.template(templates.repo);
    $('.feed1').append(compiled(repo));

  },
  renderAllRepos: function(repoData) {
    _.each(repoData, createPage.renderRepo);
  },
  renderActivity: function(activity, index, array) {
    var compiled = _.template(templates.activity);
    $('.feed2').append(compiled(activity));
    console.log("activity rendered");
  },
  renderAllActivity: function(activityData) {
    _.each(activityData, createPage.renderActivity);
  }
}


$(document).ready(function() {
  createPage.init();

});
