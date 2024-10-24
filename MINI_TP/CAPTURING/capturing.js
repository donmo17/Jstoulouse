document.addEventListener('DOMContentLoaded', () => {
    const modal = document.getElementById('modal');
    const overlay = document.getElementById('overlay');
    const openModalButton = document.getElementById('openModal');

    openModalButton.addEventListener('click', () => {
        modal.style.display = 'block';
        overlay.style.display = 'block';
    });

    // Utilisation de l'event capturing pour détecter les clics en dehors de la modale
    document.addEventListener('click', (event) => {
        if (modal.style.display === 'block' && !modal.contains(event.target)) {
            modal.style.display = 'none';
            overlay.style.display = 'none';
        }
    }, true); // true pour utiliser la phase de capturing

    // Prévention de la propagation de l'événement de clic dans la modale
    modal.addEventListener('click', (event) => {
        event.stopPropagation();
    });
});
