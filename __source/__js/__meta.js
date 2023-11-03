import { $, $$ } from "./_.js";
import * as $x from "./xhr.js";

export function color(list) {
    let o = { behavior: "auto", block: "center" };
    console.log(list);
    list[0].scrollIntoView(o);
    list.forEach(e => { if (e) { e.classList.add('red'); } });
    setTimeout(() => { list.forEach(e => { if (e) { e.classList.remove('red'); } }); }, 1000);
}

let c1 = $('[name=c1]');
let c2 = $('[name=c2]');

export async function get(close = 'div') {
    let b1 = $('[name=b1]:checked');
    let b2 = $('[name=b2]:checked');
    let b3 = $('[name=b3]:checked');
    let b4 = $('[name=b4]:checked');

    let meta = {};
    if (!b1) {
        alert('성별을 선택해주세요.');
        color([$('[name=b1]').closest(close)]);
        return false;
    } else if (!b2) {
        alert('대학을 선택해주세요.');
        color([$('[name=b2]').closest(close)]);
        return false;
    } else if (!b3) {
        alert('학년을 선택해주세요.');
        color([$('[name=b3]').closest(close)]);
        return false;
    } else if (!b4) {
        alert('정보 수집에 동의해주세요.');
        color([$('[name=b4]').closest(close)]);
        return false;
    } else {
        if (c1) {
            if (!c1.value) {
                alert('이름을 입력해주세요');
                color([c1.closest(close)]);
                return false;
            } else if (!c2.value) {
                alert('전화번호를 입력해주세요');
                color([c2.closest(close)]);
                return false;
            }
            meta.c1 = c1.value;
            meta.c2 = c2.value;
        }
        meta.b1 = b1.value;
        meta.b2 = b2.value;
        meta.b3 = b3.value;
        return meta;
    }
}

export async function set(uid, meta) {
    let res = await $x.set.meta(uid, meta);
    if (res.status == 200) {
        location.href = '/apply/about';
    } else if (res.status == 400) {
        alert(res.responseText);
        setTimeout(() => {
            set(uid, meta);
        }, 1000);
    } else if (res.status == 401) {
        alert(res.responseText);
    }
}