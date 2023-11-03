import { $$ } from './_.js';

let close = $$('dialog .close');
close.forEach(e => {
    e.onclick = () => {
        e.closest('dialog').open = false;
        document.body.classList.remove('blur', 'b-hide');
        $$('tr.red').forEach(e => { e.classList.remove('red') });
    }
})