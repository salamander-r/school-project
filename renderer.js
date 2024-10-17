(function () {
    const ctx = document.getElementById('myChart');
    const button = document.getElementById('submit');
    let sinChart = null;

    const handleClick = () => {
        if (sinChart !== null) {
            sinChart.destroy();
        }
        const Functions = document.getElementById('Functions').value;
        const x0 = parseInt(document.getElementById('x0').value);
        const xn = parseInt(document.getElementById('xn').value);
        const A = parseFloat(document.getElementById('a').value) || 1;
        const deltaX = parseInt(document.getElementById('deltaX').value);
        const deltaY = parseInt(document.getElementById('deltaY').value);

        function Choice(x) {
            const mathFunctions = Functions;
            if (mathFunctions === 'sin') {
                return Math.sin(x);
            } else if (mathFunctions === 'cos') {
                return Math.cos(x);
            } else if (mathFunctions === 'tg') {
                return Math.sin(x) / Math.cos(x);
            } else if (mathFunctions === 'ctg') {
                return Math.cos(x) / Math.sin(x);
            }
        }

        const points = [];
        for (let x = x0; x < xn; x += Math.PI / 12) {
            points.push({ x: `${x}`, y: `${Choice(x + deltaX) * A + deltaY}` });
        }

        const initialPoints = [];
        for (let x = x0; x < xn; x += Math.PI / 12) {
            initialPoints.push({ x: `${x}`, y: `${Choice(x)}` });
        }

        sinChart = new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [
                    { data: initialPoints, label: 'Початковий', pointRadius: 0 },
                    { data: points, label: 'Модифікований', pointRadius: 0 }
                ]
            },
            options: {
                scales: {
                  x: {
                    title: {
                        display: true,
                        text: 'x' // Назва осі X
                    },
                    ticks: {
                      callback: function (value) {
                        const trueValue = parseFloat(this.getLabelForValue(value));
        
                        if (Math.abs(trueValue - Math.PI / 6) < 0.01) {
                            return 'π/6';
                        }

                        if (Math.abs(trueValue - Math.PI / 3) < 0.01) {
                            return 'π/3';
                        }

                        if (Math.abs(trueValue - Math.PI / 2) < 0.01) {
                            return 'π/2';
                        }

                        if (Math.abs(trueValue - Math.PI) < 0.01) {
                            return 'π';
                        }

                        if (Math.abs(trueValue - 3 * Math.PI / 2) < 0.01) {
                            return '3π/2';
                        }

                        if (Math.abs(trueValue - 2 * Math.PI) < 0.01) {
                            return '2π';
                        }
        
                        return "";
                      },
                    },
                  },
                  y: {
                    title: {
                        display: true,
                        text: 'y' // Назва осі Y
                    },
                  }
                },
            }
        });
    };

    button.onclick = handleClick;

    document.onkeypress = (e) => {
        if (e.keyCode === 13) {
            handleClick();
        }
    }
})()

