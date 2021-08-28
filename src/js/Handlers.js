export default class Handlers {
  constructor(dead, gameField) {
    this.dead = dead;
    this.gameField = gameField;
  }

  assign() {
    for (const hole of this.gameField.querySelectorAll('.hole')) {
      hole.onclick = () => {
        if (
          !hole.className.includes('disabled')
          && hole.className.includes('hole_has-mole')
        ) {
          hole.classList.add('disabled');
          this.dead.textContent = +this.dead.textContent + 1;
        }
      };
    }

    this.gameField.addEventListener('pointerover', (event) => {
      const { target } = event;
      const parent = event.currentTarget;

      if (target.className.includes('hole hole_has-mole')) {
        parent.classList.add('hammer');
      } else {
        parent.classList.remove('hammer');
      }
    });
  }
}
