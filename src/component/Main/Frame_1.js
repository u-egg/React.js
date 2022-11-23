import React from 'react';

function Frame_1(props) {
    return (
        <div>
            <section className='main_box_top'>
                <div className='bg_frame'>
                    <img className='bg_img' src='https://static.toss.im/assets/homepage/newtossim/new_main.png'></img>
                </div>
                <div className='frame_1_text'>
                    <h1>금융의 모든 것<br/>
                    토스에서 쉽고 간편하게</h1>
                    <button><i class="apple icon"></i> App Store</button>
                    <button><i class="google play icon"></i> Google Play</button>
                </div>
                <div className='frame_1_text2'>
                    <p>
                    내 모든 금융 내역을 한눈에 조회하고 한 곳에서 관리하세요.<br/>
                    이제껏 경험 못 했던 쉽고 편리한 금융 서비스,<br/>
                    토스와 함께라면 당신의 일상이 새로워질 거예요. 
                    </p>
                </div>
            </section>
        </div>
    );
}

export default Frame_1;