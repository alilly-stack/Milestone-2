// Accessible client-side form validation. This demo does not send or store messages.
const form = document.querySelector('#contact-form');
if (form) {
  const fields = [
    { id: 'full-name', error: 'name-error', message: 'Please enter your name.' },
    { id: 'email', error: 'email-error', message: 'Please enter a valid email address.' },
    { id: 'topic', error: 'topic-error', message: 'Please choose a topic.' },
    { id: 'message', error: 'message-error', message: 'Please enter a message with at least 10 characters.' }
  ];
  const status = document.querySelector('#form-status');
  function validateField(item) {
    const field = document.getElementById(item.id);
    const error = document.getElementById(item.error);
    let message = '';
    if (!field.value.trim()) message = item.message;
    else if (item.id === 'email' && !field.validity.valid) message = item.message;
    else if (item.id === 'message' && field.value.trim().length < 10) message = item.message;
    field.setAttribute('aria-invalid', message ? 'true' : 'false');
    error.textContent = message;
    return !message;
  }
  fields.forEach(item => {
    const field = document.getElementById(item.id);
    field.addEventListener('blur', () => validateField(item));
    field.addEventListener('input', () => {
      if (field.getAttribute('aria-invalid') === 'true') validateField(item);
      status.hidden = true;
    });
    field.addEventListener('change', () => validateField(item));
  });
  form.addEventListener('submit', event => {
    event.preventDefault();
    const results = fields.map(validateField);
    if (results.every(Boolean)) {
      status.textContent = 'All fields look good. This demonstration form does not send messages, but your entries passed the checks.';
      status.hidden = false;
    } else {
      status.textContent = 'Please correct the highlighted fields. Error messages are shown beside each field.';
      status.hidden = false;
      const firstInvalid = fields.find(item => document.getElementById(item.id).getAttribute('aria-invalid') === 'true');
      if (firstInvalid) document.getElementById(firstInvalid.id).focus();
    }
  });
}
