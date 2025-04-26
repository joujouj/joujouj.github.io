// Atualiza o ano no footer
document.getElementById('year').textContent = new Date().getFullYear();

// Suaviza a rolagem para os links da navegação
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        
        window.scrollTo({
            top: targetElement.offsetTop - 70,
            behavior: 'smooth'
        });
        
        // Atualiza a URL sem recarregar a página
        history.pushState(null, null, targetId);
    });
});

// Animação de scroll para as seções
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('section').forEach(section => {
    observer.observe(section);
});

// Efeito de digitação no título (opcional)
const typeEffect = () => {
    const title = document.querySelector('header h1');
    const originalText = title.textContent;
    let i = 0;
    
    title.textContent = '';
    
    const typing = setInterval(() => {
        if (i < originalText.length) {
            title.textContent += originalText.charAt(i);
            i++;
        } else {
            clearInterval(typing);
        }
    }, 100);
};

// Descomente a linha abaixo se quiser o efeito de digitação
// window.addEventListener('load', typeEffect);
