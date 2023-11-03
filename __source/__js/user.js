import { $, $$ } from './_.js';
import * as $x from './xhr.js';

let hide = $$('tr.d');
$('.m-22>label').onchange = e => {
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

$$('tbody tr').forEach(tr => {
    let btn = tr.$('button');
    btn.onclick = () => {
        let d = $(`dialog.${btn.className}`);
        document.body.classList.add('blur', 'b-hide');
        d.open = true;
        if (d.$('#about')) d.$('#about').value = tr.children[2].innerText;
        if (d.$('#about')) d.$('#about').innerText = tr.children[2].innerText;
        if (d.$('#comment')) d.$('#comment').innerText = tr.children[3].innerText;
        d.$('.time').innerText = `${tr.dataset.day} ${tr.dataset.time}`
        $$('.red').forEach(e => { e.classList.remove('red') });
        tr.classList.add('red');
    };
})

let save = $('dialog.edit .save');
save.onclick = async() => {
    if (confirm("상담을 수정하시겠습니까?")) {
        let uid = $('address').getAttribute('uid');
        let b = $('tr.red');
        let e = $('[name="e"]:checked') || b;
        let t = $('[name="t"]:checked') || b;
        let d1 = $('dialog.edit #about');
        let before = `${b.dataset.day} ${b.dataset.time}`;
        let after = `${e.dataset.day} ${t.dataset.time}`;
        let info = {
            type: "edit",
            before: before,
            after: after,
            about: d1.value,
        };
        let res = await $x.cal.set(info);
        if (res.status == 200) {
            res = await $x.set.applyedit(uid, info);
            if (res.status == 200) {
                alert('성공적으로 수정되었습니다.')
                location.reload();
            } else {
                alert(res.responseText);
            }
        } else {
            alert(res.responseText);
        }
    }
}

$$('.del').forEach(e => {
    e.onclick = async() => {
        if (confirm('상담 신청을 취소하시겠습니까?')) {
            let uid = $('address').getAttribute('uid');
            let b = $('tr.red') || e.closest('tr');
            let before = `${b.dataset.day} ${b.dataset.time}`;
            let info = {
                type: "user",
                before,
            };
            let res = await $x.cal.set(info);
            if (res.status == 200) {
                res = await $x.set.applydel(uid, info);
                if (res.status == 200) {
                    alert('성공적으로 삭제되었습니다.');
                    location.reload();
                } else {
                    alert(res.responseText);
                }
            } else {
                alert(res.responseText);
            }
        }
    }
});