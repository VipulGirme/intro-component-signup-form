function validate() {
    let validateElements = document.getElementsByClassName("validate");
    const form = document.getElementById('signupForm');
    isValid(form);
}

function isValid(form) {
    let inputs = form.getElementsByTagName('input');
    document.querySelectorAll('.c').forEach(function (a) {
        a.remove()
    });
    for (let i = 0; i < inputs.length; i++) {
        let obj = inputs[i];
        const input = {
            id: inputs[i].id,
            type: inputs[i].type,
            value: inputs[i].value,
            parent: inputs[i].parentElement,
            validity: inputs[i].validity.valid,
            message: ''
        }
        input.parent.classList.remove('has-error');
        if ((input.validity === false || input.value === '' || input.value === null) && input.id === 'firstName') {
            input.message = 'First Name cannot be empty';
            obj.placeholder = '';
        }
        if ((input.validity === false || input.value === '' || input.value === null) && input.id === 'lastName') {
            input.message = 'Last Name cannot be empty';
            obj.placeholder = '';
        }
        if ((input.validity === false || input.value === '' || input.value === null) && input.id === 'emailAddress') {
            input.message = 'Looks like this is not an email';
            obj.placeholder = 'email@example.com';
        }
        if ((input.validity === false || input.value === '' || input.value === null) && input.id === 'password') {
            input.message = 'Password cannot be empty';
            obj.placeholder = '';
        }
        if (!input.validity) {
            const errorText = document.createElement("div")
            errorText.classList.add('c')
            errorText.innerText = input.message

            input.parent.classList.add('has-error')
            input.parent.append(errorText)
        }

    }
}

