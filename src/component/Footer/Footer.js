import React from "react";

import FooterNav from "./FooterNav.js";
import FooterText from "./FooterText.js";
import FooterBottomNav from "./FooterBottomNav.js";
import FooterIcon from "./FooterIcon.js";

let nav_1 = [
  "서비스",
  "공지사항",
  "자주 묻는 질문",
  "공동인증서 관리",
  "계정 일시잠금",
  "고객센터",
  "브랜드 리소스 센터",
];

let nav_2 = [
  "회사",
  "회사 소개",
  "토스페이먼츠",
  "토스인슈어런스",
  "토스증권",
  "토스씨엑스",
  "토스뱅크",
  "토스플레이스",
  "채용",
  "블로그",
  "공고",
];

let nav_3 = [
  "문의",
  "사업 제휴",
  "광고 문의",
  "인증 사업 문의",
  "마케팅·PR",
  "IR",
];

let nav_4 = [
  "고객센터",
  "전화: 1599-4905 (24시간 연중무휴)",
  "이메일(고객전용): support@toss.im",
  "이메일(외부기관전용): safe@toss.im",
  "민원 접수",
];

function Footer(props) {
  return (
    <div>
      <div className='footerFrame'>
        <FooterNav
          text_0={nav_1[0]}
          text_1={nav_1[1]}
          text_2={nav_1[2]}
          text_3={nav_1[3]}
          text_4={nav_1[4]}
          text_5={nav_1[5]}
          text_6={nav_1[6]}
        />
        <FooterNav
          text_0={nav_2[0]}
          text_1={nav_2[1]}
          text_2={nav_2[2]}
          text_3={nav_2[3]}
          text_4={nav_2[4]}
          text_5={nav_2[5]}
          text_6={nav_2[6]}
          text_7={nav_2[7]}
          text_8={nav_2[8]}
          text_9={nav_2[9]}
          text_10={nav_2[10]}
        />
        <FooterNav
          text_0={nav_3[0]}
          text_1={nav_3[1]}
          text_2={nav_3[2]}
          text_3={nav_3[3]}
          text_4={nav_3[4]}
          text_5={nav_3[5]}
        />
        <FooterNav
          text_0={nav_4[0]}
          text_1={nav_4[1]}
          text_2={nav_4[2]}
          text_3={nav_4[3]}
          text_4={nav_4[4]}
        />
        <FooterText/>
        <FooterBottomNav/>
        <FooterIcon/>
      </div>
      
    </div>
  );
}

export default Footer;
