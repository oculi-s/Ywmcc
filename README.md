# YWMCC

<div align="center">
  <a href="https://wmcc.yonsei.ac.kr">
    <img src="./__source/__img/logo_login.png" alt="Logo" height="180">
  </a>
  <h3 align="center">연세대학교 원주의과대학 학생상담코칭센터</h3>
  <p align="center">
    연세대학교 원주의과대학의 학생상담/자가검사 서비스
    <br/>
    <a href="https://wmcc.yonsei.ac.kr" target=blank>바로가기</a>

    보안상 개인정보와 사용된 백엔드코드는 모두 비공개 처리되었습니다.  
    디자인/프레임워크를 중심으로 공개됩니다.
  </p>

</div>


## 개발정보
1) DB control : File-system
2) Framework : ![Node.js] ![Express.js]
3) UserControl : ![Passport.js]
4) Server : ![Ubuntu] ![Nginx]

## 주요기능
1) 상담신청 및 수정
2) 자가 심리상태 검사
3) 공지사항 작성, 수정, 이미지 첨부
4) 관리자 페이지를 통한 유저 관리

## 보안정보
1) 가입 및 로그인
 - 연세대학교 메일을 보유한 사람만 인증번호 수신 후 가입가능
 - 본 서버에서 계정과 관련해 수행하는 기능은 오직 메일 발신 뿐
 - 사용자의 메일 노출 이외에 가입과정에서 보안문제 :x:
2) 개인정보 보호
 - 제3자 제공을 방지하기 위해 uid에 따라 파일 분류, 자신의 uid에 맞는 파일만 불러오도록 설정
 - 미로그인 유저의 상담신청을 서버상에서 방지
 - GET이 아닌 POST 요청을 통한 상담신청 및 수정
 - 로그인 정보 유지 시간 **10분**으로 설정



[Gmail]: https://img.shields.io/badge/Gmail-EA4335?logo=gmail&logoColor=fff&style=flat
[Tistory]: https://img.shields.io/badge/Tistory-000?logo=tistory&logoColor=fff&style=flat
[Node.js]: https://img.shields.io/badge/Node.js-393?logo=nodedotjs&logoColor=fff&style=flat
[Express.js]: https://img.shields.io/badge/Express-000?logo=express&logoColor=fff&style=flat
[Passport.js]: https://img.shields.io/badge/Passport-34E27A?logo=passport&logoColor=000&style=flat
[React]: https://img.shields.io/badge/React-61DAFB?logo=react&logoColor=000&style=flat
[Next.js]: https://img.shields.io/badge/Next.js-000?logo=nextdotjs&logoColor=fff&style=flat
[NextAuth]: https://img.shields.io/badge/NextAuth-000000?style=flat&logo=nextdotjs&logoColor=white
[Ubuntu]: https://img.shields.io/badge/Ubuntu-E95420?logo=ubuntu&logoColor=fff&style=flat
[Nginx]: https://img.shields.io/badge/NGINX-009639?logo=nginx&logoColor=fff&style=flat
[Lets encrypt]: https://img.shields.io/badge/Let's%20Encrypt-003A70?logo=letsencrypt&logoColor=fff&style=flat
[CPP]: https://img.shields.io/badge/C%2B%2B-00599C?logo=cplusplus&logoColor=fff&style=flat
[Python]: https://img.shields.io/badge/python-3670A0?style=flat&logo=python&logoColor=ffdd54
[Tensorflow]: https://img.shields.io/badge/TensorFlow-%23FF6F00.svg?style=flat&logo=TensorFlow&logoColor=white
[OpenAI]: https://img.shields.io/badge/OpenAI-412991?logo=openai&logoColor=fff&style=flat
[Clang]: https://img.shields.io/badge/C-A8B9CC?logo=c&logoColor=fff&style=flat
[Coffee]: https://www.buymeacoffee.com/assets/img/custom_images/orange_img.png
[CodeForces]: https://badges.joonhyung.xyz/codeforces/oculis.svg
[Solved.ac]: http://mazassumnida.wtf/api/mini/generate_badge?boj=oculis