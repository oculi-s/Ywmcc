import { $, $$ } from './_.js';
var sm = $$('.sm2>*');

sm.forEach((e, c) => {
    e.onclick = () => {
        $$('.sm2 .active').forEach(e => { e.classList.remove('active'); });
        $$('.sm3 .active').forEach(e => { e.classList.remove('active'); });
        $$('.sm3>*')[c].classList.add('active');
        e.classList.add('active');
        $('.sm1').innerText = e.innerText;
        $('.sm2').classList.add('m-h');
    }
});

$('.sm1').onclick = () => {
    $('.sm2').classList.toggle('m-h');
}