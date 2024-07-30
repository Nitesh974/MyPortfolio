

/* For Dark Mode Toggle */

var content = document.getElementsByTagName('body')[0];
var darkMode = document.getElementById('dark-change');
darkMode.addEventListener('click', function(){
    darkMode.classList.toggle('active');
    content.classList.toggle('night');
})

/*For Hamburger Menu of smaller Devices */

const toggleButton = document.getElementById('Togglemenu');
const navLinks = document.getElementById('Toggling');

toggleButton.addEventListener('click',()=>{
    navLinks.classList.toggle('active');
})

/*For Text Animation Done */
  const words = ["Active Learner","Frontend Developer", "Backend Developer" , "DSA Enthusiast" ,"Competitive Coder"];
  let wordIndex = 0;
  const dynamicText = document.getElementById("dynamic-text");

  function changeWord() {
    dynamicText.style.opacity = 0; // Start fade-out
    setTimeout(() => {
      wordIndex = (wordIndex + 1) % words.length;
      dynamicText.textContent = words[wordIndex];
      dynamicText.style.opacity = 1; // Start fade-in
    }, 1000); //CSS transition duration
  }

  setInterval(changeWord, 2500);
