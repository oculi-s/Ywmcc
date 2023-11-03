import { $, $$ } from "./_.js";
import * as $x from "./xhr.js";

$('.a2 button').onclick = () => {
    $('.a3').classList.remove('d');
}

let d1 = $('[name=d1]');
let a3 = $('.a3 button');
let uid = $('address').getAttribute('uid');

a3.onclick = async() => {
    let t = $('[name=t]:checked');
    if (t) {
        let d = $('[name=e]:checked')
        let day = d.dataset.day;
        let time = t.dataset.time;
        let info = {
            type: "add",
            after: `${day} ${time}`,
            about: d1.value
        };
        day = `${day.split('-')[1]}월 ${day.split('-')[2]}일`
        if (confirm(`${day} ${time}에 상담을 신청하시겠습니까?`)) {
            let res = await $x.cal.set(info);
            if (res.status == 200) {
                res = await $x.set.apply(uid, info);
                if (res.status == 200) {
                    alert('상담 신청이 완료되었습니다.\n나의 신청내역 페이지로 이동합니다.');
                    location.href = '/user/';
                } else if (res.status >= 400) {
                    alert('다시 시도중입니다.\n페이지를 새로고침하지 말고 잠시 기다려주세요.');
                }
            } else {
                alert('이미 신청이 완료된 시간입니다.\n다른 시간을 선택해주세요.');
            }
        }
    } else {
        alert('시간을 선택해주세요');
    }
}

$$('[name*=c]').forEach(e => {
    e.onkeyup = e => {
        if (e.keyCode == 13) {
            $('.a1 button').click();
        }
    }
});