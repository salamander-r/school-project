(function () {
    const ctx = document.getElementById('myCircle').getContext('2d');
    const button = document.getElementById('submitCircle');
    let circleChart = null;
    const round = (x) => Math.round(x * 10000) / 10000;
    const round2 = (x) => Math.round(x * 100) / 100;
    const handleClick = () => {
        if (circleChart !== null) {
            circleChart.destroy();
        }
        const angle = parseInt(document.getElementById('angle').value);
        const angleRadians = angle * Math.PI / 180;
        const points = [];
        for (let x = -1; x <= 1; x += 0.01) {
            points.push({ x: `${round(x)}`, y: `${round(Math.sqrt(1 - x * x))}` });
        }

        for (let x = 1; x >= -1; x = round(x - 0.01)) {
            points.push({ x: `${x}`, y: `${-1 * round(Math.sqrt(1 - x * x))}` });
        }
        console.log(points);
        console.log("Math.cos(angleRadians)", Math.cos(angleRadians));
        circleChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    data: points,
                    label: 'Коло',
                    pointRadius: 0,
                    borderColor: 'grey'
                },
                {
                    data: [{ x: "-1", y: "0"}, { x: "1", y: "0"}],
                    label: 'X',
                    pointRadius: 0,
                    borderColor: 'grey'
                },
                {
                    data: [{ x: "0", y: "-1"}, { x: "0", y: "1"}],
                    label: 'Y',
                    pointRadius: 0,
                    borderColor: 'grey'
                },
                {
                    data: [{ x: "0", y: `${round2(Math.sin(angleRadians))}`}, 
                           { x: `${round2(Math.cos(angleRadians))}`, y: `${round2(Math.sin(angleRadians))}`}, 
                           { x: `${round2(Math.cos(angleRadians))}`, y: "0"}],
                    label: 'Проекції',
                    pointRadius: 0,
                    borderColor: 'red',
                    borderDash: [10, 8]
                },
                {
                    data: [{ x: "0", y: "0" }, 
                           { x: `${round2(Math.cos(angleRadians))}`, y: `${round2(Math.sin(angleRadians))}`}],
                    label: 'Кут',
                    // pointRadius: 0,
                    borderColor: 'red'
                }]
            },
            options: {
                aspectRatio: 1,
                // responsive: false
                animation: {
                    duration: 0, // Disable initial animation
                },
                scales: {
                    x: {
                        ticks: {
                            callback: function (value) {
                                const trueValue = parseFloat(this.getLabelForValue(value));

                                if (Math.abs(trueValue - 0) < 0.001) {
                                    return '0';
                                }
                            },
                        },
                    },
                    y: {
                        ticks: {
                            callback: function (value) {
                                const trueValue = parseFloat(this.getLabelForValue(value));

                                return "";
                            }
                        },
                    }
                },
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