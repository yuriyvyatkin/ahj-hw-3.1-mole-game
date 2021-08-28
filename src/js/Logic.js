export default class Logic {
  constructor(dead, lost, gameField) {
    this.dead = dead;
    this.lost = lost;
    this.gameField = gameField;
    this.holesNumber = 16;
    this.activeHole = null;
    this.currentScore = 0;
    this.losingScore = 5;
  }

  activateHole() {
    if (this.lost.textContent < this.losingScore) {
      const nextHoleIndex = Math.floor(1 + Math.random() * this.holesNumber);
      this.activeHole = this.gameField.querySelector(`#hole${nextHoleIndex}`);
      this.activeHole.className = 'hole hole_has-mole';
      this.currentScore = +this.dead.textContent;
    } else {
      this.dead.textContent = 0;
      this.lost.textContent = 0;
      // alert('Вы проиграли');
    }
  }

  deactivateHole() {
    this.activeHole.className = 'hole';

    if (this.currentScore === +this.dead.textContent) {
      this.lost.textContent = +this.lost.textContent + 1;
    }
  }
}
