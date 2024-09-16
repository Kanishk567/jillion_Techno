const navDialog = document.getElementById('nav-dialog');

function handleMenu(){
    navDialog.classList.toggle('hidden');
}
const dots = document.querySelectorAll('.dots');

let currentIndex = 0;

function showSlide(index) {
    dots.forEach((dot, i) => {
        dot.classList.toggle('bg-blue-800', i === index);
        dot.classList.toggle('bg-gray-300', i !== index);
    });
}

dots.forEach((dot, i) => {
    dot.addEventListener('click', () => {
        currentIndex = i;
        showSlide(currentIndex);
    });
});

showSlide(currentIndex);
