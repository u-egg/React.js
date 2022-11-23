import React from "react";

function Header(props) {
  return (
    <div>
      <div className="static_header">
        <div className="header_frame">
          <img src="https://w.namu.la/s/cfb74de97649fe10f8036170b58d7a5fa78ac20015413eeb1c0958dbe7230b3380f9cb3d5eed93a00560f3e6d50bfabcdc4814193b2641272b5b72ff8e31f8ade841228676517d8a4e4fb91aa8eeafa66c7694381f0952c4d4fa84ee9ee088a0"></img>
          <div className="header_nav">
            <ul>
              <li>회사 소개</li>
              <li>고객센터</li>
              <li>자주 묻는 질문</li>
              <li>토스인증서</li>
              <li>채용</li>
              <span className="blank"></span>
              <li>KOR</li>
              <span>|</span>
              <li>ENG</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Header;
