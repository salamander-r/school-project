(function () {
    const theorySection = document.getElementById('theory');
    const chartsSection = document.getElementById('charts');
    const circleSection = document.getElementById('circle');
    const testsSection = document.getElementById('tests');

    const showTheoryButton = document.getElementById('showTheory');
    const showChartsButton = document.getElementById('showCharts');
    const showCircleButton = document.getElementById('showCircle');
    const showTestsButton = document.getElementById('showTests');

    chartsSection.style.display = 'none';
    circleSection.style.display = 'none';
    testsSection.style.display = 'none';

    showTheoryButton.onclick = () => {
        theorySection.style.display = 'block';
        chartsSection.style.display = 'none';
        circleSection.style.display = 'none';
        testsSection.style.display = 'none';
    }

    showChartsButton.onclick = () => {
        theorySection.style.display = 'none';
        chartsSection.style.display = 'block';
        circleSection.style.display = 'none';
        testsSection.style.display = 'none';
    }

    showCircleButton.onclick = () => {
        theorySection.style.display = 'none';
        chartsSection.style.display = 'none';
        circleSection.style.display = 'block';
        testsSection.style.display = 'none';
    }

    showTestsButton.onclick = () => {
        theorySection.style.display = 'none';
        chartsSection.style.display = 'none';
        circleSection.style.display = 'none';
        testsSection.style.display = 'block';
    }
})()