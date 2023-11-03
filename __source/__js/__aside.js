import { $ } from './_.js'

var t1 = $('aside>span');
t1.onclick = () => {
    t1.classList.toggle('fold');
    $('aside>ul').classList.toggle('d')
}
var t2 = $('aside>div>h3.p-h');
t2.onclick = () => {
    t2.classList.toggle('fold');
    t2.nextElementSibling.classList.toggle('s');
}