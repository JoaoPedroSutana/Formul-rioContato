function enviar() {
    let nameInput = document.getElementById('name');
    let emailInput = document.getElementById('email');
    let msgInput = document.getElementById('msg');

    let isNameValid = validateInput(nameInput, 'name-error');
    let isEmailValid = validateInput(emailInput, 'email-error');
    let isMsgValid = validateMessage(msgInput, 'msg-error');

    if (isNameValid && isEmailValid && isMsgValid) {
        alert('Mensagem enviada com sucesso!');
    }
}

function validateInput(input, errorId) {
    let errorMessage = document.getElementById(errorId);
    if (input.value.trim() === '') {
        input.classList.add('error');
        errorMessage.textContent = 'Este campo não foi preenchido';
        return false;
    } else {
        input.classList.remove('error');
        errorMessage.textContent = '';
        return true;
    }
}

function validateMessage(input, errorId) {
    let errorMessage = document.getElementById(errorId);
    if (input.value.trim() === '') {
        input.classList.add('error');
        errorMessage.textContent = 'Este campo não foi preenchido';
        return false;
    } else {
        input.classList.remove('error');
        errorMessage.textContent = '';
        return true;
    }
}
