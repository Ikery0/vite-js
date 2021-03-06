export class ScrollObserver {
  constructor(els, method, options) {
    this.els= document.querySelectorAll(els);
    const defaultOptions = {
      root: null,
      rootMargin: "0px",
      threshold: 0,
      once: true,
    }
    this.method = method;
    this.options = Object.assign(defaultOptions, options);
    this.once = this.options.once;
    this.#init();
  }

  #init() {
    const callback = (entries, observer)=> {
      entries.forEach(entry=> {
        if (entry.isIntersecting) {
          this.method(entry.target, entry.isIntersecting);
          if(this.once) {
            observer.unobserve(entry.target);
          }
        } else {
          this.method(entry.target, entry.isIntersecting);
        }
      });
    }

    this.io = new IntersectionObserver(callback.bind(this), this.options);
    this.els.forEach(el => this.io.observe(el));
  }

  destroy() {
    this.io.disconnect();
  }
}