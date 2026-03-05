const btnYes = document.getElementById('btn-yes');
const popupGif = document.getElementById('popup-gif');

if (btnYes && popupGif) {
    btnYes.addEventListener('click', () => {
        // Show the popup gif and trigger the bulge animation
        popupGif.classList.add('show-popup');
        
        // Wait for 2 seconds then navigate to the second page
        setTimeout(() => {
            window.location.href = 'page2.html';
        }, 2000);
    });
}

// Petal Shower for Page 3
function createPetals() {
    const isPage3 = window.location.pathname.includes('page3.html');
    if (!isPage3) return;

    for (let i = 0; i < 50; i++) {
        setTimeout(createPetal, Math.random() * 5000); // Stagger initial spawn
    }
}

function createPetal() {
    const petal = document.createElement('div');
    petal.classList.add('petal-shower');
    
    // Randomize properties
    const startX = Math.random() * 100; // 0 to 100vw
    const size = Math.random() * 15 + 10; // 10px to 25px
    const duration = Math.random() * 3 + 4; // 4s to 7s
    const endX = Math.random() * 200 - 100; // -100px to +100px drift
    const endRot = Math.random() * 720 - 360; // Random rotation

    petal.style.left = `${startX}vw`;
    petal.style.width = `${size}px`;
    petal.style.height = `${size}px`;
    petal.style.animationDuration = `${duration}s`;
    
    // Pass CSS variables for the keyframe animation
    petal.style.setProperty('--tx', `${endX}px`);
    petal.style.setProperty('--rot', `${endRot}deg`);
    petal.style.setProperty('--s', `${Math.random() * 0.5 + 0.8}`);

    document.body.appendChild(petal);

    // Remove when animation finishes and re-spawn
    setTimeout(() => {
        if (document.body.contains(petal)) {
            petal.remove();
            createPetal(); // Continuous shower
        }
    }, duration * 1000);
}

// Initialize petals if on page 3
createPetals();

// Page 4 to Page 5 Transition
const btnNextPage5 = document.getElementById('btn-next-page5');
if (btnNextPage5) {
    btnNextPage5.addEventListener('click', (e) => {
        e.preventDefault(); // Prevent immediate navigation

        // Add the slide-up-out animation class to the body
        document.body.classList.add('slide-up-out');

        // Wait for the animation to finish (0.8s), then navigate to page 5
        setTimeout(() => {
            window.location.href = 'page5.html';
        }, 800);
    });
}

// Blooming Flowers for Page 4
function createBloomingFlowers() {
    const isPage4 = window.location.pathname.includes('page4.html');
    if (!isPage4) return;

    for (let i = 0; i < 15; i++) {
        setTimeout(spawnBloom, Math.random() * 4000); // Initial fast burst
    }
}

function spawnBloom() {
    const flower = document.createElement('div');
    flower.classList.add('bloom-flower');
    
    // Add 6 petals
    for (let i = 0; i < 6; i++) {
        const petal = document.createElement('div');
        petal.classList.add('bloom-petal');
        petal.style.transform = `rotate(${i * 60}deg)`;
        flower.appendChild(petal);
    }
    
    // Add center
    const center = document.createElement('div');
    center.classList.add('bloom-center');
    flower.appendChild(center);

    // Randomize properties
    // Choose either left side (0-35vw) or right side (65-100vw)
    const isLeftSide = Math.random() > 0.5;
    const xPos = isLeftSide 
        ? Math.random() * 30 + 5    // 5vw to 35vw (Left side)
        : Math.random() * 30 + 65;  // 65vw to 95vw (Right side)
        
    const randomY = Math.random() * 80 + 10; // 10% to 90% vertical
    const size = Math.random() * 0.8 + 0.5; // Scale from 0.5 to 1.3
    const duration = Math.random() * 3 + 4; // 4s to 7s lifecycle

    flower.style.left = `${xPos}vw`;
    flower.style.top = `${randomY}vh`;
    flower.style.transform = `scale(${size})`;
    flower.style.animationDuration = `${duration}s`;

    document.body.appendChild(flower);

    // Remove when animation finishes and re-spawn to keep the field blooming
    setTimeout(() => {
        if (document.body.contains(flower)) {
            flower.remove();
            spawnBloom(); 
        }
    }, duration * 1000);
}

// Initialize blooming flowers if on page 4
createBloomingFlowers();

// Word-by-Word Animation for Page 5
function initPage5WordEffect() {
    const isPage5 = window.location.pathname.includes('page5.html');
    if (!isPage5) return;

    const h1 = document.querySelector('.page-5-message h1');
    if (!h1) return;

    const text = h1.textContent;
    h1.textContent = ''; // Clear original text

    // Delay slightly to let page slide-up complete
    setTimeout(() => {
        // Split by spaces, keep spaces logic
        const words = text.split(' ');
        
        words.forEach((word, index) => {
            const span = document.createElement('span');
            span.textContent = word + ' '; // Re-add the space after the word
            span.classList.add('page-5-word');
            // Stagger animation based on word index (e.g., 300ms per word)
            span.style.animationDelay = `${index * 0.3}s`;
            h1.appendChild(span);
        });
    }, 800); // 800ms wait
}

initPage5WordEffect();
