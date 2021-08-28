import Logic from './Logic';

export default class Init extends Logic {
  run() {
    setTimeout(() => {
      this.activateHole();
    }, 2000);

    setInterval(() => {
      setTimeout(() => {
        this.deactivateHole();
      }, 1000);
      setTimeout(() => {
        this.activateHole();
      }, 1500);
    }, 2500);
  }
}
