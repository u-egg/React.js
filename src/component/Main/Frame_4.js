import React from 'react';
import $ from 'jquery';

function Frame_4(props) {

    $(document).ready(function(){

        // for(let i = 1; i<4; i++){
        //     $('.phone_contents' + i).hide();
        // }

        // let num = 1;

        // const timer = setInterval(function(){

        //     $('.phone_contents'+ num).show(1000);
            
        //     num++;
        // }, 3000)

    });

    return (
        <div>
            <section>
                <div className='frame_4'>
                    <div className='frame4_contentbox'>
                        <div>
                            <div className='frame4_content_1'>
                                <h1>대출</h1>
                                <h2>여러 은행의 조건을<br/>
                                1분 만에<br/>
                                확인해보세요</h2>
                            </div>
                            <div className='frame4_img'>

                                <img src="https://static.toss.im/screens/iPhone12_Clay_Shadow.png" className='phone'></img>
                                
                                <img src="https://static.toss.im/assets/homepage/newtossim/section1_3_loan_01.png" className='phone_contents1'></img>
                                <img src="https://static.toss.im/assets/homepage/newtossim/section1_3_loan_02.png" className='phone_contents2'></img>
                                <img src="https://static.toss.im/assets/homepage/newtossim/section1_3_loan_03.png" className='phone_contents3'></img>

                            </div>
                            <span>한도는 높게,</span>
                            <span>금리는 <strong className='color_1'>낮게,</strong></span>
                            <span>부담은 <strong className='color_2'>적게,</strong></span>

                            <p>
                                앉은 자리에서 여러 은행의 한도와 금리를 비교하고<br/>
                                내게 꼭 맞는 대출을 찾아보세요.<br/>
                                신용, 비상금, 대환, 주택담보대출 모두 가능해요.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}

export default Frame_4;