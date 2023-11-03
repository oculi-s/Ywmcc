import { $, $$ } from './_.js';
import { au } from './xhr.js';

const body = document.body;

var hide = {};
hide.h = $$('header .hide');
var p = {},
    c = {},
    m = {};

var w1024 = matchMedia('(min-width:1024px)');
w1024.onchange = e => {
    if (e.matches) { p.navSet(); } else { m.navSet(); }
    c.navReset();
};

window.logIn = (url = location.pathname) => {
    location.href = `/login?re=${encodeURIComponent(url)}`;
}

window.logOut = (url = location.pathname) => {
    location.href = `/__/au/out/?re=${encodeURIComponent(url)}`;
};

c.navReset = function() {
    $('header').classList.remove('show');
    $$('.select, header .view').forEach(e => {
        e.classList.remove('select', 'view');
    });
    $$('.p-hide').forEach(h => {
        h.classList.remove('p-show');
    });
    body.classList.remove('b-hide');
};
c.navClick = function() {
    $('header').classList.toggle('show');
    $$('.p-hide').forEach(h => {
        h.classList.toggle('p-show');
    });
    body.classList.toggle('b-hide');
};

p.navSet = function() {
    $$('nav>:not(.log)>p').forEach(e => {
        e.onclick = () => {
            $$('header .hide').forEach(h => {
                h.classList.toggle('view');
            })
        }
    });
};
m.navSet = function() {
    $$('nav>:not(.log)>p').forEach(e => {
        e.onclick = () => {
            e.nextElementSibling.classList.toggle('view');
            e.parentNode.classList.toggle('select');
        }
    });
};

window.onload = () => {
    $('.close').onclick = c.navClick;
    $('.menu').onclick = c.navClick;
    $('div.p-hide').onclick = c.navClick;
    if (w1024.matches) {
        p.navSet();
    } else {
        m.navSet();
    }
    if ($('.lozad')) { lozad().observe(); }
};