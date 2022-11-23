import React from 'react';

let nav_text =['서비스 이용약관','통합 금융정보 서비스 약관','마이데이터 서비스 이용약관','이용자의 권리 및 유의사항','개인정보 처리방침','채용팀 개인정보 처리방침','영상정보처리기기 운영 관리 방침','위치기반서비스 이용약관','가맹점 고지사항','토스 전자서명인증업무준칙','토스 전자인증서비스약관','금융소비자보호']
function FooterBottomNav(props) {
    return (
        <div className='footerbottomnav'>
            <div>{nav_text[0]}</div>
            <div>{nav_text[1]}</div>
            <div>{nav_text[2]}</div>
            <div>{nav_text[3]}</div>

            <div><strong>{nav_text[4]}</strong></div>
            <div><strong>{nav_text[5]}</strong></div>
            <div>{nav_text[6]}</div>
            <div>{nav_text[7]}</div>

            <div>{nav_text[8]}</div>
            <div>{nav_text[9]}</div>
            <div>{nav_text[10]}</div>
            <div>{nav_text[11]}</div>
        </div>
    );
}

export default FooterBottomNav;