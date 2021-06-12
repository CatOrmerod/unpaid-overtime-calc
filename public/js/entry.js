const entryFormHandler = async (unpaidHours, unpaidSalary) => {
    const email = document.querySelector('#email-entry').value.trim();
    const industry = document.querySelector('#industry-entry').value;
    const start = document.querySelector('#start-entry').value;
    const end = document.querySelector('#end-entry').value;
    const salary = document.querySelector('#salary-gross').value.trim();
    const lunch = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
    // console.log(industry, start, end, salary, email, lunch);
    if (email && industry && start && end && lunch && salary) {
        const response = await fetch('/api/entry', {
            method: 'POST',
            body: JSON.stringify({
                email,
                industry,
                start,
                end,
                lunch,
                salary,
                unpaidHours,
                unpaidSalary
            }),
            headers: {
                'Content-Type': 'application/json'
            },
        });

        if (response.ok) {
            const responseBody = await response.json() 
            document.location.href=`/results/${responseBody.entryResult.id}`;
        } else {
            alert(response.statusText);
        }
    }
};


const calculate = async () => {
    const email = document.querySelector('#email-entry').value.trim();
    const industry = document.querySelector('#industry-entry').value;
    const start = document.querySelector('#start-entry').value;
    const end = document.querySelector('#end-entry').value;
    const salary = document.querySelector('#salary-gross').value.trim();
    const lunch = document.querySelector('input[name="inlineRadioOptions"]:checked').value;
    event.preventDefault();

    if (end > start) {
        var oneDay = ((end - start) + 24) - 8;

        if (oneDay < 0) {
            alert("Please enter full time hours");
        } else

        if (lunch === "yeslunch") {
            // var oneDay = (end - start) - 8
            let unpaidHours = oneDay * 230
            let hourlySalary = (salary / 260) / 7.5
            let unpaidSalary = hourlySalary * unpaidHours
            // return console.log("Late shift with lunch", "oneDay", oneDay, "unpaidHours", "unpaid HOurs", unpaidHours.toFixed(0), "unpaid Salary", unpaidSalary, "hourlySalary", hourlySalary.toFixed(0), "start", start, "end", end);
            return entryFormHandler(parseInt(unpaidHours.toFixed(0)), parseInt(unpaidSalary.toFixed(0)));
        } else {
            var oneDayNew = oneDay + 0.5
            let unpaidHours = oneDayNew * 230
            let hourlySalary = (salary / 260) / 7.5
            let unpaidSalary = hourlySalary * unpaidHours
            // return console.log("Late shift with no lunch", "oneDay", oneDay, "unpaidHours", "unpaid Hours", unpaidHours.toFixed(0), "unpaid Salary", unpaidSalary.toFixed(0), "hourlySalary", hourlySalary.toFixed(0), "start", start, "end", end);
            return entryFormHandler(parseInt(unpaidHours.toFixed(0)), parseInt(unpaidSalary.toFixed(0)));
        }


    } else {
        var oneDay = (end - start) - 8

        if (oneDay < 0) {
            alert("Please enter full time hours");
        } else
        if (lunch === "yeslunch") {
            // var oneDay = (end - start) - 8
            let unpaidHours = oneDay * 230
            let hourlySalary = (salary / 260) / 7.5
            let unpaidSalary = hourlySalary * unpaidHours
            // return console.log("normal shift with lunch", "oneDay", oneDay, "unpaidHours", "unpaid Hours", unpaidHours.toFixed(0), "unpaid Salary", unpaidSalary.toFixed(0), "hourlySalary", hourlySalary.toFixed(0), "start", start, "end", end);
            return entryFormHandler(parseInt(unpaidHours.toFixed(0)), parseInt(unpaidSalary.toFixed(0)));
        } else {
            var oneDayNew = oneDay + 0.5
            let unpaidHours = oneDayNew * 230
            let hourlySalary = (salary / 260) / 7.5
            let unpaidSalary = hourlySalary * unpaidHours
            // return console.log("normal shift with no lunch", "oneDay", oneDay, "unpaidHours", "unpaid Hours", unpaidHours.toFixed(0), "unpaid Salary", unpaidSalary.toFixed(0), "hourlySalary", hourlySalary.toFixed(0), "start", start, "end", end);
            return entryFormHandler(parseInt(unpaidHours.toFixed(0)), parseInt(unpaidSalary.toFixed(0)));
        }

        console.log(unpaidHours.toFixed(0), hourlySalary.toFixed(0), email, salary, industry, start, end)
    }


    console.log("oneDay", oneDay, "start", start, "end", end)


    // return entryFormHandler(parseInt(unpaidHours.toFixed(0)), parseInt(unpaidSalary.toFixed(0)));





    console.log(oneDay)
}




document
    .querySelector('#entry-form')
    .addEventListener('submit', calculate);