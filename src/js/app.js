import Handlers from './Handlers';
import Init from './Init';

const status = document.body.querySelector('#status');
const dead = status.querySelector('#dead');
const lost = status.querySelector('#lost');
const gameField = document.body.querySelector('#game-field');
const handlers = new Handlers(dead, gameField);
const init = new Init(dead, lost, gameField);

handlers.assign();
init.run();
