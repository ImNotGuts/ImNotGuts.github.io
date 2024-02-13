document.getElementById('noButton').addEventListener('mouseover', function() {
    let container = document.getElementById('container');
    let containerWidth = container.offsetWidth;
    let containerHeight = container.offsetHeight;
    let maxX = window.innerWidth - containerWidth;
    let maxY = window.innerHeight - containerHeight;

    let randomX = Math.random() * maxX;
    let randomY = Math.random() * maxY;

    container.style.position = 'absolute'; // Añadimos posición absoluta
    container.style.left = randomX + 'px';
    container.style.top = randomY + 'px';
});

document.getElementById('yesButton').addEventListener('click', function() {
    document.getElementById('container').classList.add('hidden');
    document.getElementById('thanksMessage').classList.remove('hidden');
});