
$( document ).ready(function() {
	var url = "https://api.github.com/search/";
    var body = document.getElementsByTagName("body")[0];
    var container = document.getElementById("container");
    var wrapperContainer = document.getElementById("wrapper");
    var button = document.getElementsByTagName('button')[0];
	
    var buttonTopReposit = document.createElement('button');
    var buttonTopStars = document.createElement('button');
    var buttonTopCommit = document.createElement('button');
    var wrapTopReposit = document.createElement('div');
    var wrapTopStars = document.createElement('div');
    var wrapTopCommit = document.createElement('div');
    
    button.addEventListener('click', function(){
		getButtons();
		creaButtonTopStars();
		creaButtonTopReposit();
		creaButtonTopCommit();
		
	});
	
    
    function creaButtonTopStars() {
        container.appendChild(wrapTopStars);
        wrapTopStars.appendChild(buttonTopStars);
        buttonTopStars.innerHTML = "Top repository";
        buttonTopStars.addEventListener('click', requestJSONtopStars);
    };
    
    function creaButtonTopReposit() {
        container.appendChild(wrapTopReposit);
        wrapTopReposit.appendChild(buttonTopReposit);
        buttonTopReposit.innerHTML = "Top ratings";
        buttonTopReposit.addEventListener('click', requestJSONtopReposit)

    };
	
	function creaButtonTopCommit() {
        container.appendChild(wrapTopCommit);
        wrapTopCommit.appendChild(buttonTopCommit);
        buttonTopCommit.innerHTML = "Top commit";
        buttonTopCommit.addEventListener('click', requestJSONTopCommit);
    };
    
    function getButtons() {
    	button.style.display = 'none';
    };
    
    function requestJSONtopStars() {
     $.ajax({
          url: url + "repositories?q=js&sort=stars&order=desc",
          success: getTopUsers,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
    function requestJSONtopReposit() {
     $.ajax({
          url: url + "user?q=language:JavaScript&sort=stars&order=asc",
          success: getTopRepository,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
	 function requestJSONTopCommit() {
     $.ajax({
          url: url + "user?q=language:JavaScript&sort=stars&order=asc",
          success: getTopCommit,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
    function displayUsers(data) {
            
            var mainDiv = document.createElement("div");
            wrapperContainer.appendChild(mainDiv);
        }
	
    function getTopUsers(data) {
        console.log(data);
        var mainDiv = document.createElement("div");
        wrapTopStars.appendChild(mainDiv);
        
        for(var i = 0; i < data.items.length; i++){
            var callLink = document.createElement('a');
            mainDiv.appendChild(callLink);
            callLink.href = data.items[i].owner.html_url;
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
            
    }
    
    function getTopRepository(data) {
        console.log(data);
        var mainDiv = document.createElement("div");
        wrapTopReposit.appendChild(mainDiv);
        
        for(var i = 0; i < data.items.length; i++){
            var callLink = document.createElement('a');
            mainDiv.appendChild(callLink);
            callLink.href = data.items[i].owner.html_url;
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
            
    }
	
	function getTopCommit(data) {
        console.log(data);
        var mainDiv = document.createElement("div");
        wrapTopCommit.appendChild(mainDiv);
        
        for(var i = 0; i < data.items.length; i++){
            var callLink = document.createElement('a');
            mainDiv.appendChild(callLink);
            callLink.href = data.items[i].owner.html_url;
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
            
    }
    
   // button.removeEventListener('click', requestJSON);
   // button.removeEventListener('click', creaButtonTopStars);
   // button.removeEventListener('click', creaButtonTopReposit);
    
    
});
