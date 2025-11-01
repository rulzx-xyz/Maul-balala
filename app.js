document.querySelector('a[href="#page2"]').addEventListener('click', function (e) {
  e.preventDefault();
  document.querySelector('#page2').scrollIntoView({ behavior: 'smooth' });
});

function animateNumbers() {
  document.querySelectorAll('.angka-informasi').forEach(el => {
    const target = +el.getAttribute('data-target');
    const duration = 1000;
    const frameRate = 60;
    const totalFrames = Math.round(duration / (1000 / frameRate));
    let frame = 0;

    const counter = setInterval(() => {
      frame++;
      const progress = frame / totalFrames;
      const value = Math.round(target * progress);
      el.textContent = value + '+';

      if (frame === totalFrames) {
        clearInterval(counter);
      }
    }, 1000 / frameRate);
  });
}

animateNumbers();

setInterval(() => {
  document.querySelectorAll('.angka-informasi').forEach(el => el.textContent = '0+');
  animateNumbers();
}, 4000);
const input = document.querySelector('.search-input');

input.addEventListener('input', () => {
  if(input.value.trim() !== '') {
    input.classList.add('has-content');
  } else {
    input.classList.remove('has-content');
  }
});
const menu = document.querySelector('.menu');
const close = document.querySelector('.close');
const linkNav = document.querySelector('.link-nav');
const contentNav = document.querySelector('.content-navbar');

menu.addEventListener('click', () => {
  menu.classList.add('active');
  close.classList.add('active');
  linkNav.classList.add('active');
  contentNav.classList.add('active');
});

close.addEventListener('click', () => {
  menu.classList.remove('active');
  close.classList.remove('active');
  linkNav.classList.remove('active');
  contentNav.classList.remove('active');
});
const searchInput = document.querySelector('.search-input');
const cards = document.querySelectorAll('.card');
const noDataText = document.querySelector('.no-data');

searchInput.addEventListener('input', function () {
  const keyword = this.value.toLowerCase();
  
  let found = false;
  cards.forEach(card => {
    const title = card.querySelector('.title-card').textContent.toLowerCase();

    if (title.includes(keyword)) {
      card.style.display = 'block';
      found = true;
    } else {
      card.style.display = 'none';
    }
  });

  noDataText.style.display = found ? 'none' : 'block';
  noDataText.innerHTML=found ? '' : 'Tidak ada data';
});

const loading=document.querySelector('.loading');
setTimeout(() => {
  loading.style.display='none'
}, 2000);