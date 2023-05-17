// const anime = require('animejs');

///////////// GENERAL


///////SERVICE WORKER

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/service-worker.js').then(function(registration) {
      // Service Worker registrado exitosamente
      console.log('Service Worker registrado con alcance:', registration.scope);
    }, function(err) {
      // Error al registrar el Service Worker
      console.log('Error al registrar el Service Worker:', err);
    });
  });
}



////////////



const getElmnt = (elmntClass) => {
  return document.querySelector(`${elmntClass}`);
};
///////////// MAIN SECTION

// VIDEO SPEED

let video = getElmnt(".section__video--home");
video.defaultPlaybackRate = 0.8;
video.load();

///////// WORK SECTION

///// Gallery images transition

let bntUp = getElmnt(".gallery__button--up");
let bntDown = getElmnt(".gallery__button--down");
let galleryCategories = document.querySelectorAll(".clothes-menu__item");

// Control Variables
let workImagesTransitionDuration = 1500;
let imagesList = [
  { imgA: 1, imgB: 2 },
  { imgA: 3, imgB: 4 },
  { imgA: 5, imgB: 6 },
  { imgA: 7, imgB: 8 },
  { imgA: 9, imgB: 10 },
];

let imgId = 0;
let actualImg = imagesList[imgId];

const idImageHandler = (direction) => {
  if (direction == "next") {
    imgId == imagesList.length - 1 ? (imgId = 0) : imgId++;
  } else if (direction == "prev") {
    imgId == 0 ? (imgId = imagesList.length - 1) : imgId--;
  } else {
    imgId = direction;
  }
  return imagesList[imgId];
};

const imagesAnimation = (prevImg, newImg) => {
  if (imagesList[imgId] != actualImg) {
    galleryImageChangeAnimation(
      ".work__gallery-item--image-a",
      window.innerHeight,
      prevImg.imgA,
      newImg.imgA
    );
    galleryImageChangeAnimation(
      ".work__gallery-item--image-b",
      -window.innerHeight,
      prevImg.imgB,
      newImg.imgB
    );
    actualImg = newImg;
  }
};

const galleryImageChangeAnimation = (element, direction, prevImg, newImg) => {
  const galleryItem = document.querySelector(element);
  galleryItem.style.backgroundImage = `url(/assets/images/work/work-gallery-${prevImg}.webp)`;
  galleryItem.style.transform = `translateY(${direction}px)`;

  setTimeout(() => {
    galleryItem.style.backgroundImage = `url(/assets/images/work/work-gallery-${newImg}.webp)`;
    galleryItem.style.transform = "translateY(0)";
  }, workImagesTransitionDuration / 2);
};

bntUp.addEventListener("click", () => {
  nextImg();
});

bntDown.addEventListener("click", () => {
  prevImg();
});

galleryCategories.forEach((category, i) => {
  category.addEventListener("click", (e) => {
    imagesAnimation(actualImg, idImageHandler(i));
  });
});

const nextImg = () => {
  imagesAnimation(actualImg, idImageHandler("next"));
};

const prevImg = () => {
  imagesAnimation(actualImg, idImageHandler("prev"));
};


///////////// Burguer menu ////////////

const burguerButton = getElmnt(".burguer-menu");
const menu = getElmnt(".header__menu");
const header = getElmnt(".header");

const toggleBurguerBtn = () => {
  let menuItems = document.querySelectorAll('.header__menu-item')
  menuItems.forEach((item)=>{
    item.addEventListener("click", toggleBurguerBtn)
  })
  menu.classList.toggle("display-menu");
  header.classList.toggle("zindex-menu");

};

burguerButton.addEventListener("click", toggleBurguerBtn);
