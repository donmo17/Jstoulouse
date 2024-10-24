document.getElementById('quiz-form').addEventListener('submit', function (event) {
    event.preventDefault();

    const correctAnswers = {
        q1: 'Camberra',
        q2: 'oui',
        q3: '8',
        q4: 'Mercure',
        q5: 'Jupiter'
    };

    let score = 0;
    const totalQuestions = 5;
    console.log('event target', event.target);

    const form = new FormData(event.target);
    const result = document.getElementById('result');
    const questions = document.querySelectorAll('li');
    const radios = document.querySelectorAll('input[type="radio"]');

    questions.forEach((question, index) => {
        const questionNumber = 'q' + (index + 1);
        const userAnswer = form.get(questionNumber);
        if (!userAnswer) {
            question.classList.add('no-answer');
        } else if (userAnswer === correctAnswers[questionNumber]) {
            question.classList.add('correct');
            score++;
        } else {
            question.classList.add('incorrect');
        }
    });


    radios.forEach(radio => {
        radio.disabled = true;
    });

    result.textContent = `Vous avez obtenu ${score} sur ${totalQuestions}`;
});