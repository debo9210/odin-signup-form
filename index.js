const pass1 = document.querySelector('.error1');
const pass2 = document.querySelector('.error2');
const errMsg = document.querySelector('.errMsg');

pass2.addEventListener('change', (e) => {
  if (pass1.value !== e.target.value) {
    pass1.style.borderColor = '#BE2E2E';
    pass2.style.borderColor = '#BE2E2E';
    errMsg.textContent = '*Passwords do not match';
  } else if (pass1.value === e.target.value) {
    pass1.style.borderColor = 'green';
    pass2.style.borderColor = 'green';
    errMsg.textContent = '';
  }
});
