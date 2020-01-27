import {bar} from './a.css';
import {baz} from './b.css';

document.body.innerHTML = `
  <div class="${bar}">bar</div>
  <div class="${baz}">baz</div>
`;
