const fs = require('fs');
const path = require('path');
const express = require('express');
const session = require('express-session');
const fileupload = require('express-fileupload');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
const passport = require('passport');
const app = express();

const s = path.join(__dirname, '__source');
const au = require('./__module/au');
const ba = require('./__module/ba');
const git = require('./__module/git');
const set = require('./__module/__res/set');
const cal = require('./__module/__res/cal');
const date = require('./__module/date');
const pass = require('./__module/__auth/passport');
const admin = require('./__module/admin');
const board = require('./__module/board');
const { isLoggedIn } = require('./__module/log');
const m10 = 60 * 1000 * 10;
require('./__module/__auth/config')();
require('dotenv').config();

app.use(
    session({
        secret: process.env.COOKIE_SECRET,
        resave: false,
        saveUninitialized: false,
        cookie: {
            httpOnly: true,
            secure: false,
            maxAge: m10,
        }
    })
);

app.set('views', __dirname + '/__view');
app.set('view engine', 'ejs');
app.use(passport.initialize());
app.use(passport.session());
app.use(bodyParser.urlencoded({ limit: '1gb', extended: true }))
app.use(bodyParser.json({ limit: '1gb' }))
app.use('/__source', express.static(s, { maxAge: m10, }));
app.use('/.well-known', express.static(__dirname + '/.well-known'));
app.use(fileupload());
app.use(cookieParser(process.env.COOKIE_SECRET));

app.use('/__/cal', cal);
app.use('/__/set', set);
app.use('/__/au', pass);
app.use('/__/git', git);
app.get('/login', (req, res) => {
    res.render('login', ba.opt(req));
}).get('/verify', isLoggedIn, (req, res) => {
    au.mail(req, res);
}).get('/verified', (req, res) => {
    au.verified(req, res);
}).get('/error', (req, res) => {
    res.render('__sub/error', req.query);
}).post('/reset', (req, res) => {
    au.reset(req, res);
}).get('/reset', (req, res) => {
    au.resetpw(req, res);
});

function get(view, option, res) {
    if (!option.auth || true) { // || extime >= ba.now()) {
        res.render(view, option);
    } else {
        let m = "세션이 만료되었습니다.\n다시 로그인해주세요."
        res.redirect(ba.error(option.req.url, m));
    }
}

app.use('/board', board);
app.use('/admin', admin);
app.get('/', (req, res) => {
    ba.hit(ba.d.hit, req)
    let dict = ba.opt(req);
    dict.board = ba.json(ba.d.board.header);
    dict.hit = ba.json(ba.d.hit);
    dict.date = date;
    get('index', dict, res);
})

app.get('/intro', (req, res) => {
    get('intro/index', ba.opt(req), res);
}).get('/intro/member', (req, res) => {
    let dict = ba.opt(req);
    dict.member = ba.json(ba.d.member);
    get('intro/member', dict, res);
}).get('/intro/program', (req, res) => {
    let dict = ba.opt(req);
    dict.program = ba.json(ba.d.program);
    get('intro/program', dict, res);
}).get('/intro/location', (req, res) => {
    get('intro/location', ba.opt(req), res);
})

app.get('/test', (req, res) => {
    let dict = ba.opt(req);
    dict.test = ba.json(ba.d.test);
    dict.user = false;
    if (req.user) {
        let uid = req.user.uid;
        dict.user = ba.json(ba.d.admin.meta)[uid] || {};
    }
    get('test', dict, res);
})

app.get('/apply/', (req, res) => {
    let dict = ba.opt(req);
    dict.user = false;
    if (req.user) {
        let uid = req.user.uid;
        dict.user = ba.json(ba.d.admin.meta)[uid] || {};
    }
    get('apply/meta', dict, res);
}).get('/apply/about', isLoggedIn, (req, res) => {
    let dict = ba.opt(req);
    dict.user = false;
    if (req.user) {
        let uid = req.user.uid;
        dict.user = ba.json(ba.d.admin.meta)[uid] || false;
        get('apply/index', dict, res);
    } else {
        res.redirect('/apply/');
    }
})

app.get('/user', (req, res) => {
    let dict = ba.opt(req);
    if (req.user) {
        let uid = req.user.uid;
        dict.user = ba.json(ba.d.admin.apply(uid));
        get('user/index', dict, res);
    } else {
        res.redirect(`/login?re=${ba.enc(req.url)}`);
    }
}).get('/user/test', (req, res) => {
    let dict = ba.opt(req);
    if (req.user) {
        let uid = req.user.uid;
        dict.user = ba.json(ba.d.admin.test(uid));
        dict.test = ba.json(ba.d.test);
        get('user/test', dict, res);
    } else {
        res.redirect(`/login?re=${ba.enc(req.url)}`);
    }
})

app.get('*', (req, res) => {
    res.render('404', ba.opt(req));
});

app.listen(4000);
