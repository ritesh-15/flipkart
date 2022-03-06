import styled from "styled-components"

interface InputProps extends React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>{

}

const Wrapper = styled.div`
    width:100%;
    position:relative;
    height:50px ;
    overflow:hidden ;


    label{
        position:absolute;
        top: 0;
        left:0 ;
        bottom:0 ;
        width:100%;
        height:100%;
        pointer-events:none ;
        border-bottom:1px solid ${({theme}) => theme.colors.textLight} ;

        &::after{
            content:"" ;
            position:absolute ;
            width:100% ;
            bottom: -1px;
            height:1px ;
            background: ${props => props.theme.colors.primary} ;
            left:-100%;
            transition: all 250ms ease ;
        }

        span{
            position:absolute ;
            bottom:0.5em;
            transition: all 250ms ease ;
            color:${({theme}) => theme.colors.textLight};
        }
        
    }

    input{
        width:100%;
        outline: none ;
        height: 100%;
        border:none;
        padding-top: 20px;

        &:focus + label{
            &::after{
                left:0 ;
            }

            span{
                transform:translateY(-150%) ;
                font-size:0.75rem ;
                color:${props => props.theme.colors.primary} ;
                
            }
        }
    }

`

export default function Input(props:InputProps):JSX.Element{
    return (
        <Wrapper>
            <input {...props} />
            <label>
                 <span>Email address/Mobile number</span>
            </label>
        </Wrapper>
    )
}