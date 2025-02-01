const greet = document.getElementById("greeting");

if (greet) {
    const examples = ["Namaste", "Hola", "Konnichiwa", "Bonjour", "Hello"];
    let index = 0;

    setInterval(() => {
        greet.textContent = examples[index];  
        index = (index + 1) % examples.length;  
    }, 2000);
} else {
    console.error("Element with ID 'greeting' not found!");
}

