///////////// GENERAL

const getElmnt = (elmntClass) => {
  return document.querySelector(`${elmntClass}`)
}
///////////// MAIN SECTION


// VIDEO SPEED

let video = getElmnt('.section__video--home')
video.defaultPlaybackRate = 0.8
video.load();

///////// WORK SECTION



///// Gallery images transition

let bntUp = getElmnt('.gallery__button--up')
let bntDown = getElmnt('.gallery__button--down')
let galleryCategories = document.querySelectorAll('.clothes-menu__item')

//Control Variables
let workImagesTransitionDuration = 1500;
let imagesList = [
  {imgA: 1, imgB: 2},
  {imgA: 3, imgB: 4},
  {imgA: 5, imgB: 6},
  {imgA: 7, imgB: 8},
  {imgA: 9, imgB: 10}
];

let imgId = 0;
let actualImg = {imgA: 1, imgB: 2};

const idImageHandler = (direction) => {
  if(direction == 'next') {
    (imgId == imagesList.length - 1) ? imgId = 0 : imgId++;
  } else if (direction == 'prev') {
    (imgId == 0) ? imgId = imagesList.length - 1 : imgId--;
  } else {
    imgId = direction;
  }
  return imagesList[imgId];
}

const imagesAnimation = (prevImg, newImg) => {
  galleryImageChangeAnimation('.work__gallery-item--image-a', window.innerHeight, prevImg.imgA, newImg.imgA)
  galleryImageChangeAnimation('.work__gallery-item--image-b', -window.innerHeight, prevImg.imgB, newImg.imgB)
  actualImg = newImg;
  }

const galleryImageChangeAnimation = (element, direction, prevImg, newImg) => {
  anime({
    targets: element,
    keyframes: [
      {backgroundImage: `url(./assets/pruebas/im${prevImg}.png)`, duration: 0},
      {translateY: direction, duration: workImagesTransitionDuration / 2, easing: 'easeInElastic(1, .8)'},
      {translateY: -direction, duration: 0},
      {backgroundImage: `url(./assets/pruebas/im${newImg}.png)`, duration: 0},
      {translateY: 0, duration: workImagesTransitionDuration, easing: 'easeOutElastic(1, .8)',}
    ],
    loop: false
  });
}


///////////Adding functions to buttons

bntUp.addEventListener('click', ()=> {
  nextImg();
}
)

bntDown.addEventListener('click', () => {
  prevImg();
})

    //Add function for each category
galleryCategories.forEach((category, i) => {
  category.addEventListener('click', () => {
    imagesAnimation(actualImg, idImageHandler(i))
  })
});

const nextImg = () => {
  imagesAnimation(actualImg, idImageHandler('next'))
}

const prevImg = () => {
  imagesAnimation(actualImg, idImageHandler('prev'))
}

