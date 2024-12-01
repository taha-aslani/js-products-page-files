const categoryButtons = document.querySelectorAll('button.category');
categoryButtons.forEach((button) =>
  button.addEventListener('click', btnClickFunction)
);

function btnClickFunction() {
  let btns = document.querySelectorAll('button.category');
  btns.forEach((btn) => {
    if (btn.classList.contains('active')) btn.classList.remove('active');
  });
  this.classList.add('active');
}
