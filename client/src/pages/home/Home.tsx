import { TextField } from "@mui/material";
import styled from "styled-components";
import { Slider } from "../../components";
import SliderImages from "../../json/HomeSliderData.json"
import TopBarData from "../../json/HomeTopBarData.json"

const Wrapper = styled.section`
background:${({theme}) => theme.colors.background} ;
min-height:100vh ;
`

const TopBarWrapper = styled.div`
    background:#fff ;
`

const TopBar = styled.section`
display: flex;
justify-content: space-between;
max-width: 1200px;
margin:0 auto ;
background:#fff ;
padding:1em 0 ;
`

const Item = styled.div`
    display: flex;
    flex-direction:column ;
    align-items: center;
    cursor: pointer;

    &:hover{
        span{
            color:${({theme}) => theme.colors.primary}
        }
    }


    img{
        width:70px;
    }

    span{
        margin-top:0.5em ;
        font-size: 0.9rem;
        font-weight:500 ;
        text-transform:capitalize ;
    }
`

export default function Home():JSX.Element{
    return (
       <Wrapper>
           <TopBarWrapper>
           <TopBar>
                {TopBarData.map((data,index) =>  <Item key={index}>
                <img src={data.url} alt=""/>
               <span>{data.text}</span>
                </Item>)}
           </TopBar>
           </TopBarWrapper>
           
       </Wrapper>
    )
}