
$( document ).ready(function() {
    
    
    var body = document.getElementsByTagName("body")[0];
    var container = document.getElementsByTagName("div")[0];
    var wrapperButton = document.getElementsByTagName('div')[1];
    var button = document.getElementsByTagName('button')[0];
    var buttonTopRepozit = document.createElement('button');
    var buttonTopStars = document.createElement('button');
    var wrapTopRepozit = document.createElement('div');
    var wrapTopStars = document.createElement('div');
    
    button.addEventListener('click', creaButtonTopStars);
    button.addEventListener('click', creaButtonTopRepozit);
    button.addEventListener('click', requestJSON);
    
    
    function creaButtonTopStars() {
        container.appendChild(wrapTopStars);
        wrapTopStars.appendChild(buttonTopStars);
        buttonTopStars.innerHTML = "TOP REPOSITORY";
        buttonTopStars.addEventListener('click', requestJSONtopStars);
    };
    
    function creaButtonTopRepozit() {
        container.appendChild(wrapTopRepozit);
        wrapTopRepozit.appendChild(buttonTopRepozit);
        buttonTopRepozit.innerHTML = "TOP RATINGS";
        buttonTopRepozit.addEventListener('click', requestJSONtopRepozit)

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
          success: getTopUsers,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
    function requestJSONtopRepozit() {
     $.ajax({
          url: "https://api.github.com/search/repositories?q=language:JavaScript",
          success: getTopRepozitory,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
    
    function getUsers(data) {
            var mainDiv = document.createElement("div");
            wrapperButton.appendChild(mainDiv);
        
        for(var i = 0; i < data.length; i++){
            var callLink = document.createElement('a');
            mainDiv.appendChild(callLink);
            callLink.href = data[i].html_url;
            callLink.target = '_blank';
            callLink.className = 'a';
            var image = document.createElement("img");
            image.src = data[i].avatar_url;
            image.width = '100';
            callLink.appendChild(image);
            var login = document.createElement("h3");
            login.className = "info-text";
            login.innerHTML = data[i].login;
            callLink.appendChild(login);
        }
            
//                console.log(data);
    }
    function getTopUsers(data) {
        console.log(data);
        var mainDiv = document.createElement("div");
        wrapTopStars.appendChild(mainDiv);
        
        for(var i = 0; i < data.items.length; i++){
            var callLink = document.createElement('a');
            mainDiv.appendChild(callLink);
            callLink.href = data.items[i].owner.html_url;
            callLink.target = '_blank';
            callLink.className = 'a';
            var image = document.createElement("img");
            image.src = data.items[i].owner.avatar_url;
            image.width = '100';
            callLink.appendChild(image);
            var login = document.createElement("h3");
            login.className = "info-text";
            login.innerHTML = data.items[i].owner.login;
            callLink.appendChild(login);
        }
            
//                console.log(data);
    }
    
    function getTopRepozitory(data) {
        console.log(data);
        var mainDiv = document.createElement("div");
        wrapTopRepozit.appendChild(mainDiv);
        
        for(var i = 0; i < data.items.length; i++){
            var callLink = document.createElement('a');
            mainDiv.appendChild(callLink);
            callLink.href = data.items[i].owner.html_url;
            callLink.target = '_blank';
            callLink.className = 'a';
            var image = document.createElement("img");
            image.src = data.items[i].owner.avatar_url;
            image.width = '100';
            callLink.appendChild(image);
            var login = document.createElement("h3");
            login.className = "info-text";
            login.innerHTML = data.items[i].owner.login;
            callLink.appendChild(login);
        }
            
//                console.log(data);
    }
    
    
    
    
});
