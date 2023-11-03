import { $, $$ } from './_.js';
import * as $m from './__meta.js';
import * as $x from './xhr.js';

let uid = $('address').getAttribute('uid');

$$('td').forEach(e => {
    var inp = e.$('input');
    if (inp) {
        e.onclick = () => {
            inp.checked = true;
        }
    }
});

function check() {
    var t = [],
        l = [],
        data = [],
        score = 0;
    let i = 1;
    let type = $('.active form').id;
    let form = document.forms[type];
    let e;
    while (e = form[`${type}${i}`]) {
        var value = form[`${type}${i}`].value;
        if (!value) {
            t.push(i);
            l.push(e[0].closest('tr'));
        } else {
            score += parseInt(value);
            data.push(parseInt(value));
        }
        i++;
    };
    if (t.length) {
        alert(t + '번 문항에 답해주세요.');
        $m.color(l);
        return false;
    } else {
        return { type, data, score };
    }
}

function range(s) {
    var t = $$('.active .res tr');
    t.forEach(r => { r.classList.remove('red'); });
    t.forEach(r => {
        if (r.getAttribute('start') <= s && s <= r.getAttribute('end')) {
            r.classList.add('red');
            return true;
        }
    });
    return false;
}

window.calc = async() => {
    var meta = await $m.get();
    if (meta) {
        var info = check();
        if (info) {
            let res = await $x.set.test(uid, info, meta);
            if (res.status == 200) {
                $('.active .num').innerText = info.score;
                $('.active .go').classList.add('o');
                range(info.score);
            } else {
                alert(res.responseText);
            }
        }
    }
}