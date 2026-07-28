document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navLinks = document.querySelector('.nav-links');
    const body = document.body;

    if (hamburger) {
        hamburger.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            body.classList.toggle('nav-open');
            hamburger.classList.toggle('open');
        });
    }

    document.querySelectorAll('.nav-links a').forEach(link => {
        link.addEventListener('click', () => {
            navLinks.classList.remove('active');
            body.classList.remove('nav-open');
            hamburger.classList.remove('open');
        });
    });

    const revealElements = document.querySelectorAll('.reveal');
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                revealObserver.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.18,
    });

    revealElements.forEach(el => {
        revealObserver.observe(el);
    });

    const typedElements = document.querySelectorAll('.typed');
    typedElements.forEach(el => {
        const text = el.dataset.text || '';
        const textNode = document.createElement('span');
        textNode.className = 'typed-text';
        el.appendChild(textNode);

        const cursor = document.createElement('span');
        cursor.className = 'typing-cursor';
        cursor.textContent = '|';
        el.appendChild(cursor);

        let index = 0;
        const typeSpeed = 35;
        const typeInterval = setInterval(() => {
            if (index <= text.length) {
                textNode.textContent = text.slice(0, index);
                index += 1;
            } else {
                clearInterval(typeInterval);
                cursor.style.display = 'none';
            }
        }, typeSpeed);
    });
});
