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
        const targetId = this.getAttribute("href").substring(1);
        const targetElement = document.getElementById(targetId);
        
        if (targetElement) {
            window.scrollTo({
                top: targetElement.offsetTop - 50,
                behavior: "smooth"
            });
        }
    });
});