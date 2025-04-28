// 1️⃣ Greeting Text Change
const greet = document.getElementById("greeting");

if (greet) {
    const examples = ["Namaste!", "Hola!", "Konnichiwa!", "Bonjour!", "Hello!"];
    let index = 0;

    setInterval(() => {
        greet.textContent = examples[index];  
        index = (index + 1) % examples.length;  
    }, 1500);
} else {
    console.error("Element with ID 'greeting' not found!");
}

// 2️⃣ Smooth Scrolling for Navigation
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener("click", function(event) {
        event.preventDefault();
        const targetId = this.getAttribute("href").substring(1);  // Remove the '#' to get the id
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({ behavior: "smooth" });
        }
    });
});

function showContent(section) {
    // Hide all content items
    const contentItems = document.querySelectorAll('.content-item');
    contentItems.forEach(item => {
      item.classList.remove('active');
    });
  
    // Show the selected section
    const selectedContent = document.getElementById(section);
    selectedContent.classList.add('active');
  }

  
function showContent(section) {
    const textArea = document.getElementById('text-area');
    let html = '';
  
    if (section === 'school') {
      html = `<h3>School</h3><p>I completed my schooling at XYZ High School with a focus on Science and Mathematics.</p>`;
    } else if (section === 'college') {
      html = `<h3>College</h3><p>I pursued my Bachelor's degree in Computer Science from ABC University.</p>`;
    } else if (section === 'certificates') {
      html = `<h3>Certificates</h3><p>Certified in Front-End Development from Meta and participated in the Smart India Hackathon 2023.</p>`;
    }
  
    textArea.innerHTML = html;
  }

document.addEventListener('DOMContentLoaded', function() {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.3
  };

  const appearOnScroll = new IntersectionObserver(function(entries) {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('visible');
      } else {
        entry.target.classList.remove('visible');
      }
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });
});
