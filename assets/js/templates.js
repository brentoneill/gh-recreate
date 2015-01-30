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
    "<p><span class='octicon octicon-link'></span><a href='<%= blog %>'> <%= blog %></a></p>",
    "<p><span class='octicon octicon-clock'></span> Joined on <span class='date'> <% print(formatUserDate(created_at)) %> </span></p>",
  "</div>",
  "<div class='user-stats'>",
  "<a href='<%= html_url %>/followers'>",
    "<strong><%= followers %></strong>",
    "<span class='small'>Followers</span>",
  "</a>",
  "<a href='#'>",
    "<strong>0</strong>",
    "<span class='small'>Starred</span>",
  "</a>",
  "<a href='<%= html_url %>/following'>",
    "<strong><%= following %></strong>",
    "<span class='small'>Following</span>",
  "</a>",
  "</div>"
].join("");


templates.pushAct = [
  "<div class='alert'>",
  "<span class='mega-octicon octicon-git-commit'></span>",
    "<div class='alert-body'>",
      "<div class='time'><% print(moment(created_at).fromNow()) %></div>",
      "<div class='title'>",
        "<a href='https://github.com/<%= actor.login %>'><%= actor.login %></a>",
        "<b> pushed to </b>",
        "<a href='https://github.com/<%= repo.name %>/tree/<%= payload.ref %>'><%= payload.ref %></a>",
        "<b> at </b>",
        "<a href='https://github.com/<%= repo.name %>' ><%= repo.name %></a>",
      "</div>",
      "<div class='details'>",
        "<a href='https://github.com/<%= actor.login %>'><img src=<%= actor.avatar_url %></a>",
        "<div class='commit-details'>",
          "<a href='https://github.com/<%= repo.name%>/commit/<%= payload.head %>' class='commit-link'> <% print(shrink7(payload.head)) %></a>",
          "<span class='commit-message'> <%= payload.commits[0].message %></span>",
        "</div>",
      "</div>",
    "</div>",
  "</div>"
].join("");

templates.branchAct = [
  "<div class='alert'>",
    "<div class='alert-body'>",
      "<span class='octicon octicon-git-branch'></span>",
      "<a href='https://github.com/<%= actor.login %>'><%= actor.login %></a>",
      "<span> created branch </span>",
      "<a href='http://github.com/<%= repo.name %>/tree/<%= payload.master_branch %>'><span class='branch-link'><span class='octicon octicon-git-branch'></span> <%= payload.ref %> </a>",
      " at ",
      "<a href='http://github.com/<%= repo.name %>' > <%= repo.name %> </a>",
      "<div class='time'><% print(moment(created_at).fromNow()) %></div>",
    "</div>",
  "</div>"
].join("");

templates.repoAct = [
"<div class='alert'>",
  "<div class='alert-body'>",
    "<span class='octicon octicon-repo'></span>",
    "<a href='https://github.com/<%= actor.login %>'><%= actor.login %></a>",
    "<span> created repository at </span>",
    "<a href='http://github.com/<%= repo.name %>' > <%= repo.name %> </a>",
    "<div class='time'><% print(moment(created_at).fromNow()) %></div>",
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
  "<h3 class='repo-list-name'><a href='<%= html_url %>' ><%= name %></a></h3>",
  "<p class='repo-list-desc'><%= description %></p>",
  "<p class='repo-list-time'>Updated <% print(moment(created_at).fromNow()) %>",
  "</li>"
].join("");
