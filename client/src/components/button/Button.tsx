import styled from "styled-components"

interface ButtonProps extends React.DetailedHTMLProps<React.ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>{
    children:string | JSX.Element
}

const Wrapper = styled.div`

    button{
        padding: 0.5em 1em;
        font-family:inherit;
        font-size:1rem;
        background:transparent;
        outline: none;
        border:none;
        cursor: pointer;
        border-radius:0.15em ;
    }

`

export default function Button(props:ButtonProps):JSX.Element{
    return (
        <Wrapper>
            <button {...props}>
                {props.children}
            </button>
        </Wrapper>
    )
}