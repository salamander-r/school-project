alert("Test");
const ctx = document.getElementById('myChart');
        new Chart(ctx, {
            type: 'line',
            data: {
                datasets: [{
                    data: [{ x: 1, y: 1 }, { x: 3, y: 3 }]
                }]
            }
        });