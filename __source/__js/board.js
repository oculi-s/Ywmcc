import { $, $$ } from './_.js';

$$('.b-main img').forEach(e => {
    e.onclick = () => {
        e.classList.toggle('show');
        document.body.classList.toggle('blur');
    }
});