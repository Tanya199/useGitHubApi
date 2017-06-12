
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
	
	var isUsersRequestDone;
	var isReposStarsRequestDone;
   	var isReposForksRequestDone;
    
    button.addEventListener('click', function(){
		getButtons();
		creaButtonTopStars();
		creaButtonTopReposit();
		creaButtonTopCommit();
	});
	
    
    function creaButtonTopStars() {
        container.appendChild(wrapTopStars);
        wrapTopStars.appendChild(buttonTopStars);
        buttonTopStars.innerHTML = "Top users by stars";
        buttonTopStars.addEventListener('click', requestJSONtopStars);
    };
     
    function creaButtonTopReposit() {
        container.appendChild(wrapTopReposit);
        wrapTopReposit.appendChild(buttonTopReposit);
        buttonTopReposit.innerHTML = "Top repos by stars";
        buttonTopReposit.addEventListener('click', requestJSONtopReposit)
	};
	
	function creaButtonTopCommit() {
        container.appendChild(wrapTopCommit);
        wrapTopCommit.appendChild(buttonTopCommit);
        buttonTopCommit.innerHTML = "Top repos by forks";
        buttonTopCommit.addEventListener('click', requestJSONTopCommit);
    };
    
    function getButtons() {
    	button.style.display = 'none';
    };
    
    function requestJSONtopStars() {
		if(isUsersRequestDone) return;
     $.ajax({
          url: url + "users?q=language:JavaScript&sort=stars&order=asc",
          success: getTopUsers,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
    function requestJSONtopReposit() {
		if(isReposStarsRequestDone) return;
     $.ajax({
          url: url + "repositories?q=js&sort=stars&order=desc",
          success: getTopRepository,
          error: function(error) {
            console.error('ERROR in get request with status ' + error.status);
     }
    }) 
    };
    
	 function requestJSONTopCommit() {
		 if(isReposForksRequestDone) return;
     $.ajax({
          url: url + "repositories?q=js&sort=forks&order=desc",
          success: getTopReposForks,
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
		if(data && data.items.length > 0){
			isUsersRequestDone = true;
		}
		var mainDiv = document.createElement("div");
        wrapTopStars.appendChild(mainDiv);
        
        for(var i = 0; i < data.items.length; i++){
            var callLink = document.createElement('a');
            mainDiv.appendChild(callLink);
            callLink.href = data.items[i].html_url;
            callLink.className = 'a';
            var image = document.createElement("img");
            image.src = data.items[i].avatar_url;
            image.width = '100';
            callLink.appendChild(image);
            var login = document.createElement("h3");
            login.className = "info-text";
            login.innerHTML = data.items[i].login;
            callLink.appendChild(login);
        }
            
    }
    
    function getTopRepository(data) {
		if(data && data.items.length > 0){
		   isReposStarsRequestDone = true;
	   }
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
	
	function getTopReposForks(data) {
		if(data && data.items.length > 0){
		   isReposForksRequestDone = true;
	   }
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
    
    
});
