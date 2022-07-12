import { ScrollObserver } from './scroll'

document.addEventListener('DOMContentLoaded', () => {
   const lazyImage = (el, isIntersecting) => {
      if(isIntersecting) {
        el.src = el.dataset.src;
        el.srcset = el.dataset.srcset;
        el.classList.remove('lazy');
      }
    }

  const lazyImageObserver = new ScrollObserver('.lazy', lazyImage, {rootMargin: '20px'})
})




