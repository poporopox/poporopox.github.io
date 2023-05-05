//replace with your user:
const GITHUB_URL = "https://api.github.com/users/poporopox";

fetch(GITHUB_URL)
  .then(function(response) {
    return response.json();
  })
  .then(function (data) {
    const profileImage = document.getElementById("profile-image");
    profileImage.src=
    data.avatar_url
    
    const profileName = document.getElementById("profile-name");
    profileName.innerHTML=data.login 
    
    
  });

  var rotate = document.getElementById('profile-image');
  rotate.addEventListener('click', function() {
    rotate.classList.add('rotated');

  });




const langs_used = ["HTML", " CSS", " JavaScript",];
const footerDec=["This page was built using: "]

function language(array) {
  return array.length > 1 ? `${array.slice(0, array.length - 1).join(", ")} and ${array.slice(array.length - 1)}` : `${array}`;
};

document.querySelector('footer').innerText = footerDec+ language(langs_used);



  


  




