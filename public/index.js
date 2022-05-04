const icons = [
  "arcoiris.png",
  "blue-1.png",
  "blue-2.png",
  "darmek-1.png",
  "darmek-2.png",
  "hola-1.png",
  "hola-2.png",
  "hola-3.png",
  "hola-4.png",
  "max-1.png",
  "max-2.png",
  "max-3.png",
  "onick-1.png",
  "onick-2.png",
  "onick-3.png",
  "pailo-1.png",
  "pailo-2.png",
  "pailo-3.png",
  "pastel.png",
  "queso.png",
  "sint-1.png",
  "sint-2.png",
  "sint-3.png",
];

const clases = ["img-l", "img-m", "img-s"];

const randomNumber = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1)) + min;
};

const randomDouble = (min, max) => {
  return Math.random() * (max - min) + min;
};

const initializeImgs = () => {
  const imgs = document.querySelectorAll(".background-img");
  const width = window.innerWidth;
  const height = window.innerHeight;
  imgs.forEach((img) => {
    img.style.left = `${Math.floor(Math.random() * width)}px`;
    img.style.top = `${Math.floor(Math.random() * height)}px`;
    img.animate(
      [
        { transform: `scale(1) translate(0,0)`, filter: `blur(0)` },
        {
          transform: `scale(${randomDouble(
            0.95,
            1.05
          )}) translate(${randomNumber(-25, 25)}px, ${randomNumber(
            -25,
            25
          )}px)`,
          filter: `blur(${randomNumber(0, 5)}px)`,
        },
        {
          transform: `scale(${randomDouble(
            0.95,
            1.05
          )}) translate(${randomNumber(-25, 25)}px, ${randomNumber(
            -25,
            25
          )}px)`,
          filter: `blur(${randomNumber(0, 5)}px)`,
        },
        { transform: `scale(1) translate(0,0)`, filter: `blur(0)` },
      ],
      {
        duration: Math.random() * 10000 + 10000,
        iterations: Infinity,
      }
    );
  });
};

const spawnIcons = (cant) => {
  const iconsContainer = document.getElementById("background");
  iconsContainer.innerHTML = "";
  for (let i = 0; i < cant; i++) {
    const icon = document.createElement("img");
    icon.src = `./imgs/${icons[randomNumber(0, icons.length - 1)]}`;
    icon.classList.add("background-img");
    icon.classList.add(clases[randomNumber(0, clases.length - 1)]);
    iconsContainer.appendChild(icon);
  }
  initializeImgs();
};

spawnIcons(25);

const endTime = "May 10 2022 20:35:00 GMT-0400";
function getTimeRemaining() {
  const total = Date.parse(endTime) - Date.parse(new Date());
  const seconds = Math.floor((total / 1000) % 60);
  const minutes = Math.floor((total / 1000 / 60) % 60);
  const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
  const days = Math.floor(total / (1000 * 60 * 60 * 24));

  return {
    total,
    days,
    hours,
    minutes,
    seconds,
  };
}

setInterval(() => {
  const time = getTimeRemaining();
  document.getElementById("time-days").innerHTML = formatNumber(time.days);
  document.getElementById("time-hours").innerHTML = formatNumber(time.hours);
  document.getElementById("time-minutes").innerHTML = formatNumber(
    time.minutes
  );
  document.getElementById("time-seconds").innerHTML = formatNumber(
    time.seconds
  );
}, 1000);

const formatNumber = (num) => {
  return num < 10 ? `0${num}` : num;
};

const toggleMenu = () => {
  const menu = document.getElementById("menu");
  menu.classList.toggle("active-menu");
  const menuItems = document.getElementById("background-menu");
  if (menuItems.classList.contains("hidden")) {
    menuItems.classList.remove("hidden");
  } else {
    menuItems.animate(
      [
        { transform: `translate(0,0)`, opacity: 1 },
        { transform: `translate(-100%, 0)`, opacity: 0 },
      ],
      {
        duration: 500,
      }
    );
    setTimeout(() => {
      menuItems.classList.add("hidden");
    }, 500);
  }
};
