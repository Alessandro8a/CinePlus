// Función para cambiar entre secciones
function showSection(sectionId) {
    // Ocultar todas las secciones
    const sections = document.querySelectorAll('.section');
    sections.forEach(section => {
        section.classList.remove('active');
    });

    // Mostrar la sección seleccionada
    document.getElementById(sectionId).classList.add('active');

    // Scroll hacia arriba
    window.scrollTo(0, 0);
}

// Función para filtrar películas por categoría
function filterMovies(category) {
    const cards = document.querySelectorAll('.catalog-card');
    const filterButtons = document.querySelectorAll('.filter-btn');

    // Actualizar botones activos
    filterButtons.forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');

    // Filtrar tarjetas
    cards.forEach(card => {
        if (category === 'todos') {
            card.style.display = 'block';
            card.style.animation = 'fadeIn 0.5s';
        } else {
            if (card.dataset.category === category) {
                card.style.display = 'block';
                card.style.animation = 'fadeIn 0.5s';
            } else {
                card.style.display = 'none';
            }
        }
    });
}

// Animación al hacer clic en "Rentar Ahora"
document.addEventListener('DOMContentLoaded', function() {
    const rentButtons = document.querySelectorAll('.btn-rent');
    
    rentButtons.forEach(button => {
        button.addEventListener('click', function() {
            const movieTitle = this.closest('.movie-info').querySelector('h3').textContent;
            alert(`¡Genial! Has rentado: "${movieTitle}"\n\nDisfruta tu película 🎬`);
        });
    });

    // Animación al seleccionar un plan
    const planButtons = document.querySelectorAll('.btn-plan');
    
    planButtons.forEach(button => {
        button.addEventListener('click', function() {
            const planName = this.closest('.pricing-card').querySelector('.plan-header h3').textContent;
            alert(`¡Excelente elección!\n\nHas seleccionado el plan: ${planName}\n\n¡Gracias por elegir CinePlus! 🎉`);
        });
    });

    // Efecto de aparición para las tarjetas al hacer scroll
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);

    // Observar las tarjetas de películas
    const movieCards = document.querySelectorAll('.movie-card, .catalog-card, .pricing-card');
    movieCards.forEach(card => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        card.style.transition = 'all 0.6s ease';
        observer.observe(card);
    });

    // Animación para las tarjetas de información
    const infoItems = document.querySelectorAll('.info-item');
    infoItems.forEach((item, index) => {
        item.style.opacity = '0';
        item.style.transform = 'translateY(20px)';
        item.style.transition = `all 0.6s ease ${index * 0.1}s`;
        observer.observe(item);
    });
});

// Agregar animación CSS para fadeIn
const style = document.createElement('style');
style.textContent = `
    @keyframes fadeIn {
        from {
            opacity: 0;
            transform: scale(0.9);
        }
        to {
            opacity: 1;
            transform: scale(1);
        }
    }
`;
document.head.appendChild(style);