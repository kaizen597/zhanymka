document.addEventListener('DOMContentLoaded', () => {
    // 1. Initial Hero Animations
    const revealElements = document.querySelectorAll('.reveal-text');
    revealElements.forEach((el, index) => {
        setTimeout(() => {
            el.classList.add('active');
        }, 300 * index);
    });

    // 2. Smooth Scroll for Start Button
    const startBtn = document.getElementById('start-journey');
    const storySection = document.getElementById('story');
    
    startBtn.addEventListener('click', () => {
        storySection.scrollIntoView({ behavior: 'smooth' });
    });

    // 3. Intersection Observer for Scroll Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px"
    };

    const storyObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    const storyBlocks = document.querySelectorAll('.story-block, .final-message');
    storyBlocks.forEach(block => storyObserver.observe(block));

    // 4. Background Sparkles/Hearts Generation
    const sparkleContainer = document.getElementById('sparkle-container');
    const sparkleCount = 60;

    for (let i = 0; i < sparkleCount; i++) {
        createSparkle();
    }

    function createSparkle() {
        const sparkle = document.createElement('div');
        sparkle.className = 'sparkle';
        
        // Random size
        const size = Math.random() * 6 + 2;
        sparkle.style.width = `${size}px`;
        sparkle.style.height = `${size}px`;
        
        // Random position
        sparkle.style.left = `${Math.random() * 100}%`;
        sparkle.style.top = `${Math.random() * 100}%`;
        
        // Random animation delay and duration
        sparkle.style.animationDelay = `${Math.random() * 10}s`;
        sparkle.style.animationDuration = `${Math.random() * 10 + 10}s`;
        
        sparkleContainer.appendChild(sparkle);
    }

    // Optional: Subtle parallax effect on hero
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        const heroContent = document.querySelector('.hero-content');
        if (heroContent) {
            heroContent.style.transform = `translateY(${scrolled * 0.3}px)`;
            heroContent.style.opacity = 1 - (scrolled / 700);
        }
    });
});
