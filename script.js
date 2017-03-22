
$( document ).ready(function() {
  var button = document.getElementsByTagName('button')[0];

button.addEventListener('click', requestJSON);

    function requestJSON() {
     $.ajax({
          url: "https://api.github.com/users",
          success: getUsers,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    }
    
    function getUsers(data) {
        
        var body = document.getElementsByTagName("body")[0];
        for(var i = 0; i < data.length; i++){
            console.log(data[i]);
            var div = document.createElement("div");
            body.appendChild(div);
            var image = document.createElement("img");
            image.src = data[i].avatar_url;
            image.width = '50';
            div.appendChild(image);
            var login = document.createElement("h3");
            login.innerHTML = data[i].login;
            div.appendChild(login);
        }
            
        
//        console.log(data);
    }
    
    
    
    
});
//"https://avatars1.githubusercontent.com/u/34?v=3"
//events_url
//:
//"https://api.github.com/users/nitay/events{/privacy}"
//followers_url
//:
//"https://api.github.com/users/nitay/followers"
//following_url
//:
//"https://api.github.com/users/nitay/following{/other_user}"
//gists_url
//:
//"https://api.github.com/users/nitay/gists{/gist_id}"
//gravatar_id
//:
//""
//html_url
//:
//"https://github.com/nitay"
//id
//:
//34
//login
//:
//"nitay"
//organizations_url
//:
//"https://api.github.com/users/nitay/orgs"
//received_events_url
//:
//"https://api.github.com/users/nitay/received_events"
//repos_url
//:
//"https://api.github.com/users/nitay/repos"
//site_admin
//:
//false
//starred_url
//:
//"https://api.github.com/users/nitay/starred{/owner}{/repo}"
//subscriptions_url
//:
//"https://api.github.com/users/nitay/subscriptions"
//type
//:
//"User"
//url
//:
//"https://api.github.com/users/nitay"