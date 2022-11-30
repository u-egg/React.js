import React from 'react';

function Frame_6(props) {

    const last_img = {
        margin:"0px",
    }

    return (
        <div>
            <div className='frame_6'>
                <div className='frame6_contentbox'>
                    <div className='frame6_content_1'>
                        <h1>투자</h1>
                        <h2>투자,<br/>
                        모두가 할 수 있도록</h2>
                    </div>
                    <div className='frame6_content2'>
                        <img src='https://static.toss.im/assets/homepage/newtossim/section1_5_stock_01.png' className='phone_size_inner'></img>
                        <img src='https://static.toss.im/screens/iPhone12_Clay_Shadow.png' className='phone_size'></img>

                        <div className='img_table'>
                            <img src="https://static.toss.im/assets/homepage/newtossim/section1_5_stock_06.png"></img>
                            <img src="https://static.toss.im/assets/homepage/newtossim/section1_5_stock_08.png"></img>
                            <img src="https://static.toss.im/assets/homepage/newtossim/section1_5_stock_07.png"></img>
                            <img src="https://static.toss.im/assets/homepage/newtossim/section1_5_stock_05.png"></img>
                            <img src="https://static.toss.im/assets/homepage/newtossim/section1_5_stock_02.png"></img>
                            <img src="https://static.toss.im/assets/homepage/newtossim/section1_5_stock_04.png"></img>
                            <img src="https://static.toss.im/assets/homepage/newtossim/section1_5_stock_03.png" style={last_img}></img>
                        </div>

                        <div className='frame6_left'>
                            이해하기 쉬운 용어<br/>
                            설명이 필요 없는<br/>
                            직관적인 화면 구성
                        </div>

                        <div className='frame6_right'>
                        송금처럼 쉬운 구매 경험<br/>
                        그리고 투자 판단에<br/>
                        도움을 주는 콘텐츠까지
                        </div>

                        <div className='frame6_bottom'>
                        별도 앱 설치 없이 토스에서 바로,<br/>
                        토스증권으로 나만의 투자를 시작해 보세요.
                        </div>

                    </div>


                </div>
            </div>
        </div>
    );
}

export default Frame_6;