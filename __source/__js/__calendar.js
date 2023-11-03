import { $, $$ } from './_.js';
import * as $x from './xhr.js';

$$('.calendar .date [type=radio]').forEach(e => {
    e.onchange = async() => {
        let res = await $x.cal.day(e.dataset.day);
        if (res.status == 200) {
            let day = e.closest('.calendar').$('.day');
            day.classList.remove('d');
            day.innerHTML = res.response;
        }
    }
})