import { data } from './data.js';
import { colors } from './colors.js';

console.log(data, colors);

const getRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};

const loadCards = () => {
  const cards_container = document.querySelector('.cards');
  data.map((data) => {
    const card = document.createElement('div');
    card.classList.add('card');
    card.style.backgroundColor = getRandomColor();

    card.innerHTML = `
        <img src="${data.img}" alt="" class="card-img">
        </div>
        <div class="card-body">
        <h3 class="card__title">${data.title}</h3>
        <p class="card__text">${data.desc}</p>
        <div class="cta-group">
            <a href="${data.live}" target="_blank" class="cta">Live Demo </a>
            <a href="${data.code}" target="_blank" class="cta cta-rev">Code </a>
        </div>
    `;

    cards_container.appendChild(card);
  });
};

window.addEventListener('load', loadCards);
