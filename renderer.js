const ctx = document.getElementById('myChart');
const button = document.getElementById('submit');
let sinChart = null;
button.onclick = () => {
    if (sinChart !== null) {
        sinChart.destroy();
    }
    const x0 = parseInt(document.getElementById('x0').value);
    const xn = parseInt(document.getElementById('xn').value);
    const points = [];
    for (let x = x0; x < xn; x += 0.25) {
        points.push({ x: `${x}`, y: `${Math.sin(x)}` });
    }

    sinChart = new Chart(ctx, {
        type: 'line',
        data: {
            datasets: [{
                data: points
            }]
        }
    });
};
