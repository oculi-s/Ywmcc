import { $, $$ } from "./_.js";
import * as $m from "./__meta.js";

let b4 = $('[name=b4]');
b4.onchange = async() => {
    if (b4.checked) {
        $('.a1').classList.remove('d');
    } else {
        $('.a1').classList.add('d');
    }
}

let a1 = $('.a1 button');
let uid = $('address').getAttribute('uid');

a1.onclick = async() => {
    let meta = await $m.get('tr');
    if (meta) {
        await $m.set(uid, meta);
    }
}

$$('[name*=c]').forEach(e => {
    e.onkeyup = e => {
        if (e.keyCode == 13) {
            $('.a1 button').click();
        }
    }
});