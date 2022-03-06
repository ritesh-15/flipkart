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
        font-size:1rem ;
        margin-bottom:2em ;
        text-align:center ;
        max-width:50% ;
        margin-left:auto ;
        margin-right: auto ;

        small{
            color:${({theme}) => theme.colors.primary} ;
            font-size:1rem ;
            font-weight:500 ;
        }
    }
`

const FormControl = styled.div`
    margin-bottom:2em ;

  
`

const OtpButton = styled.div`
margin-top:1em ;

    button{
        background:${({theme}) => theme.colors.primary}  ;
        width:100%;
        color:#fff ;
        padding:1em ;
        font-weight:500 ;
    }


`

const RequestOtpButton = styled.div`
    margin-top: 1em;


    p{
        font-size:1rem ;
        margin-bottom:2em ;
        text-align:center ;
        color:${({theme}) => theme.colors.textLight} ;
        

        small{
            color:${({theme}) => theme.colors.primary} ;
            font-size:1rem ;
            font-weight:500 ;
            cursor: pointer;
        }
    }


`



export default function Otp():JSX.Element{
    return (
        <Wrapper>
            <Form>
                <p>Please enter OTP sent to  9373953501 <small>Change</small></p>
                <FormControl>
                    <TextField  fullWidth  label="One Time Password" variant="filled" />
                </FormControl>
                <OtpButton>
                <Button>
                    Verify
                </Button>
                </OtpButton>
            </Form>
            <RequestOtpButton>
                    <p>Not recivied your code? <small>Resend code</small></p>
                </RequestOtpButton>
                
        </Wrapper>
    )
}