alert('비밀번호 재설정 메일이 발송되었습니다.');

let $ = document.querySelector.bind(document);
let time = $('.time');
setInterval(() => {
    if (time) {
        if (time.innerText == 0) {
            let red = Object.fromEntries(new URLSearchParams(location.search)).re || '/';
            location.href = red;
        } else
            time.innerText -= 1;
    }
}, 1000)