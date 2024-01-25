function scrollToNext() {
    const currentDiv = document.querySelector('.slides.active');
    const nextDiv = currentDiv.nextElementSibling;
    if (nextDiv) {
        nextDiv.scrollIntoView({ behavior: 'smooth' });
        currentDiv.classList.remove('active');
        nextDiv.classList.add('active');
    }
}