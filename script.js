
$( document ).ready(function() {
    
    
    var body = document.getElementsByTagName("body")[0];
    var container = document.getElementsByTagName("div")[0];
    var button = document.getElementsByTagName('button')[0];
    var buttonTopRepozit = document.createElement('button');
    var buttonTopStars = document.createElement('button');
    
    button.addEventListener('click', creaButtonTopStars);
    button.addEventListener('click', creaButtonTopRepozit);
    button.addEventListener('click', requestJSON);
    buttonTopStars.addEventListener('click', requestJSONtopStars);
    buttonTopRepozit.addEventListener('click', requestJSONtopRepozit);
    
    function creaButtonTopStars() {
        container.appendChild(buttonTopStars);
        buttonTopStars.innerHTML = "TOP REPOSITORY";
    };
    
    function creaButtonTopRepozit() {
        container.appendChild(buttonTopRepozit);
        buttonTopRepozit.innerHTML = "TOP RATINGS"
    };
    
    function requestJSON() {
     $.ajax({
          url: "https://api.github.com/users",
          success: getUsers,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
    function requestJSONtopStars() {
     $.ajax({
          url: "https://api.github.com/search/repositories?q=js&sort=stars&order=desc",
          success: getUsers,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
    
    function getUsers(data) {
        
        for(var i = 0; i < data.length; i++){
            console.log(data[i]);
            var div = document.createElement("div");
            container.appendChild(div);
            div.className = "info";
            var image = document.createElement("img");
            image.src = data[i].avatar_url;
            image.width = '100';
            div.appendChild(image);
            var login = document.createElement("h3");
            login.className = "info-text";
            login.innerHTML = data[i].login;
            div.appendChild(login);
        }
            
//                console.log(data);
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