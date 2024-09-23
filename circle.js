(function () {
    const ctx = document.getElementById('myCircle');
    const button = document.getElementById('submitCircle');
    let circleChart = null;

    const handleClick = () => {
        const points = [];
        for (let x = -1; x <= 1; x += 0.1) {
            points.push({ x: `${x.toFixed(2)}`, y: `${Math.sqrt(1 - x*x).toFixed(2)}` });
        }

        for (let x = 1; x >= -1; x -= 0.1) {
            points.push({ x: `${x.toFixed(2)}`, y: `${-(Math.sqrt(1 - x*x)).toFixed(2)}` });
        }
        console.log(points);
        circleChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    // { data: initialPoints, label: 'Початковий' },
                    { data: points, label: 'Модифікований' }
                ]
            }
        });
    }

    button.onclick = handleClick;

    // document.onkeypress = (e) => {
    //     if (e.keyCode === 13) {
    //         handleClick();
    //     }
    // }
})()