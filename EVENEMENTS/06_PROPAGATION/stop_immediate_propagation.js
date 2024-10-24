document.getElementById('child').addEventListener('click', function (e) {
    e.stopImmediatePropagation();
    console.log('Bonjour !');
});

document.getElementById('child').addEventListener('click', function (e) {
    console.log('Bon Après-Midi !');
});

document.getElementById('parent').addEventListener('click', function () {
    console.log('Bonsoir');
});