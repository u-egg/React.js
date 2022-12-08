import React from "react";

const bgcolor_1={
    "background-color":"#f2f4f6"
}
const bgcolor_2={
    "background-color":"#aeefd5"
}
const bgcolor_3={
    "background-color":"#edccf8"
}
const bgcolor_4={
    "background-color":"#e8f3ff"
}

function Frame_9(props) {
  return (
    <div>
      <section>
        <div className="frame_9">
          <div className="frame9_contentbox">
            <div className="frame6_content_1">
              <h1>알면 좋은 금융</h1>
              <h2>
                이런 서비스도
                <br />
                한번 써보세요
              </h2>
            </div>
            <div className="frame9_box">
              <div className="frame9_flex_box">
                <div className="logo"></div>
                <div className="text">
                  <p>브랜드 캐시백</p>
                  좋아하는 브랜드를 더 사랑할 수 있도록,
                  <br />
                  매주 브랜드를 선택하고 결제 시 캐시백을
                  <br />
                  받아보세요.
                </div>
              </div>
              <div className="frame9_flex_box">
                <div className="logo" style={bgcolor_1}></div>
                <div className="text">
                  <p>숨은 정부지원금 찾기</p>
                  생각지도 못한 지원금이 기다리고 있어요.
                  <br />
                  간단한 정보를 입력 후 받을 수 있는
                  <br />
                  정부지원금을 확인해보세요.
                </div>
              </div>
              <div className="frame9_flex_box">
                <div className="logo" style={bgcolor_2}></div>
                <div className="text">
                  <p>광고 전화 그만 받기</p>
                  시도 때도 없이 오던 광고 전화는 이제 그만.
                  <br />
                  인증 한 번으로 카드 발급, 대출 권유 전화를 그만 
                  <br />
                  받을 수 있어요.
                </div>
              </div>
              <div className="frame9_flex_box">
                <div className="logo" style={bgcolor_3}></div>
                <div className="text">
                  <p>카드 혜택 추천</p>
                  이제, 카드를 내 생활패턴에 맞게.
                  <br />
                  여러 카드를 한 번에 비교하고 내게 꼭 맞는 카드를 
                  <br />
                  선택해 보세요.
                </div>
              </div>
              <div className="frame9_flex_box">
                <div className="logo" style={bgcolor_1}></div>
                <div className="text">
                  <p>내 구독 서비스</p>
                  여기저기 흩어져있던 구독 서비스를 한 곳에서.
                  <br />
                  가입해놓은 구독 서비스를 한 번에 확인하고 관리
                  <br />
                  할 수 있어요.
                </div>
              </div>
              <div className="frame9_flex_box">
                <div className="logo" style={bgcolor_4}></div>
                <div className="text">
                  <p>토스프라임</p>
                  매일 토스와 함께 하신다면 가입해보세요.
                  <br />
                  가입비 월 5,900원으로 토스 간편결제 시 6% 
                  <br />
                  적립, 토스증권 국내주식 수수료 무료 혜택을
                  <br/>
                  누려보세요.
                </div>
              </div>
              <div className="frame9_flex_box">
                <div className="logo" style={bgcolor_2}></div>
                <div className="text">
                  <p>ATM 현금 찾기</p>
                  카드 없이 휴대전화만 챙겨 나와도 됩니다.
                  <br />
                  토스앱만 있다면 근처 ATM에서 현금을 찾을 수 
                  <br />
                  있어요.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Frame_9;
