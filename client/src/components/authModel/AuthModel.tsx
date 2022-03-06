import { useState } from "react";
import styled from "styled-components";
import Login from "./steps/Login";
import Otp from "./steps/Otp";
import Register from "./steps/Register";
import {Close} from "@mui/icons-material"

const STEPS = [Login,Register,Otp]

const Wrapper = styled.div`
    position: fixed;
    background: rgba(0,0,0,0.5);
    left:0 ;
    right: 0;
    top:0 ;
    bottom: 0;
    display:flex ;
    align-items: center;
    justify-content: center;
    height:100% ;
`

const CloseIconDiv = styled.div`
    position: absolute ;
    right:-40px;
    top:0 ;
    cursor: pointer;
`

const Main = styled.div`
    background:#fff ;
    max-width:700px ;
    width:100% ;
    display:flex ;
    height:100% ;
    max-height:500px ;
    position:relative ;
    border-radius:0.25em ;
`

const WrapperLeft = styled.div`
    background:${({theme}) => theme.colors.primary};
    padding:2em ;
    width:40% ;
    display:flex ;
    flex-direction:column ;

    h1{
        color: #fff;
        font-size:1.5rem ;
        font-weight: 500;
    }

    p{
        color:#fff ;
        margin-top:1em ;
    }

    img{
        width: 200px;
        height: 200px;
        object-fit:contain ;
        justify-self:flex-end ;
        margin-top: auto ;
    }

`

const WrapperRight = styled.div`
    width:60% ;
`

export default function AuthModel():JSX.Element{
    const [step,setStep] = useState<number>(2)

    const Component = STEPS[step]

    return (
        <Wrapper>
            <Main>
            <CloseIconDiv>
                <Close style={{color:"#fff",fontSize:"2rem"}}/>
            </CloseIconDiv>
            <WrapperLeft>
                <h1>Login</h1>
                <p>Get access to your Orders, Wishlist and Recommendations</p>
                <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/login_img_c4a81e.png"/>
            </WrapperLeft>
            <WrapperRight>
                <Component/>
            </WrapperRight>
            </Main>
        </Wrapper>
    )

}   