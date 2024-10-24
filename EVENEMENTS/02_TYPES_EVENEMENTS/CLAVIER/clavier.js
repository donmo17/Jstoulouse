const log = document.getElementById('log');

document.addEventListener('keyup', (e) => {
    console.log(e);
    console.log(e.key);
    if (e.key === ' ')
        log.innerHTML += '&nbsp;';
    else if (e.key === 'Enter')
        log.innerHTML += '<br>';
    else
        log.innerHTML += e.key;
});