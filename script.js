document.getElementById('toggle-light-mode').addEventListener('click', () => {
    document.body.classList.toggle('light-mode');
});

function showSection(sectionId) {
    document.querySelectorAll('.content-section').forEach(section => {
        section.style.display = 'none';
    });
    document.getElementById(sectionId).style.display = 'block';
}

// Show the introduction section by default
window.onload = function() {
    showSection('intro');
};
