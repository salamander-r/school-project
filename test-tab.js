(function () {
    const testQuestionSection = document.getElementById("test-question");
    const nextQuestionButton = document.getElementById("next-question");
    const questionStatus = document.getElementById("question-status");
    const correct = '✅';
    const incorrect = '❌';
    const tests = [
        {
            type: "input",
            question: "Переведіть 𝜋/4 у градуси:",
            answer: "45"
        },
        {
            type: "input",
            question: "Переведіть 𝜋/6 у градуси:",
            answer: "30"
        }
    ]

    function clearDiv() {
        testQuestionSection.innerHTML = '';
    }

    function setTestType1(questionTitle, expectedAnswer) {
        const question = document.createElement('div');
        question.append(questionTitle);
        const input = document.createElement('input');
        input.value = '';
        const button = document.createElement("button");
        button.append('Підтвердити');

        button.onclick = () => {
            if (input.value === expectedAnswer) {
              questionStatus.innerText = correct;
              nextQuestionButton.removeAttribute('disabled');
            } else {
                questionStatus.innerText = incorrect;
              nextQuestionButton.setAttribute("disabled", true);
            }
        };

        testQuestionSection.append(question);
        testQuestionSection.append(input);
        testQuestionSection.append(button);
    }

    nextQuestionButton.setAttribute("disabled", true);
    let i = 0;

    setTestType1(tests[i].question, tests[i].answer);
    nextQuestionButton.onclick = () => {
        if (i >= tests.length - 1) {
            questionStatus.innerText = 'You finished all tests';
            return;
        }
        i++;
        clearDiv();
        setTestType1(tests[i].question, tests[i].answer);
        nextQuestionButton.setAttribute("disabled", true);
    };

})()