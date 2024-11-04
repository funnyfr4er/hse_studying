document.getElementById('readExperienceForm').addEventListener('submit', function(event) {
    const defaultValues = {
        name: 'Гость',
        read_count: '0',
        read_censored: 'no',
        date_read: '2024-01-01',
        password: 'qwerty123'
    };

    const form = event.target;
    for (const key in defaultValues) {
        const input = form[key];
        if (input && input.value === '') {
            input.value = defaultValues[key];
        }
    }

    if (!form.read_censored.value) {
        form.read_censored.value = defaultValues.read_censored;
    }
});
