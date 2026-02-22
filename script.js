function setupRevealAnimations() {
    const revealTargets = document.querySelectorAll('header, section, .feature');
    revealTargets.forEach((target) => target.classList.add('reveal'));

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.12 });

    revealTargets.forEach((target) => observer.observe(target));
}

function setupSmoothNav() {
    const navLinks = document.querySelectorAll('nav a[href^="#"]');
    navLinks.forEach((link) => {
        link.addEventListener('click', (event) => {
            const targetId = link.getAttribute('href');
            const target = document.querySelector(targetId);
            if (!target) {
                return;
            }
            event.preventDefault();
            target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        });
    });
}

function setupDemoChat() {
    const demoSection = document.querySelector('#demo');
    if (!demoSection) {
        return;
    }

    const shell = document.createElement('div');
    shell.className = 'demo-shell';
    shell.innerHTML = `
        <div class="demo-log" aria-live="polite"></div>
        <form class="demo-controls" autocomplete="off">
            <input type="text" placeholder="Ask for a website section..." aria-label="Demo prompt" required>
            <button type="submit">Generate</button>
        </form>
    `;

    demoSection.appendChild(shell);

    const log = shell.querySelector('.demo-log');
    const form = shell.querySelector('.demo-controls');
    const input = shell.querySelector('input');

    const cannedResponses = [
        'Great idea — I added a hero section with a clear call-to-action.',
        'Done. I generated a responsive feature grid with icon placeholders.',
        'Added social proof cards and polished spacing for mobile.',
        'Implemented a pricing table with monthly/annual toggle styles.'
    ];

    let responseCursor = 0;

    const pushMessage = (text, role) => {
        const line = document.createElement('div');
        line.className = `demo-msg ${role}`;
        line.textContent = text;
        log.appendChild(line);
        log.scrollTop = log.scrollHeight;
    };

    pushMessage('Hi! Describe what you want to add to your page.', 'bot');

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const prompt = input.value.trim();
        if (!prompt) {
            return;
        }

        pushMessage(prompt, 'user');
        input.value = '';

        const reply = cannedResponses[responseCursor % cannedResponses.length];
        responseCursor += 1;

        window.setTimeout(() => pushMessage(reply, 'bot'), 400);
    });
}

function setupContactForm() {
    const form = document.querySelector('#contact form');
    if (!form) {
        return;
    }

    const status = document.createElement('p');
    status.className = 'status';
    form.appendChild(status);

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        status.textContent = 'Thanks! Your message has been received — we will reach out shortly.';
        form.reset();
    });
}

document.addEventListener('DOMContentLoaded', () => {
    setupSmoothNav();
    setupRevealAnimations();
    setupDemoChat();
    setupContactForm();
});
