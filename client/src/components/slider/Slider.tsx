import { useEffect, useState } from "react"
import styled from "styled-components"
import {ArrowForwardIos,ArrowBackIos} from "@mui/icons-material"

interface ImageData{
    url:string,
    id:string | number
}

interface SliderInterface{
    data:ImageData[]
}

const Wrapper = styled.section`
    position:relative ;
    display: flex;
    align-items: center;
`

interface ImageContainerProps{
    active:boolean
}

const ImageContainer = styled.div<ImageContainerProps>`
    transition: transform 1s ease-in;
    height: 250px;
`

const Image = styled.img`
    height:100%;
    width:100%;
    object-fit:cover;
`

const Previous = styled(ArrowBackIos)`
    
`

const Next = styled(ArrowForwardIos)`
  
`

const IconDivLeft = styled.div`
    background:#fff ;
    padding:2em 1em;
    border-radius:0.15em;
    position:absolute ;
    right:0 ;
    display:flex ;
    align-items: center;
    justify-content: center;
    cursor:pointer ;
    z-index:10 ;
`

const IconDivRight = styled(IconDivLeft)`
    left: 0;
    right:100%;
`

export default function Slider(props:SliderInterface):JSX.Element{
    const [current,setCurrent] = useState<number>(0)
    const lenght:number = props.data.length
    const [stopSlide,setStopSlide] = useState<boolean>(false)

    useEffect(() => {

        if(stopSlide)
            return

       const time = setTimeout(nextSlide,2000)

        return () => {
            clearTimeout(time)
        }
    },[current,stopSlide])

    const nextSlide = () => {
        setCurrent(current === lenght - 1 ? 0 : current + 1)
    }

    const previousSlide = () =>{
        setCurrent(current === 0 ? lenght - 1 : current - 1)
    }

    return (
        <Wrapper onMouseEnter={() => setStopSlide(true)} onMouseLeave={() => setStopSlide(false)}>
            <IconDivRight onClick={previousSlide}>
                <Previous/>
            </IconDivRight>
                {props.data.map((data,index) => {
                    return (
                        <ImageContainer active={current === index} key={data.id}>
                            {current === index &&   <Image alt="" src={data.url}/>}
                        </ImageContainer>
                    )
                })}
            <IconDivLeft onClick={nextSlide}>
                <Next/>
            </IconDivLeft>
        </Wrapper>
    )
}