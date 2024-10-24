const form = document.getElementById("quiz-form");
form.addEventListener("submit", (e) => {
    e.preventDefault();
    const lis = document.getElementsByTagName("li");
    const inputs = document.getElementsByTagName("input");
    let i = 0;
    const result = document.getElementById("result");

    //PREMIERE QUESTION
    let input1 = inputs[0];
    let input2 = inputs[1];
    let input3 = inputs[2];
    if (input3.checked === true)
        lis[0].classList.add("correct"),
            (input1.disabled = true),
            (input2.disabled = true),
            (input3.disabled = true),
            i++;
    else if (input1.checked === true)
        lis[0].classList.add("incorrect"),
            (input1.disabled = true),
            (input2.disabled = true),
            (input3.disabled = true);
    else if (input2.checked === true)
        lis[0].classList.add("incorrect"),
            (input1.disabled = true),
            (input2.disabled = true),
            (input3.disabled = true);
    else console.log("Ratio");

    //DEUXIEME QUESTION
    let input4 = inputs[3];
    let input5 = inputs[4];
    let input6 = inputs[5];
    if (input5.checked === true)
        lis[1].classList.add("correct"),
            (input4.disabled = true),
            (input5.disabled = true),
            (input6.disabled = true),
            i++;
    else if (input4.checked === true)
        lis[1].classList.add("incorrect"),
            (input4.disabled = true),
            (input5.disabled = true),
            (input6.disabled = true);
    else if (input6.checked === true)
        lis[1].classList.add("incorrect"),
            (input4.disabled = true),
            (input5.disabled = true),
            (input6.disabled = true);
    else console.log("Ratio");

    //TROISIEME QUESTION
    let input7 = inputs[6];
    let input8 = inputs[7];
    let input9 = inputs[8];
    if (input8.checked === true)
        lis[2].classList.add("correct"),
            (input7.disabled = true),
            (input8.disabled = true),
            (input9.disabled = true),
            i++;
    else if (input7.checked === true)
        lis[2].classList.add("incorrect"),
            (input7.disabled = true),
            (input8.disabled = true),
            (input9.disabled = true);
    else if (input9.checked === true)
        lis[2].classList.add("incorrect"),
            (input7.disabled = true),
            (input8.disabled = true),
            (input9.disabled = true);
    else console.log("Ratio");

    //QUATRIEME QUESTION
    let input10 = inputs[9];
    let input11 = inputs[10];
    let input12 = inputs[11];
    if (input12.checked === true)
        lis[3].classList.add("correct"),
            (input10.disabled = true),
            (input11.disabled = true),
            (input12.disabled = true),
            i++;
    else if (input10.checked === true)
        lis[3].classList.add("incorrect"),
            (input10.disabled = true),
            (input11.disabled = true),
            (input12.disabled = true);
    else if (input11.checked === true)
        lis[3].classList.add("incorrect"),
            (input10.disabled = true),
            (input11.disabled = true),
            (input12.disabled = true);
    else console.log("Ratio");

    //CINQUIEME QUESTION
    let input13 = inputs[12];
    let input14 = inputs[13];
    let input15 = inputs[14];
    if (input13.checked === true)
        lis[4].classList.add("correct"),
            (input13.disabled = true),
            (input14.disabled = true),
            (input15.disabled = true),
            i++;
    else if (input14.checked === true)
        lis[4].classList.add("incorrect"),
            (input13.disabled = true),
            (input14.disabled = true),
            (input15.disabled = true);
    else if (input15.checked === true)
        lis[4].classList.add("incorrect"),
            (input13.disabled = true),
            (input14.disabled = true),
            (input15.disabled = true);
    else console.log("Ratio");

    result.innerText = `Vous avez ${i} bonne réponse sur 5 questions`;
});
