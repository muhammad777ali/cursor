const clouds = document.querySelectorAll(".cloud"),
  fantasy = document.querySelector(".fantasy"),
  boat = document.querySelector(".boat");

const timer = document.querySelector(".timer"),
  timerNum = document.querySelectorAll(".timer__num");

window.addEventListener("scroll", () => {
  let y = window.scrollY;
  let boatSpeed = boat.getAttribute("data-speed");
  boat.style.transform = `translateX(${y * boatSpeed}px)`;
  clouds.forEach(function (el) {
    let speed = el.getAttribute("data-speed");
    let x = window.scrollY;
    el.style.transform = `translateX(${x * speed}px)`;
  });
});

const title = document.querySelector(".header__title");
const text = title.innerHTML;
title.innerHTML = "";
function type(i = 0) {
  title.innerHTML += text[i];
  i++;
  if (i < text.length) {
    setTimeout(() => {
      type(i);
    }, 100);
  }
}
type();

const paralaxBox = document.querySelector(".paralax__box"),
  layer = document.querySelectorAll(".layer");
paralaxBox.addEventListener("mousemove", function (e) {
  let x = (e.pageX + window.innerWidth) / 50,
    y = (e.pageY + window.innerHeight) / 50;
  layer.forEach(function (el) {
    let speed = el.getAttribute("data-speed");
    el.style.transform = `translate(${x * speed}px,${y * speed}px)`;
  });
});

window.addEventListener("scroll", function scrollCount() {
  if (window.scrollY + window.innerHeight >= timer.offsetTop) {
    timerNum.forEach((el) => {
      let dataTimer = el.getAttribute("data-timer");
      timerCount(el, dataTimer);
    });
    this.window.removeEventListener("scroll", scrollCount);
  }
});

function timerCount(el, count, i = 0) {
  el.innerHTML = i;
  i++;
  if (i <= count) {
    setTimeout(() => {
      timerCount(el, count, i);
    }, 10);
  }
}
const add = document.querySelector(".todo__add"),
  input = document.querySelector(".todo__inp"),
  form = document.querySelector('.todo__form'),
  todo__list = document.querySelector(".todo__list");
  form.addEventListener("submit", function (e) {
  e.preventDefault();
  if (input.value != '') {
    addNote();
  } 
});
function addNote() {
  const htmlElement = document.createElement('li')
  todo__list.append(htmlElement)
  htmlElement.innerHTML = input.value
  htmlElement.classList.add('todo__item');
  const button = document.createElement('button');
  htmlElement.append(button);
  button.innerHTML = 'x';
  input.value = '';
  button.classList.add('close');
}              
window.addEventListener('click', function (e) {
  if (e.target.classList.contains('close')) {
    let item = e.target.closest('.todo__item')
    item.remove()
  }
})
let a = ''
window.addEventListener('keydown', function (e) {
  a += e.key
  console.log(a);
  if (a == 'yutub') {
    location.replace('https://youtube.com')
  }
})

cursor = document.querySelector('.cursor')
window.addEventListener('mousemove', function (e) {
  let x = e.clientX
  let y = e.clientY
  console.log(`X oqi: ${x} `,`Y oqi: ${y} `);
  cursor.style.top = `${y}px`
  cursor.style.left = `${x}px`
})

cursor.addEventListener('mousedown', function () {
  this.style.transform = `translate(-50% ,-50%) scale(1.3)`
})
cursor.addEventListener('mouseup', function () {
  this.style.transform = `translate(-50% ,-50%) scale(1)`
})