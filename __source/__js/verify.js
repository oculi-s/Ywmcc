alert('인증 메일이 발송되었습니다.\n인증을 완료하셔야 상담 신청이 가능하니 인증을 꼭 완료해주세요.');

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