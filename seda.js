const heart = document.querySelector('.hold svg');
const hiddenMessage = document.querySelector('.loveyou');

heart.addEventListener('click', () => {
  console.log('clicked it')
  heart.classList.add('grow');

  setTimeout(() => {
    
    
    if(hiddenMessage.classList.contains('show')) {
      hiddenMessage.classList.remove('show')
    } else {
      hiddenMessage.classList.add('show')
    }
    
  }, 250);

  setTimeout(() => {
    if(!heart.classList.contains('grow')) return;
    heart.classList.remove('grow')
    hiddenMessage.classList.remove('show')
  }, 5000);
})


let lastKnownScrollPosition = 0;
let ticking = false;

function doAnimation(scrollPos) {
  // Do something with the scroll position
  const tapHeartText = document.querySelector('.hold h3');
  const memory1 = document.querySelector('.memory-1')
  const memory2 = document.querySelector('.memory-2')
  const memory3 = document.querySelector('.memory-3')
  const memory4 = document.querySelector('.memory-4')
  const memory5 = document.querySelector('.memory-5')
  const item1 = document.querySelector('.grid .item-1');
  const item2 = document.querySelector('.grid .item-2');
  const item3 = document.querySelector('.grid .item-3');
  const item4 = document.querySelector('.grid .item-4');
  const footerHeart = document.querySelector('.footer svg');
  if(window.scrollY > 400) {
    tapHeartText.classList.add('animate__animated', 'animate__backInUp')
    tapHeartText.classList.remove('hideEl')
  }

  if(window.scrollY > 1100) {
    memory1.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory1.classList.remove('hideEl')
  }
  if(window.scrollY > 1700) {
    memory2.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory2.classList.remove('hideEl')
  }
  if(window.scrollY > 2300) {
    memory3.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory3.classList.remove('hideEl')
  }

  if(window.scrollY > 2900) {
    memory4.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory4.classList.remove('hideEl')
  }

  
  if(window.scrollY > 3550) {
    memory5.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory5.classList.remove('hideEl')
  }

  if(window.scrollY > 4650) {
    item1.classList.add('animate__animated', 'animate__zoomIn')
    item1.classList.remove('hideEl')
  }

  if(window.scrollY > 4950) {
    item2.classList.add('animate__animated', 'animate__zoomIn')
    item2.classList.remove('hideEl')
  }
  if(window.scrollY > 5250) {
    item3.classList.add('animate__animated', 'animate__zoomIn')
    item3.classList.remove('hideEl')
  }
  if(window.scrollY > 5550) {
    item4.classList.add('animate__animated', 'animate__zoomIn')
    item4.classList.remove('hideEl')
  }

  if(window.scrollY > 5730) {
    footerHeart.classList.add('animate__animated', 'animate__bounce')
    footerHeart.classList.remove('hideEl')
  }


}

document.addEventListener('scroll', (e) => {
  lastKnownScrollPosition = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      doAnimation(lastKnownScrollPosition);
      ticking = false;
    });

    ticking = true;
  }
})
