
import { Button } from 'antd';
import React from 'react'
import { useHistory } from 'react-router';
import Styled from './HomePage.module.scss';
export default function HomePage() {
    const history = useHistory();
    return (
        <section className={Styled.wrap}>
            <div className={Styled.root}>
                <div className={Styled.getStart}>
                    <div className={Styled.title}> We Deliver Fast With Only 30 Minutes </div>

                    <div className={Styled.action}>
                        <Button type='primary'  shape='round'className={Styled.btn} onClick={()=>{
                            history.push('/sign-up')
                        }}> Using the Service</Button>
                    </div>
                    <div className={Styled.title}>If You Are Looking For A Job</div>

                    <div className={Styled.action}>
                        <Button type='primary' shape='round' className={Styled.btn} onClick={()=>{
                            history.push('/sign-up-shipper')
                        }}>Register as a Shipper</Button>
                    </div>
                </div>
                <div className={Styled.imgShipper}>
                    <img src='./img/deliv.png' alt='shipper' />
                </div>
            </div>
        </section>
    )
}
