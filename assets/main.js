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

let imgA = getElmnt('.work__gallery-item--image-a')
let imgB = getElmnt('.work__gallery-item--image-b')
let bntUp = getElmnt('.gallery__button--up')

let workImagesTransitionDuration = 1500;
let imgId = 1;
let limiteSuperior = 5

console.log();
bntUp.addEventListener('click', ()=> {
  nextImg()
}
)
// crear la funcion idHandler, que se encargue de aumentar o disminuir el id.  

const nextImg = () => {
  if(imgId == limiteSuperior){
    imgId = 1;
  }
  imagesAnimation()
  imgId += 2;
}

const imagesAnimation = () => {
  let actualImgA = imgId;
  let actualImgB = imgId + 1; 
  let newImgA = imgId + 2;
  let newImgB = imgId + 3;

  galleryImageChangeAnimation('.work__gallery-item--image-a', window.innerHeight, actualImgA, newImgA)
  galleryImageChangeAnimation('.work__gallery-item--image-b', -window.innerHeight, actualImgB, newImgB)
}

const galleryImageChangeAnimation = (element, direction, actualImg, newImg) => {
  anime({
    targets: element,
    keyframes: [
      {backgroundImage: `url(./assets/pruebas/im${actualImg}.png)`, duration: 0},
      {translateY: direction, duration: workImagesTransitionDuration / 2, easing: 'easeInElastic(1, .8)'},
      {translateY: -direction, duration: 0},
      {backgroundImage: `url(./assets/pruebas/im${newImg}.png)`, duration: 0},
      {translateY: 0, duration: workImagesTransitionDuration, easing: 'easeOutElastic(1, .8)',}
    ],
    loop: false
  });
}