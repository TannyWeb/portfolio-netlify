const heart = document.querySelector('.hold svg');
const hiddenMessage = document.querySelector('.loveyou');

heart.addEventListener('click', () => {
  console.log('clicked it')
  heart.classList.add('grow');

  setTimeout(() => {
    
    
    if(hiddenMessage.classList.contains('animate__animated')) {
      hiddenMessage.classList.remove('animate__animated');
      hiddenMessage.classList.remove('animate__heartBeat');
    } else {
      hiddenMessage.classList.add('animate__animated', 'animate__heartBeat');
      hiddenMessage.classList.remove('hideEl')
    }
    
  }, 250);

  setTimeout(() => {
    if(!heart.classList.contains('grow')) return;
    heart.classList.remove('grow')
    hiddenMessage.classList.add('hideEl');
    hiddenMessage.classList.remove('animate__animated');
    hiddenMessage.classList.remove('animate__heartBeat');
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
  const memory6 = document.querySelector('.memory-6')
  const item1 = document.querySelector('.grid .item-1');
  const item2 = document.querySelector('.grid .item-2');
  const item3 = document.querySelector('.grid .item-3');
  const item4 = document.querySelector('.grid .item-4');
  const footerHeart = document.querySelector('.footer svg');


  if(window.innerWidth < 900 && window.scrollY > 400) {
    tapHeartText.classList.add('animate__animated', 'animate__backInUp')
    tapHeartText.classList.remove('hideEl')
  }else if(window.innerWidth > 900 && window.scrollY > 400) {
    tapHeartText.classList.add('animate__animated', 'animate__backInUp')
    tapHeartText.classList.remove('hideEl')
  } else {
    tapHeartText.classList.remove('hideEl')
  }



  if(window.innerWidth < 900 && window.scrollY > 1100) {
    memory1.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory1.classList.remove('hideEl')
  } else if(window.innerWidth > 900 && window.scrollY > 1000) {
    memory1.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory1.classList.remove('hideEl')
  } else {
    memory1.classList.remove('hideEl')
  }

  if(window.innerWidth < 900 && window.scrollY > 1700) {
    memory2.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory2.classList.remove('hideEl')
  }else if(window.innerWidth > 900 && window.scrollY > 1000) {
    memory2.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory2.classList.remove('hideEl')
  } else {
    memory2.classList.remove('hideEl')
  }

  if(window.innerWidth < 900 && window.scrollY > 2300) {
    memory3.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory3.classList.remove('hideEl')
  }else if(window.innerWidth > 900 && window.scrollY > 1500) {
    memory3.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory3.classList.remove('hideEl')
  } else {
    memory3.classList.remove('hideEl')
  }


  if(window.innerWidth < 900 && window.scrollY > 2900) {
    memory4.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory4.classList.remove('hideEl')
  }else if(window.innerWidth > 900 && window.scrollY > 1500) {
    memory4.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory4.classList.remove('hideEl')
  } else {
    memory4.classList.remove('hideEl')
  }


  
  if(window.innerWidth < 900 && window.scrollY > 3550) {
    memory5.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory5.classList.remove('hideEl')
  }else if(window.innerWidth > 900 && window.scrollY > 2000) {
    memory5.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory5.classList.remove('hideEl')
  } else {
    memory5.classList.remove('hideEl')
  }
  if(window.innerWidth < 900 && window.scrollY > 4000) {
    memory6.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory6.classList.remove('hideEl')
  }else if(window.innerWidth > 900 && window.scrollY > 2000) {
    memory6.classList.add('animate__animated', 'animate__fadeInUpBig')
    memory6.classList.remove('hideEl')
  } else {
    memory6.classList.remove('hideEl')
  }
  

  if(window.innerWidth < 900 && window.scrollY > 5700) {
    item1.classList.add('animate__animated', 'animate__zoomIn')
    item1.classList.remove('hideEl')
  }else if(window.innerWidth > 900 && window.scrollY > 2600) {
    item1.classList.add('animate__animated', 'animate__zoomIn')
    item1.classList.remove('hideEl')
  } else {
    memory1.classList.remove('hideEl')
  }


  if(window.innerWidth < 900 && window.scrollY > 6000) {
    item2.classList.add('animate__animated', 'animate__zoomIn')
    item2.classList.remove('hideEl')
  }
  else if(window.innerWidth > 900 && window.scrollY > 2600) {
    item2.classList.add('animate__animated', 'animate__zoomIn')
    item2.classList.remove('hideEl')
  } else {
    memory1.classList.remove('hideEl')
  }
  if(window.innerWidth < 900 && window.scrollY > 6250) {
    item3.classList.add('animate__animated', 'animate__zoomIn')
    item3.classList.remove('hideEl')
  }
  else if(window.innerWidth > 900 && window.scrollY > 2830) {
    item3.classList.add('animate__animated', 'animate__zoomIn')
    item3.classList.remove('hideEl')
  } else {
    memory1.classList.remove('hideEl')
  }
  if(window.innerWidth < 900 && window.scrollY > 6550) {
    item4.classList.add('animate__animated', 'animate__zoomIn')
    item4.classList.remove('hideEl')
  }
  else if(window.innerWidth > 900 && window.scrollY > 2830) {
    item4.classList.add('animate__animated', 'animate__zoomIn')
    item4.classList.remove('hideEl')
  } else {
    memory1.classList.remove('hideEl')
  }

  if(window.innerWidth < 900 && window.scrollY > 6900) {
    footerHeart.classList.add('animate__animated', 'animate__bounce')
    footerHeart.classList.remove('hideEl')
  }
  else if(window.innerWidth > 900 && window.scrollY > 3000) {
    footerHeart.classList.add('animate__animated', 'animate__bounce')
    footerHeart.classList.remove('hideEl')
  } else {
    memory1.classList.remove('hideEl')
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
