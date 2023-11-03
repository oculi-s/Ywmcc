import { $, $$ } from '../_.js';

$('.a-21 label').onchange = e => {
    if (e.target.checked) {
        $$('tr.green').forEach(e => {
            e.classList.remove('d');
        })
    } else {
        $$('tr.green').forEach(e => {
            e.classList.add('d');
        })
    }
}

$('.down').onclick = () => {
    var csv = '';
    $$('.meta th').forEach(e => { csv += `"${e.innerText}",` });
    csv += '\r\n';
    $$('.meta td').forEach(e => { csv += `"${e.innerText}",` });
    csv += '\r\n';
    csv += '\r\n"상담내역"\r\n';
    csv += '"유형","날짜","시간","내용","상담내용","상담후기"\r\n';
    $$('.a-21 tbody tr:not(.d)').forEach(tr => {
        if (tr.classList.contains('red')) {
            csv += '"취소",';
        } else {
            csv += '"진행",';
        }
        tr.children.forEach(td => {
            var v = td.innerText;
            if (!v && td.firstElementChild) {
                v = `"${td.firstElementChild.value}"`;
            }
            v = v.replaceAll('\n', ',');
            csv += `"${v}",`;
        })
        csv += '\r\n';
    });
    csv += '\r\n"검사내역"\r\n';
    var type = ['우울', '불안', '스트레스'];
    csv += '"유형","날짜","시간","결과",\r\n';
    $$('.a-22 article').forEach((art, i) => {
        art.$$('tbody tr').forEach(tr => {
            csv += `"${type[i]}",`;
            tr.children.forEach(td => {
                csv += `"${td.innerText}",`;
            })
            csv += '\r\n';
        });
    })
    var file = new Blob(["\ufeff" + csv], { type: 'text/csv' });
    file = URL.createObjectURL(file);
    var a = document.createElement('a');
    a.href = file;
    var d = new Date();
    var date = d.toLocaleDateString('ko-KR', { year: 'numeric', month: '2-digit', day: '2-digit' }).replaceAll(' ', '').replaceAll('.', '');
    var time = d.toLocaleTimeString('it-IT');
    a.setAttribute('download', `${date}_${time}.csv`);
    a.click();
}