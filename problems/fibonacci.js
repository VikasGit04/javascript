let f1 = 0;
let f2 = 1;

function fibonacciSeries(num) {
    let series = [];
    if (num == 0 ) {
        series.push(f1);
    } else if (num == 1) {
        series.push(f1, f2);
    } else {
        series.push(f1, f2);
        for(let i=2; i< num; i++) {
            series[i] = series[i-1] + series[i-2];
        }
    }
    
    return series;

}

console.log(fibonacciSeries(7));