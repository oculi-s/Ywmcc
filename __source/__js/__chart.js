import { $$ } from './_.js';

function o(e) {
    let d = JSON.parse(e.innerText);
    return {
        chart: {
            renderTo: e,
        },
        title: {
            text: '일별 최고점',
        },
        yAxis: {
            title: {
                text: ''
            }
        },
        xAxis: {
            title: {
                text: ''
            },
            categories: d[0]
        },
        series: [{
            showInLegend: false,
            data: d[1]
        }]
    };
}

$$('.c').forEach(e => {
    Highcharts.chart(o(e));
});