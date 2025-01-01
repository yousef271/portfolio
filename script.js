const texts = [
            "Bot Programmer (Python).",
            "Web Programmer."
];
let index = 0;

function typeText(text, callback) {
    const animationElement = document.getElementById('animation');
    animationElement.innerHTML = ''; // Clear previous text
    animationElement.style.borderRight = '0'; // Hide cursor during typing
    let i = 0;
    const typingSpeed = 100; // Typing speed in milliseconds
    
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            animationElement.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            animationElement.style.borderRight = '.15em solid #00abeb'; // Show cursor after typing
            setTimeout(callback, 1000); // Wait before changing text
        }
    }, typingSpeed);
}

function startTyping() {
    typeText(texts[index], () => {
        index = (index + 1) % texts.length; // Cycle through texts
        startTyping(); // Start typing the next text
    });
}

startTyping(); // Initiate the typing effect