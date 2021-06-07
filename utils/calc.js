
const moment = require('moment');

module.exports = {
    overtimeCalc: (start, end, lunch, salary) => {
        // const start = moment(document.querySelector('#start-entry').value.format("HH:MM"));
        // const end = moment(document.querySelector('#end-entry').value.format("HH:MM"));
        // const lunch = parseFloat(document.querySelector('#lunch-entry').value.trim());
        // const salary = parseFloat(document.querySelector('#salary-gross').value.trim());
        const duration = moment.duration(moment(end).diff(start));

        if (lunch == "nolunch") {
            var newDuration = moment(duration).add(30, 'm').toDate();
        }
        
        const X = end - start;
        const Y = X * 230
        const hourlyRate = (salary/260)/7.5
        const Z = hourlyRate * Y
console.log(end, start, Y, X, hourlyRate, Z, salary)
            return { X, Y, Z }
       
    }
}