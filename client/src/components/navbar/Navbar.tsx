import styled from "styled-components"
import {Button} from "../"
import {Search,ShoppingCart} from "@mui/icons-material"
import AuthModel from "../authModel/AuthModel"

const Wrapper = styled.header`
    background: ${props => props.theme.colors.primary};
    display: flex;
    justify-content: center;
    align-items: center;
    z-index:100;
    position:sticky ;
    top: 0;
`

const Nav = styled.nav`
    width:100%;
    max-width:1100px;
    padding: 0.5em 0;
    display:flex;
    justify-content: space-between;
`

const NavRight = styled.div`
    display:flex;
    align-items: center;
    flex: 1;
`

const NavLogo = styled.div`
    width: 80px;


    img{
        width:100%;
        height:100%;
        object-fit:contain;
    }
`

const NavSearch = styled.div`
    flex: 1;
    width:90%;
    display:flex;
    align-items: center;
    background: ${props => props.theme.colors.white};
    max-width:500px ;
    padding:0.5em 1em ;
    margin-left:1em;
    border-radius:0.2em ;

    input{
        background: transparent;
        outline:none ;
        border: none;
        width:100%;
        margin-right: 0.5em;
        font-size:1rem;
    }
`

const NavActions = styled.div`
    display:flex ;
    align-items: center;

    button{
        background:${props => props.theme.colors.white} !important;
        color:${props => props.theme.colors.primary};
        font-weight:500 ;
        padding: 0.5em 2em;
    }

`

const NavMore = styled.div``

const NavCart = styled.div`
    display: flex;
    align-items: center;
    margin-left:2em ;

    span{
        margin-left:0.5em ;
        color: #fff;
        font-weight:500 ;
    }
    
`

const CartIcon = styled(ShoppingCart)`
    color: #fff;
`

const SearchIcon = styled(Search)`
   color:${props => props.theme.colors.primary};
`


export default function Navbar():JSX.Element{
    return (
        <Wrapper>
            <AuthModel/>
          <Nav>
              <NavRight>
              <NavLogo>
                  <img src="https://static-assets-web.flixcart.com/www/linchpin/fk-cp-zion/img/flipkart-plus_8d85f4.png" alt="" />
              </NavLogo>
              <NavSearch>
                  <input type="text" placeholder="Search for product and more"/>
                  <SearchIcon/>
              </NavSearch>
              </NavRight>
              <NavActions>
                  <Button>Login</Button>
                  <NavMore></NavMore>
                  <NavCart>
                      <CartIcon/>
                      <span>Cart</span>
                  </NavCart>
              </NavActions>
          </Nav>
        </Wrapper>
    )
}