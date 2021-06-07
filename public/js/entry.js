const entryFormHandler = async (event) => {
    event.preventDefault();

    const email = document.querySelector('#email-entry').value.trim();
    const industry = document.querySelector('#industry-entry').value.trim();
    const start = document.querySelector('#start-entry').value.trim();
    const end = document.querySelector('#end-entry').value.trim();
    const lunch = document.querySelector('#lunch-entry').value.trim();
    const salary = document.querySelector('#salary-gross').value.trim();

    if (email && industry && start && end && lunch && salary) {
        const response = await fetch('/api/entry', {
            method: 'POST',
            body: JSON.stringify({ email, industry, start, end, lunch, salary }),
            headers: { 'Content-Type': 'application/json' },
        });

        if (response.ok) {
            document.location.replace('/results');
        } else {
            alert(response.statusText);
        }
    }
};

document
    .querySelector('.entry-form')
    .addEventListener('submit', entryFormHandler);