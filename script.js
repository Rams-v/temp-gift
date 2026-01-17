/* --- JAVASCRIPT LOGIC --- */
const yesBtn = document.getElementById('yesBtn');
const noBtn = document.getElementById('noBtn');
const seeGiftBtn = document.getElementById('seeGiftBtn');

const questionSection = document.getElementById('question-section');
const successMessage = document.getElementById('success-message');
const giftSection = document.getElementById('gift-section');
const heartsContainer = document.getElementById('hearts-container');

// 1. Question Page -> Yay Page
yesBtn.addEventListener('click', () => {
    questionSection.style.display = 'none';
    successMessage.style.display = 'block';
    createHearts(50); 
});

// 2. Yay Page -> Final Gift Page
seeGiftBtn.addEventListener('click', () => {
    successMessage.style.display = 'none';
    giftSection.style.display = 'block';
    window.scrollTo(0,0);
});

// 3. Run Away Button Logic
noBtn.addEventListener('mouseover', moveButton);
noBtn.addEventListener('touchstart', moveButton);

function moveButton() {
    const btnRect = noBtn.getBoundingClientRect();
    const x = Math.random() * (window.innerWidth - btnRect.width);
    const y = Math.random() * (window.innerHeight - btnRect.height);
    noBtn.style.position = 'fixed'; 
    noBtn.style.left = x + 'px';
    noBtn.style.top = y + 'px';
}

function createHearts(num) {
    for (let i = 0; i < num; i++) {
        const heart = document.createElement('div');
        heart.classList.add('heart');
        heart.innerHTML = '❤';
        heart.style.left = Math.random() * 100 + 'vw';
        heart.style.animationDuration = Math.random() * 3 + 2 + 's';
        heart.style.fontSize = Math.random() * 20 + 10 + 'px';
        heartsContainer.appendChild(heart);
        setTimeout(() => { heart.remove(); }, 6000);
    }
}

setInterval(() => createHearts(3), 300);