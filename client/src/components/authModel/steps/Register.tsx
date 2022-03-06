import {  TextField } from "@mui/material"
import styled from "styled-components"
import Button from "../../button/Button"
import Input from "../../input/Input"

const Wrapper = styled.div`
    padding:2em ;
`

const Form = styled.form`
    width:100%;

    span{
        display:block ;
        text-align:center ;
        margin-top:1em ;
        text-transform:uppercase ;
        color:${({theme})=> theme.colors.textLight} ;
    }

    p{
        font-size:0.75rem ;
        color:${({theme})=> theme.colors.textLight} ;
    }
`

const FormControl = styled.div`
    margin-bottom:2em ;

  
`

const RegisterButton = styled.div`
margin-top:1em ;

    button{
        background:#FB641B ;
        width:100%;
        color:#fff ;
        padding:1em ;
        font-weight:500 ;
    }


`

const RequestRegisterButton = styled.div`
    margin-top: 1em;

button{
        background:#fff ;
        width:100%;
        color:${({theme}) => theme.colors.primary} ;
        padding:1em ;
        font-weight:500 ;
        box-shadow: 1px 7px 5px 0px #ebebeb;

        &:hover{
            box-shadow: 1px 7px 5px 0px #e6e6e6;
        }
    }


`

const CreateAccountText = styled.a`
    text-align:center ;
    display: block ;
    margin-top: 3em;
    font-size:0.9rem ;
    color:${({theme}) => theme.colors.primary} ;
`

export default function Register():JSX.Element{
    return (
        <Wrapper>
            <Form>
                <FormControl>
                    <TextField  fullWidth  label="Enter email address" variant="standard" />
                </FormControl>
                <p>By continuing, you agree to Flipkart's Terms of Use and Privacy Policy.</p>
                <RegisterButton>
                <Button>
                    Continue
                </Button>
                </RegisterButton>
            </Form>
            <RequestRegisterButton>
                    <Button>
                        Existin User? Log In
                    </Button>
                </RequestRegisterButton>
                
        </Wrapper>
    )
}