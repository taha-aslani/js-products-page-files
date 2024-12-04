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

const products = document.querySelectorAll('.product');

function searchName() {
  const searchValue = document
    .querySelector('#namesearch')
    .value.toLowerCase()
    .trim();

  products.forEach((prod) => {
    let productName = prod.children[1].innerText.toLowerCase();
    if (productName.includes(searchValue)) {
      prod.style.display = 'block';
    } else {
      prod.style.display = 'none';
    }
  });
}

document.querySelector('#namesearch').addEventListener('keyup', searchName);
