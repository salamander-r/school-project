(function () {
    fetch('./tests.json').then(response => response.json()).then(tests => {
        const testQuestionSection = document.getElementById("test-question");
        const nextQuestionButton = document.getElementById("next-question");
        const questionStatus = document.getElementById("question-status");
        const correct = '✅';
        const incorrect = '❌';

        function clearDiv() {
            testQuestionSection.innerHTML = '';
            questionStatus.innerText = '';
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

        function setTestType2(questionTitle, options, expectedAnswer) {
            const fieldSet = document.createElement('fieldset');
            const question = document.createElement('legend');
            question.setAttribute('class', 'question-title');
            question.append(questionTitle);
            fieldSet.append(question);
            const radioGroup = document.createElement('div');
            options.forEach((option, index) => {
                const elem = document.createElement("input");
                const optionId = `option-${index}`;

                elem.setAttribute('type', 'radio');
                elem.setAttribute('id', optionId);
                elem.setAttribute('name', 'question');
                elem.setAttribute('value', option);

                const label = document.createElement('label');

                label.append(option);

                label.setAttribute('for', optionId);

                radioGroup.append(elem);
                radioGroup.append(label);
                radioGroup.append(document.createElement("br"));
            });

            fieldSet.append(radioGroup);

            const button = document.createElement("button");
            button.append('Підтвердити');

            button.onclick = () => {
                const answer = Array.from(radioGroup.childNodes)
                    .filter((n) => n.type === "radio")
                    .find((n) => n.checked === true).value;

                if (answer === expectedAnswer) {
                    questionStatus.innerText = correct;
                    nextQuestionButton.removeAttribute("disabled");
                } else {
                    questionStatus.innerText = incorrect;
                    nextQuestionButton.setAttribute("disabled", true);
                }
            };

            fieldSet.append(button);

            testQuestionSection.append(fieldSet);
        }

        const displayTest = (test) => {
            clearDiv();
            if (test.type === 'input') {
                setTestType1(test.question, test.answer);
            } else {
                setTestType2(test.question, test.options, test.answer);
            }
        }
        nextQuestionButton.setAttribute("disabled", true);
        let i = 0;

        displayTest(tests[i]);
        nextQuestionButton.onclick = () => {
            if (i >= tests.length - 1) {
                questionStatus.innerText = 'You finished all tests';
                return;
            }
            i++;
            displayTest(tests[i]);
            nextQuestionButton.setAttribute("disabled", true);
        };
    })

})()