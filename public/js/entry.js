const entryFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-entry').value.trim();
    const industry = document.querySelector('#industry-entry').value;
    const start = document.querySelector('#start-entry').value;
    const end = document.querySelector('#end-entry').value;
    // const lunch = document.querySelector('#lunch-entry').value;
    const salary = document.querySelector('#salary-gross').value.trim();
    const lunch = document.querySelector('input[name="inlineRadioOptions"]:checked').value;

    console.log(industry, start, end, salary, email, lunch);
    if (email && industry && start && end && lunch && salary) {
        const response = await fetch('/api/entry', {
            method: 'POST',
            body: JSON.stringify({ email, industry, start, end, lunch, salary }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace(`/results/${encodeURI(email)}`);
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('#entry-form')
    .addEventListener('submit', entryFormHandler);