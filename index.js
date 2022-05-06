const email = document.querySelector('#email');
const errorMessage = document.querySelector('.error-message')
const emptyError = document.querySelector('.error-empty')

email.addEventListener('invalid', e => {
    e.preventDefault()
    if (email.validity.valueMissing) {
        emptyError.style.display = 'block'
        email.value = 'example@email/com'
        email.style.borderColor = 'hsl(354, 100%, 66%)'
    } else {
        errorMessage.style.display = 'block'
        email.value = 'example@email/com'
        email.style.borderColor = 'hsl(354, 100%, 66%)'
    }
})

email.addEventListener('focus', () => {
    email.value = ''
    errorMessage.style.display = 'none'
    emptyError.style.display = 'none'
    email.style.borderColor = 'hsl(223, 87%, 63%)'
})

window.addEventListener('resize', () => {
    email.value = '';
    errorMessage.style.display = 'none'
    emptyError.style.display = 'none'
    email.style.borderColor = 'hsl(223, 87%, 63%)'
})
