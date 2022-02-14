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
      [...document.querySelectorAll('.talking-mouth')].forEach((element) => {
        element.classList.remove('-anim');
      });
      audio.fastSeek(0);
      audio.play();
      window.setTimeout(() => {
        // browser needs some time before triggering animation again
        [...document.querySelectorAll('.talking-mouth')].forEach((element) => {
          element.classList.add('-anim');
        });
      }, 0);
    });
  }
}
