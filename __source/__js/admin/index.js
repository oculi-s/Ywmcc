import { $, $$ } from '../_.js';

$$('article label').forEach(e => {
    let hide = e.closest('article').$$('tr.d');
    e.onchange = e => {
        if (e.target.checked) {
            hide.forEach(e => {
                e.classList.remove('d');
            })
        } else {
            hide.forEach(e => {
                e.classList.add('d');
            })
        }
    }
});