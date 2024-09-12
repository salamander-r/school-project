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
    for (let x = x0; x < xn; x += 0.25) {
        points.push({ x: `${x}`, y: `${Choice(x + deltaX) * A}` });
    }

    const initialPoints = [];
    for (let x = x0; x < xn; x += 0.25) {
        initialPoints.push({ x: `${x}`, y: `${Choice(x)}` });
    }

    sinChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [
                { data: initialPoints, label: 'Початковий' },
                { data: points, label: 'Модифікований' }
            ]
        }
    });
};

button.onclick = handleClick;

document.onkeypress = (e) => {
    if (e.keyCode === 13) {
        handleClick();
    }
}