let textElement = document.querySelector(".text");
let texts = ["Frontend Developer","Web Developer","Freelancer"];
var currentTextIndex = 0;
var currentLetterIndex = 0;

function displayNextLetter() {
  var currentText = texts[currentTextIndex];
  if (currentLetterIndex < currentText.length) {
    var nextLetter = currentText.charAt(currentLetterIndex);
    textElement.textContent += nextLetter;
    currentLetterIndex++;
  } else {
    // Move to the next text after displaying all letters
    currentTextIndex = (currentTextIndex + 1) % texts.length;
    currentLetterIndex = 0;
    textElement.textContent = ""; // Clear the previous text
  }
}

setInterval(displayNextLetter, 100);

/* 
let skilsContent = select('.skills-content');
  if (skilsContent) {
    new Waypoint({
      element: skilsContent,
      offset: '80%',
      handler: function(direction) {
        let progress = select('.progress, .progress-bar', true);
        progress.forEach((el) => {
          el.style.width = el.getAttribute('aria-valuenow') + '%'
        });
      }
    })
  }
 */
   const scrollToTop = document.querySelector(".scrollTop")
   scrollToTop.addEventListener("click",()=>{
    window.scrollTo(0,0);
   })

   window.addEventListener('scroll', function() {
    let header = document.querySelector('header');
    let scrollPosition = window.scrollY || window.pageYOffset;
    let logo = document.querySelector(".logo");
    let menu = document.querySelectorAll("#test");
    
  
    if (scrollPosition > 0) {
      header.style.backgroundColor = 'aqua';
      logo.style.color = "rgb(1,13,26)"
      menu.forEach((el)=>{
        el.style.color="rgb(1,13,26)";
      }); /* Change the color when scrolling */
    } else {
      header.style.backgroundColor = 'rgb(1,13,26)';
      logo.style.color = "white" 
      menu.forEach((el)=>{
        el.style.color="white";
      });/* Revert back to the initial color */
    }
  });

  
  let preloader = document.querySelector("#preloader");
  setTimeout(()=>{
    preloader.remove();
  },200)


  