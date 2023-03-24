// Velocidad del video

let video = document.querySelector('.section__video--home')
video.defaultPlaybackRate = 0.8
video.load();

///////// WORK SECTION

const getElmnt = (elmntClass) => {
  return document.querySelector(`${elmntClass}`)
}

let imgA = getElmnt('.work__gallery-item--image-a')
let imgB = getElmnt('.work__gallery-item--image-b')
let tempBtn = getElmnt('.clothes-menu__item')

let workImagesTransitionDuration = 1500;

tempBtn.addEventListener('click', ()=> {
  crossImgChangeUp()
  crossImgChangeDown()
})


const crossImgChangeUp = () => {
  anime({
    targets: '.work__gallery-item--image-a',
    keyframes: [
      {backgroundImage: 'url(./assets/pruebas/im1.png)', duration: 0},
      {translateY: window.innerHeight, duration: workImagesTransitionDuration / 2, easing: 'easeInElastic(1, .8)'},
      {translateY: -window.innerHeight, duration: 0},
      {backgroundImage: 'url(./assets/pruebas/im5.png)', duration: 0},
      {translateY: 0, duration: workImagesTransitionDuration, easing: 'easeOutElastic(1, .8)',}
    ],
    loop: false
  });
}

const crossImgChangeDown = () => {
  anime({
    targets: '.work__gallery-item--image-b',
    keyframes: [
      {translateY: -window.innerHeight, duration: workImagesTransitionDuration / 2, easing: 'easeInElastic(1, .8)'},
      {translateY: window.innerHeight, duration: 0},
      {translateY: 0, duration: workImagesTransitionDuration, easing: 'easeOutElastic(1, .8)',}
    ],
    loop: false
  });
}