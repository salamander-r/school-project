(function () {
    const chartsSection = document.getElementById('charts');
    const circleSection = document.getElementById('circle');
    const showChartsButton = document.getElementById('showCharts');
    const showCircleButton = document.getElementById('showCircle');

    circleSection.style.display = 'none';

    showChartsButton.onclick = () => {
        chartsSection.style.display = 'block';
        circleSection.style.display = 'none';
    }

    showCircleButton.onclick = () => {
        chartsSection.style.display = 'none';
        circleSection.style.display = 'block';
    }
})()