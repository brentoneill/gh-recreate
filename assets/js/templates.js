var templates = {};


templates.user = [
  "<img class='avatar' src=<%= avatar_url %> />",
  "<div class='profile-names'>",
    "<h2 class='prof-name'><%= name %></h2>",
    "<h3 class='username'><%= login %></h3>",
  "</div>",
  "<div class='user-info'>",
    "<p><span class='octicon octicon-location'></span> <%= location %></p>",
    "<p><span class='octicon octicon-mail'></span><a href='mailto:<%= email %>'> <%= email %></a></p>",
    "<p><span class='octicon octicon-link'></span><a href='<%= blog %>'> http://blogaddress.com</a></p>",
    "<p><span class='octicon octicon-clock'></span> Joined on <span class='date'> <%= created_at %> </span></p>",
  "</div>",
  "<div class='user-stats'>",
  "<a href='<%= html_url %>/followers'>",
    "<strong><%= followers %></strong>",
    "<span class='small'>Followers</span>",
  "</a>",
  "<a href='<%= starred_url %>'>",
    "<strong>0</strong>",
    "<span class='small'>Starred</span>",
  "</a>",
  "<a href='<%= html_url %>/following'>",
    "<strong><%= following %></strong>",
    "<span class='small'>Following</span>",
  "</a>",
  "</div>"
].join("");


templates.activity = [
  "<div class='alert'>",
    "<div class='alert-body'>",
      "<span class='mega-octicon octicon-git-commit'></span>",
      "<div class='time'><%= created_at %></div>",
      "<div class='title'>",
        "<a href='https://github.com/<%= actor.login %>'><%= actor.login %></a>",
        "<span> pushed to </span>",
        "<a href='branch-link'><%= payload.ref %></a>",
        "<span> at </span>",
        "<a href='repo-link''><%= repo.name %></a>",
      "</div>",
      "<div class='details'>",
        "<a href='https://github.com/<%= actor.login %>'><img src=<%= actor.avatar_url %></a>",
        "<div class='commit-details'>",
          "<a href='#' class='commit-link'><%= payload.head %></a>",
          //"<span class='commit-message'><%= payload.commits.message %></span>",
        "</div>",
      "</div>",
    "</div>",
  "</div>"
].join("");


templates.repo = [
  "<li class='repo-item'>",
  "<div class='repo-list-stats'>",
    "<span class='language'><%= language %></span>",
    "<a class='stat-item' href='#'><span class='octicon octicon-star'></span> <%= stargazers_count %></a>",
    "<a class='stat-item' href='#'><span class='octicon octicon-git-branch'></span> <%= forks_count %></a>",
  "</div>",
  "<h3 class='repo-list-name'><a href=<% html_url %>><%= name %></a></h3>",
  "<p class='repo-list-desc'><%= description %></p>",
  "<p class='repo-list-time'><%= pushed_at %>",
  "</li>"
].join("");
