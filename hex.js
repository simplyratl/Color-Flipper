const colors = ['#DF1611', '#9E1FFF', '#7BDF11', '#003BA8', '#F53800', '#FF780A', '#FFE90A', '#0AA5FF', '#00026B', '#006B1D', '#8F859D', '#311B50', '#6065A9'];
const colorName = ['Crimson', 'Electric Violet', 'Lima', 'International Klein Blue', 'Scarlet', 'Flamenco', 'Lemon','Dodger Blue', 'Navy Blue', 'Camarone', 'Mamba', 'Valhalla', 'Scampi'];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');
const colorsName = document.querySelector('.colorName');

btn.addEventListener('click', function () {
  //get random number
  const randomNumber = getRandomNumber();
  console.log(randomNumber);

  document.body.style.backgroundColor = colors[randomNumber];
  
  colorsName.textContent = colorName[randomNumber];
  colorsName.style.color = colors[randomNumber];


  color.textContent = colors[randomNumber];
  color.style.color = colors[randomNumber];

});

function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}