document.getElementById('child').addEventListener('click', function (event) {
    event.stopPropagation();
    console.log('Je suis l\'enfant !');
});

document.getElementById('parent').addEventListener('click', function () {
    console.log('Je suis le parent !');
});