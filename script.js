
document.addEventListener('DOMContentLoaded', function() {
    const heart = document.getElementById('heart');
    const heartEnd = document.getElementById('heart-end');
    const puzzleGame = document.getElementById('puzzle-game');
    const proposalContent = document.getElementById('proposal-content');
    const benefitsContent = document.getElementById('benefits-content');
    const thankYouContent = document.getElementById('thank-you');
    const popup = document.getElementById('popup');

    // Back buttons
    document.getElementById('back-to-game').addEventListener('click', () => {
        proposalContent.classList.add('hidden');
        puzzleGame.classList.remove('hidden');
    });

    document.getElementById('back-to-proposal').addEventListener('click', () => {
        benefitsContent.classList.add('hidden');
        proposalContent.classList.remove('hidden');
    });

    // Next button to thank you page
    document.getElementById('next-button').addEventListener('click', () => {
        benefitsContent.classList.add('hidden');
        thankYouContent.classList.remove('hidden');
        createSparkles();
    });

    const heartStart = document.getElementById('heart-start');

    heart.addEventListener('dragstart', function(e) {
        e.dataTransfer.setData('text', 'heart');
        setTimeout(() => heart.classList.add('hidden'), 0);
    });

    heart.addEventListener('dragend', function() {
        heart.classList.remove('hidden');
    });

    heartEnd.addEventListener('dragover', function(e) {
        e.preventDefault();
        this.style.backgroundColor = 'rgba(227, 104, 123, 0.1)';
    });

    heartEnd.addEventListener('dragleave', function() {
        this.style.backgroundColor = 'transparent';
    });

    heartEnd.addEventListener('drop', function(e) {
        e.preventDefault();
        this.style.backgroundColor = 'transparent';
        if (e.dataTransfer.getData('text') === 'heart') {
            this.appendChild(heart);
            setTimeout(() => {
                puzzleGame.classList.add('hidden');
                proposalContent.classList.remove('hidden');
                createSparkles();
            }, 500);
        }
    });

    const yesClickHandler = function() {
        proposalContent.classList.add('hidden');
        benefitsContent.classList.remove('hidden');
        createSparkles();
    };

    document.getElementById('yes-button').addEventListener('click', yesClickHandler);
    document.getElementById('yes-button-2').addEventListener('click', yesClickHandler);

    // Benefits section animations can be added here if needed

    function createSparkles() {
        const createBearSparkle = () => {
            const bearSparkle = document.createElement('div');
            bearSparkle.className = 'bear-sparkle';
            bearSparkle.innerHTML = '🐻';
            bearSparkle.style.left = Math.random() * 80 + 10 + 'vw';
            bearSparkle.style.top = Math.random() * 80 + 10 + 'vh';
            document.body.appendChild(bearSparkle);

            setTimeout(() => {
                bearSparkle.remove();
            }, 2000);
        };

        // Create initial bear sparkle
        createBearSparkle();

        // Create new bear sparkle every 3 seconds
        setInterval(createBearSparkle, 3000);

        // Create heart sparkles
        setInterval(() => {
            const heartSparkle = document.createElement('div');
            heartSparkle.className = 'heart-sparkle';
            heartSparkle.innerHTML = '❤️';
            heartSparkle.style.left = Math.random() * 80 + 10 + 'vw';
            heartSparkle.style.bottom = '0';
            document.body.appendChild(heartSparkle);

            const sparkle = document.createElement('div');
            sparkle.className = 'sparkle';
            sparkle.innerHTML = '❤️';
            sparkle.style.left = Math.random() * 80 + 10 + 'vw';
            sparkle.style.top = Math.random() * 80 + 10 + 'vh';
            document.body.appendChild(sparkle);

            setTimeout(() => {
                heartSparkle.remove();
                sparkle.remove();
            }, 4000);
        }, 3000);
    }
});
