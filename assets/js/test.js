var userAPI = "https://api.github.com/users/brentoneill";
var reposAPI = "https://api.github.com/users/brentoneill/repos";
var activityAPI = "https://api.github.com/users/brentoneill/events";

// var userAPI = "assets/JSON/user.json";
// var reposAPI = "assets/JSON/repos.json";
// var activityAPI = "assets/JSON/events.json";


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
      parsedReposJSON = _.sortBy(parsedReposJSON, 'created_at').reverse();
      console.log(parsedReposJSON);
      createPage.renderAllRepos(parsedReposJSON);
    });
    userJSON = jQuery.getJSON(userAPI, function(parsedUserJSON){
      createPage.renderUser(parsedUserJSON);
    });
    activityJSON = jQuery.getJSON(activityAPI, function(parsedActivityJSON){
      // var wherePush = _.where(parsedActivityJSON, {type:"PushEvent"});
      // var whereCreate = _.where(parsedActivityJSON, {type:"CreateEvent"});
      // var whereDelete = _.where(parsedActivityJSON, {type:"DeleteEvent"});
      // var pluckPush = _.pluck(parsedActivityJSON, 'PushEvent'); //gets time stamp for all activities
      // console.log(pluckPush);

      var sortedActJSON = _.sortBy(parsedActivityJSON, 'updated_at');
      createPage.renderAllActivity(sortedActJSON);
    });

  },
  initEvents: function () {
    //initialize events here...
    console.log("events initialized!");

    //Hide repos/activity;
    $('.nav-tabs').on('click', '.repos-navbut', function (event) {
      event.preventDefault();
      $('.feed2').removeClass('active');
      $('.feed1').addClass('active');
      $('.search-bar').removeClass('hidden');
    });
    $('.nav-tabs').on('click', '.activity-navbut', function (event) {
      event.preventDefault();
      $('.feed1').removeClass('active');
      $('.feed2').addClass('active');
      $('.search-bar').addClass('hidden');
    });


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
  renderActivity: function(event, index, array) {
    if(event.type == "PushEvent") {
      var compiled = _.template(templates.pushAct);
      $('.feed2').append(compiled(event));
    }
    else if(event.payload.ref_type == "branch") {
      var compiled = _.template(templates.branchAct);
      $('.feed2').append(compiled(event));
    }
    else if(event.payload.ref_type == "repository") {
      var compiled = _.template(templates.repoAct);
      $('.feed2').append(compiled(event));
    }

    console.log("activity rendered");
  },
  renderAllActivity: function(activityData) {
    _.each(activityData, createPage.renderActivity);
  }
}


$(document).ready(function() {
  createPage.init();

});
