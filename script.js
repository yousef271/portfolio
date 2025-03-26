const texts = [
            "Bot Programmer (Python).",
            "Web Programmer.",
            "Own Two Servers",
            "High Experienced HR Staff"
];
let index = 0;

function typeText(text, callback) {
    const animationElement = document.getElementById('animation');
    animationElement.innerHTML = '';
    animationElement.style.borderRight = '0';
    let i = 0;
    const typingSpeed = 100;
    
    const typingInterval = setInterval(() => {
        if (i < text.length) {
            animationElement.innerHTML += text.charAt(i);
            i++;
        } else {
            clearInterval(typingInterval);
            animationElement.style.borderRight = '.15em solid #00abeb'; 
            setTimeout(callback, 1000); 
        }
    }, typingSpeed);
}

function startTyping() {
    typeText(texts[index], () => {
        index = (index + 1) % texts.length; 
        startTyping(); 
    });
}

startTyping();
