
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
        
        const X = newDuration.asHours();
        const Y = hoursWorkedDaily * 230
        const hourlyRate = (salary/260)/7.5
        const Z = hourlyRate * hoursWorkedAnnual

        if (hoursWorkedDaily >= 7.5) {
            return { X, Y, Z }
        } else {
            return 
        }
    }
}