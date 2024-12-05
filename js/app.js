const categoryButtons = document.querySelectorAll('button.category');
const products = document.querySelectorAll('.product');
categoryButtons.forEach((button) =>
  button.addEventListener('click', btnClickFunction)
);

const tech = document.querySelectorAll('.tech-product');
const health = document.querySelectorAll('.health-product');
const clothing = document.querySelectorAll('.clothing-product');
function btnClickFunction(event) {
  let btns = document.querySelectorAll('button.category');
  btns.forEach((btn) => {
    if (btn.classList.contains('active')) btn.classList.remove('active');
  });
  this.classList.add('active');
  switch (event.target.id) {
    case 'allbtn':
      products.forEach((product) => {
        product.style.display = 'block';
      });
      break;
    case 'techbtn':
      products.forEach((product) => {
        if (product.classList.contains('tech-product')) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
      break;
    case 'clothingbtn':
      products.forEach((product) => {
        if (product.classList.contains('clothing-product')) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
      break;
    case 'healthbtn':
      products.forEach((product) => {
        if (product.classList.contains('health-product')) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });
      break;
  }
}

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

function searchPrice(event) {
  const inputPrice = document.getElementById('pricesearch').value;

  products.forEach((product) => {
    if (!inputPrice) {
      product.style.display = 'block';
      return;
    }
    let productPrice = product.children[2].innerText;
    console.log(parseInt(productPrice.split(' ')[1]), parseInt(inputPrice));
    if (parseInt(productPrice.split(' ')[1]) <= parseInt(inputPrice)) {
      product.style.display = 'block';
    } else if (parseInt(inputPrice) == 0) {
      product.style.display = 'block';
    } else {
      product.style.display = 'none';
    }
  });
}

document
  .getElementById('pricesearchbtn')
  .addEventListener('click', searchPrice);
