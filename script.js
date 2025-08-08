document.addEventListener('DOMContentLoaded', () => {
    // --- Index Page Logic ---
    const exploreButton = document.getElementById('exploreButton');
    if (exploreButton) {
        exploreButton.addEventListener('click', () => {
            // Add a class to body for exit animation
            document.body.classList.add('page-exit');
            setTimeout(() => {
                window.location.href = 'memories.html';
            }, 800); // Match this with your CSS transition duration
        });
    }

    // --- Memories Page Logic ---
    const nextPageButton = document.getElementById('nextPageButton');
    if (nextPageButton) {
        nextPageButton.addEventListener('click', () => {
            document.body.classList.add('page-exit');
            setTimeout(() => {
                window.location.href = 'quotes.html';
            }, 800);
        });
    }

    // --- Quotes Page Logic ---
    const backToHomeButton = document.getElementById('backToHomeButton');
    if (backToHomeButton) {
        backToHomeButton.addEventListener('click', () => {
            document.body.classList.add('page-exit');
            setTimeout(() => {
                window.location.href = 'index.html';
            }, 800);
        });
    }

    // Optional: Dynamic content loading for images (if you have many and want to manage them in JS)
    // For this example, we've hardcoded images in memories.html.
    // If you want to use JS for images, uncomment and adapt this section:

    /*
    const memoryImages = [
        { src: './images/image1.jpg', title: 'Our First Adventure', date: 'January 15, 2020' },
        { src: './images/image2.jpg', title: 'Laughing by the Lake', date: 'May 22, 2021' },
        { src: './images/image3.jpg', title: 'Cozy Winter Evening', date: 'December 01, 2022' },
        { src: './images/image4.jpg', title: 'Joyful Celebration', date: 'July 30, 2023' },
        { src: './images/image5.jpg', title: 'Spontaneous Road Trip', date: 'April 10, 2024' },
        { src: './images/image6.jpg', title: 'Sunset Serenade', date: 'September 05, 2024' },
        // Add more images here
    ];

    const memoriesGrid = document.querySelector('.memories-grid');

    if (memoriesGrid) {
        memoryImages.forEach((image, index) => {
            const memoryCard = document.createElement('div');
            memoryCard.classList.add('memory-card', 'scale-in');
            // Add staggered animation delay
            memoryCard.style.animationDelay = `${0.1 + index * 0.1}s`;

            memoryCard.innerHTML = `
                <img src="${image.src}" alt="${image.title}">
                <div class="caption">
                    <h3>${image.title}</h3>
                    <p>${image.date}</p>
                </div>
            `;
            memoriesGrid.appendChild(memoryCard);
        });
    }
    */
});

// CSS for page exit animation (add this to your style.css as well if not already there)
/*
.page-exit {
    animation: fadeOut 0.8s ease-in-out forwards;
}

@keyframes fadeOut {
    from { opacity: 1; transform: translateY(0); }
    to { opacity: 0; transform: translateY(-20px); }
}
*/