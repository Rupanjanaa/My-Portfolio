if ('scrollRestoration' in history) {
  history.scrollRestoration = 'manual';
}

window.addEventListener("DOMContentLoaded", function () {
  VANTA.NET({
    el: "#vanta-bg",
    mouseControls: true,
    touchControls: true,
    gyroControls: false,
    minHeight: 200.00,
    minWidth: 200.00,
    scale: 1.00,
    scaleMobile: 1.00,

    // ✔️ Custom configuration you requested:
    color: 0xa10863,
    backgroundColor: 0x23153c,
    points: 10,
    maxDistance: 20,
    spacing: 20,
    showDots: true
  });
});


function showLoader(event) {
  event.preventDefault();
  document.getElementById("loader").style.display = "block";

  setTimeout(() => {
    window.location.href = event.target.href;
  }, 2000);
}
window.addEventListener("beforeunload", () => {
  window.scrollTo(0, 0);
});

const cursor = document.querySelector('.cursor-follower');

document.addEventListener('mousemove', (e) => {
  cursor.style.transform = `translate(${e.clientX - 10}px, ${e.clientY - 10}px)`;
});


document.addEventListener("DOMContentLoaded", function () {
  const nav = document.querySelector("nav");
  const scrollThreshold = 200;

  // Force scroll to top ASAP
  window.scrollTo(0, 0);

  // Start centered
  nav.style.left = "50%";
  nav.style.transform = "translateX(-50%)";
  nav.style.right = "auto";

  // Apply smooth transition to right property too
  nav.style.transition = "right 0.5s ease, left 0.5s ease, transform 0.5s ease";

  // Scroll handler
  window.addEventListener("scroll", () => {
    const scrollY = window.scrollY;
    const progress = Math.min(scrollY / scrollThreshold, 1);

    if (progress > 0) {
      nav.classList.add("scrolled");

      const endRight = 30;
      const newRight = endRight * progress;

      nav.style.left = "auto";
      nav.style.transform = "none";
      nav.style.right = `${newRight}px`;

      if (progress >= 0.98) {
        nav.classList.add("final-position");
      } else {
        nav.classList.remove("final-position");
      }
    } else {
      // Smooth slide back to center
      nav.classList.remove("scrolled", "final-position");
      nav.style.right = "auto";
      nav.style.left = "50%";
      nav.style.transform = "translateX(-50%)";
    }
  });
});

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
    const textArea = document.getElementById('text-area');
    const image = document.getElementById('education-img');
    let html = '';
    let imageSrc = '';

    if (section === 'school') {
      html = `<h3>School</h3><p>I completed my schooling from Kendriya Vidyalaya, EAC,
    Upper Shillong, Shillong with PCM in higher secondary.</p>`;
      imageSrc = 'image2.png';
    } else if (section === 'college') {
      html = `<h3>College</h3><p>I did my B.Tech in Computer Science and Engineering from Amity University, Kolkata. (2021 -2025)</p>`;
      imageSrc = 'image1.png';
    } else if (section === 'certificates') {
      html = `<h3>Certificates</h3><p>I completed the 'Introduction to Front-End Development' course on Coursera, offered by Meta.
      I have also earned a beginner-level SQL certification from HackerRank.</p>`;
      imageSrc = 'meta.jpg';
    }

    textArea.innerHTML = html;
    image.src = imageSrc;
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

