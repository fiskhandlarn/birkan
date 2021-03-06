const CLASS_NAME = 'b-button';
const audio = new Audio('/assets/sounds/bbb.mp3');

export default class BButton {
  static init(...parameters) {
    return new BButton(...parameters);
  }

  static initAll() {
    const ret = [];

    [...document.querySelectorAll(`.${CLASS_NAME}`)].forEach((element) => {
      ret.push(BButton.init(element));
    });

    return ret;
  }

  constructor(domElement) {
    this.element = domElement;
    this.element.addEventListener('mousedown', event => {
      if (event.button === 0) {
        [...document.querySelectorAll('.talking-mouth')].forEach((element) => {
          element.classList.remove('-anim');
        });
        audio.currentTime = 0; // reset so that browser can play again before it's finished
        audio.play();
        window.setTimeout(() => {
          // browser needs some time before triggering animation again
          [...document.querySelectorAll('.talking-mouth')].forEach((element) => {
            element.classList.add('-anim');
          });
        }, 0);
      }
    });
  }
}
