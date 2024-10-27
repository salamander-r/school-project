(function () {
    const testQuestionSection = document.getElementById("test-question");
    const nextQuestionButton = document.getElementById("next-question");
    const tests = [
        {
            type: "input",
            question: "Переведіть PI/4 у градуси:",
            answer: "45"
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
              alert("Correct");
              nextQuestionButton.removeAttribute('disabled');
            } else {
              alert("Wrong answer");
              nextQuestionButton.setAttribute("disabled", true);
            }
        };

        testQuestionSection.append(question);
        testQuestionSection.append(input);
        testQuestionSection.append(button);
    }

    nextQuestionButton.setAttribute("disabled", true);
    setTestType1(tests[0].question, tests[0].answer);
})()