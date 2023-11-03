import { $, $$ } from '../_.js';

let origin = get();
let edit = $('.a-1 button.edit');
edit.onclick = save;

function get() {
    let dict = {};
    $$('.admin.calendar .time input').forEach(c => {
        dict[`${c.dataset.day} ${c.dataset.time}`] = c.checked;
    });
    return dict;
}

function save() {
    if (confirm('저장하시겠습니까?')) {
        let dict = get();
        let diff = Object.keys(dict).filter(k => origin[k] != dict[k]);
        console.log(diff);
        location.href = `/__/cal/admin?info=${escape(diff.join('/'))}`
    }
}