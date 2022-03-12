var response = null;

document.getElementsByTagName('button')[0].addEventListener('click', function(r){
  getUser(document.getElementsByTagName('input')[0].value); });

function getUser(username){
    // Fetch Github API
  fetch('https://api.github.com/users/' + username)
  // Promises
  .then(function(r){
    return r.json();
  })
  .then(function(j){
    response = j;
    profileData();
  })
}
  function profileData(){
    
    document.getElementById("loader").style='display : none';
   document.getElementById("avatar").src=response.avatar_url;
  
   document.getElementById("username").innerText=response.login;
   document.getElementById("location").innerText=response.location;
   document.getElementById("bio").innerText=response.bio;
   
 
  }

