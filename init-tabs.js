(function () {
    const infoSection = document.getElementById('info');
    const theorySection = document.getElementById('theory');
    const chartsSection = document.getElementById('charts');
    const circleSection = document.getElementById('circle');
    const testsSection = document.getElementById('tests');

    const showInfoButton = document.getElementById('showInfo');
    const showTheoryButton = document.getElementById('showTheory');
    const showChartsButton = document.getElementById('showCharts');
    const showCircleButton = document.getElementById('showCircle');
    const showTestsButton = document.getElementById('showTests');

    theorySection.style.display = 'none';
    chartsSection.style.display = 'none';
    circleSection.style.display = 'none';
    testsSection.style.display = 'none';

    showInfoButton.onclick = () => {
        infoSection.style.display = 'block';
        theorySection.style.display = 'none';
        chartsSection.style.display = 'none';
        circleSection.style.display = 'none';
        testsSection.style.display = 'none';
    }

    showTheoryButton.onclick = () => {
        infoSection.style.display = 'none';
        theorySection.style.display = 'block';
        chartsSection.style.display = 'none';
        circleSection.style.display = 'none';
        testsSection.style.display = 'none';
    }

    showChartsButton.onclick = () => {
        infoSection.style.display = 'none';
        theorySection.style.display = 'none';
        chartsSection.style.display = 'block';
        circleSection.style.display = 'none';
        testsSection.style.display = 'none';
    }

    showCircleButton.onclick = () => {
        infoSection.style.display = 'none';
        theorySection.style.display = 'none';
        chartsSection.style.display = 'none';
        circleSection.style.display = 'block';
        testsSection.style.display = 'none';
    }

    showTestsButton.onclick = () => {
        infoSection.style.display = 'none';
        theorySection.style.display = 'none';
        chartsSection.style.display = 'none';
        circleSection.style.display = 'none';
        testsSection.style.display = 'block';
    }
})()