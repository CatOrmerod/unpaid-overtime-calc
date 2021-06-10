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
            document.location.replace(`/results`);
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

  

    if (lunch === "yeslunch") {
    var oneDay = (end - start) - 8
    let unpaidHours = oneDay * 230
    let hourlySalary = (salary / 260) / 7.5
    let unpaidSalary = hourlySalary * unpaidHours
    return entryFormHandler(parseInt(unpaidHours.toFixed(0)),parseInt( unpaidSalary.toFixed(0)));
}
// console.log(unpaidHours.toFixed(0), hourlySalary.toFixed(0), email, salary, industry, start, end)

   else
    var oneDay = (end - start) - 7.5
    let unpaidHours = oneDay * 230
    let hourlySalary = (salary / 260) / 7.5
    let unpaidSalary = hourlySalary * unpaidHours
    return entryFormHandler(parseInt(unpaidHours.toFixed(0)),parseInt( unpaidSalary.toFixed(0)));
}



document
    .querySelector('#entry-form')
    .addEventListener('submit', calculate);



// ${encodeURI(email)}