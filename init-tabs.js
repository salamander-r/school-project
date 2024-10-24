(function () {
    const chartsSection = document.getElementById('charts');
    const circleSection = document.getElementById('circle');
    const testsSection = document.getElementById('tests');
    const showChartsButton = document.getElementById('showCharts');
    const showCircleButton = document.getElementById('showCircle');
    const showTestsButton = document.getElementById('showTests')

    circleSection.style.display = 'none';
    testsSection.style.display = 'none';

    showChartsButton.onclick = () => {
        chartsSection.style.display = 'block';
        circleSection.style.display = 'none';
        testsSection.style.display = 'none';
    }

    showCircleButton.onclick = () => {
        chartsSection.style.display = 'none';
        circleSection.style.display = 'block';
        testsSection.style.display = 'none';
    }

    showTestsButton.onclick = () => {
        chartsSection.style.display = 'none';
        circleSection.style.display = 'none';
        testsSection.style.display = 'block';
    }
})()