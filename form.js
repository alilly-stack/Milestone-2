/* Accessible client-side validation for the contact form. No data is sent or stored. */
(() => {
  const form = document.querySelector("#contact-form");
  if (!form) return;

  const fields = [
    { input: form.elements.fullName, error: document.querySelector("#name-error"),
      validate: value => value.trim() ? "" : "Please enter your full name." },
    { input: form.elements.email, error: document.querySelector("#email-error"),
      validate: value => {
        if (!value.trim()) return "Please enter your email address.";
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value.trim()) ? "" : "Enter an email address in the format name@example.com.";
      } },
    { input: form.elements.topic, error: document.querySelector("#topic-error"),
      validate: value => value ? "" : "Please choose a topic." },
    { input: form.elements.message, error: document.querySelector("#message-error"),
      validate: value => value.trim().length >= 10 ? "" : "Please enter a message of at least 10 characters." }
  ];

  const status = document.querySelector("#form-status");

  function validateField(field) {
    const message = field.validate(field.input.value);
    field.error.textContent = message;
    if (message) field.input.setAttribute("aria-invalid", "true");
    else field.input.removeAttribute("aria-invalid");
    return !message;
  }

  fields.forEach(field => {
    field.input.addEventListener("blur", () => validateField(field));
    field.input.addEventListener("input", () => {
      if (field.input.hasAttribute("aria-invalid")) validateField(field);
    });
    field.input.addEventListener("change", () => {
      if (field.input.hasAttribute("aria-invalid")) validateField(field);
    });
  });

  form.addEventListener("submit", event => {
    event.preventDefault();
    status.textContent = "";
    status.className = "form-status";
    const results = fields.map(validateField);
    const firstInvalid = fields.find((field, index) => !results[index]);

    if (firstInvalid) {
      status.textContent = "Please review the highlighted fields.";
      status.classList.add("error");
      firstInvalid.input.focus();
      return;
    }

    status.textContent = "Your form looks good. This demo does not send or store your message.";
    status.classList.add("success");
    form.reset();
    fields.forEach(field => {
      field.error.textContent = "";
      field.input.removeAttribute("aria-invalid");
    });
  });
})();
