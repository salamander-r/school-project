(function () {
    const ctx = document.getElementById('myCircle').getContext('2d');
    const button = document.getElementById('submitCircle');
    let circleChart = null;
    const round = (x) => Math.round(x*10000)/10000;
    const handleClick = () => {
        const points = [];
        for (let x = -1; x <= 1; x += 0.01) {
            points.push({ x: `${round(x)}`, y: `${round(Math.sqrt(1 - x*x))}` });
        }

        for (let x = 1; x >= -1; x = round(x - 0.01)) {
            points.push({ x: `${x}`, y: `${-1*round(Math.sqrt(1 - x*x))}` });
        }
        console.log(points);
        circleChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{ 
                    data: points, 
                    label: 'Модифікований',
                    pointRadius: 0
                }]
            },
            options: {
                aspectRatio: 1,
                // responsive: false
                animation: {
                    duration: 0, // Disable initial animation
                },          
            }
        });
        // circleChart.resize(600, 600);
    }

    button.onclick = handleClick;

    // document.onkeypress = (e) => {
    //     if (e.keyCode === 13) {
    //         handleClick();
    //     }
    // }
})()