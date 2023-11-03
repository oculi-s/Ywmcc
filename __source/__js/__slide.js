import { $, $$ } from './_.js';

let imgList = $('.slide ul')

function imgNext() {
    let cen = $('.center');
    let left = imgList.firstElementChild;
    let right = cen.nextElementSibling;
    let v = parseInt(cen.getAttribute('name'));
    let sel = $(`.sel [value="${v}"]`);
    if (right) {
        cen.classList.replace('center', 'left');
        right.classList.replace('right', 'center');
        left.classList.replace('left', 'right');
        sel.checked = false;
        left.remove();
        imgList.append(left);
        $(`.sel [value="${right.getAttribute('name')}"]`).checked = true;
        return true;
    } else {
        return false;
    }
}

function imgPrev() {
    let cen = $('.center');
    let right = imgList.lastElementChild;
    let left = cen.previousElementSibling;
    let v = parseInt(cen.getAttribute('name'));
    let sel = $(`.sel [value="${v}"]`);
    if (left) {
        cen.classList.replace('center', 'right');
        left.classList.replace('left', 'center');
        right.classList.replace('right', 'left');
        sel.checked = false;
        right.remove();
        imgList.prepend(right);
        $(`.sel [value="${left.getAttribute('name')}"]`).checked = true;
        return true;
    } else {
        return false;
    }
}

function imgSel(value) {
    let name = $('.center').getAttribute('name');
    if (name == value) {
        return true;
    } else if (name < value) {
        imgNext();
        imgSel(value);
    } else {
        imgPrev();
        imgSel(value);
    }
}

$$('[name=view]').forEach(e => {
    e.onchange = () => {
        clearInterval(imgMove);
        imgSel($('[name=view]:checked').value);
    }
});

$('.next').onclick = () => {
    clearInterval(imgMove);
    imgNext();
};
$('.prev').onclick = () => {
    clearInterval(imgMove);
    imgPrev();
};

let imgMove = setInterval(() => {
    let res = imgNext();
    if (!res) {
        clearInterval(imgMove);
    }
}, 3000);