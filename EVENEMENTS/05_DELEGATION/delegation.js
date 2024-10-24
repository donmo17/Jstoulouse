const ul1 = document.querySelectorAll('ul')[0];
const div = document.getElementById('item-list2');


li1 = ul1.children[0];
li2 = ul1.children[1];
li3 = ul1.children[2];

// SANS DELEGATION D'EVENEMENT

li1.addEventListener('click', () => {
    li1.style.color = '#f00';
});

li2.addEventListener('click', () => {
    li2.style.color = '#f00';
});

li3.addEventListener('click', () => {
    li3.style.color = '#f00';
});

// AVEC DELEGATION D'EVENEMENT 

div.addEventListener('click', (e) => {
    console.log(e);
    e.target.nodeName === 'P' ? e.target.style.color = '#00f' : null;
    e.target.nodeName === 'SPAN' ? e.target.style.color = '#0f0' : null;
});

/*----------------------------------------------------
TASKLIST
-----------------------------------------------------*/

// PROPOSITION N°1

// const ul3 = document.querySelector("#taskList");

// ul3.addEventListener("click", (e) => {
//     const inputs = document.querySelectorAll(".taskCheckbox");

//     inputs.forEach((input) => {
//         console.log(input.nextElementSibling);

//         if (input.checked === true) input.nextElementSibling.classList.add("done");
//         else {
//             input.nextElementSibling.classList.remove("done");
//         }
//     });
// });


// PROPOSITION N°2

// const tasks = document.getElementById('taskList');
// tasks.addEventListener('click', (e) => {

//     e.target.checked === true ? e.target.nextElementSibling.classList.add('done') : e.target.nextElementSibling.classList.remove('done');

// });

// PROPOSITION N°3
const taskList = document.getElementById('taskList');

// Ecouteur d'évènement sur le parent
taskList.addEventListener('click', (e) => {
    if (e.target.nodeName === "INPUT") {
        e.target.nextElementSibling.classList.toggle("done");
    } else if (e.target.nodeName === "SPAN") {
        e.target.classList.toggle("done");
        e.target.previousElementSibling.checked = !e.target.previousElementSibling.checked;
    }

});