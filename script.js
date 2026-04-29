document.addEventListener('DOMContentLoaded', function () {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    document.querySelectorAll('.nav-link').forEach(function (link) {
        if (link.getAttribute('href') === currentPage) {
            link.classList.add('active');
        }
    });

    const backToTop = document.getElementById('backToTop');
    if (backToTop) {
        window.addEventListener('scroll', function () {
            if (window.scrollY > 320) {
                backToTop.classList.add('visible');
            } else {
                backToTop.classList.remove('visible');
            }
        });

        backToTop.addEventListener('click', function () {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    const revealItems = document.querySelectorAll('.section-card, .article-card');
    function revealOnScroll() {
        revealItems.forEach(function (item) {
            const rect = item.getBoundingClientRect();
            if (rect.top < window.innerHeight - 120) {
                item.classList.add('visible');
            }
        });
    }

    revealOnScroll();
    window.addEventListener('scroll', revealOnScroll);

    const modalOverlay = document.getElementById('imageModal');
    const modalImage = document.getElementById('modalImage');
    const modalCaption = document.getElementById('modalCaption');
    const galleryImages = document.querySelectorAll('.gallery-image');

    if (modalOverlay && modalImage && modalCaption) {
        galleryImages.forEach(function (image) {
            image.addEventListener('click', function () {
                modalImage.src = image.src;
                modalCaption.textContent = image.alt || image.dataset.caption || 'Foto Angel';
                modalOverlay.classList.add('open');
                document.body.style.overflow = 'hidden';
            });
        });

        document.getElementById('closeModal').addEventListener('click', function () {
            modalOverlay.classList.remove('open');
            document.body.style.overflow = '';
        });

        modalOverlay.addEventListener('click', function (event) {
            if (event.target === modalOverlay) {
                modalOverlay.classList.remove('open');
                document.body.style.overflow = '';
            }
        });
    }
});