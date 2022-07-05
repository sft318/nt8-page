import React, { useState } from 'react';
import styled from 'styled-components';
import { AiOutlineMenu } from 'react-icons/ai';
import { GrClose } from 'react-icons/gr';
import { Link as LinkS } from 'react-scroll';

function Header() {
  const [burguerStatus, setBurguerStatus ] = useState(false);

  return (
    <Container>
      <a> Squant </a>

      <Menu>
      </Menu>
      <RightMenu>
        <a href=''></a>
        <a hreef=''></a>
        <AiOutlineMenu onClick={()=>setBurguerStatus(true)} />
      </RightMenu>

      <BurgerNav show={burguerStatus}>
        <CloseWraper>
            <GrClose onClick={()=>setBurguerStatus(false)}/>
        </CloseWraper>
        
        <Data to="principal"><li><a>Indicators</a></li></Data>
        <Data to="platform"><li><a>Platform</a></li></Data>
        <Data to="dataFeed"><li><a>Data Feed</a></li></Data>
        <Data to="disclaimer"><li><a>Disclaimer</a></li></Data>

      </BurgerNav>

    </Container>
  )
}

export default Header;

const Data = styled(LinkS)`
  cursor: pointer;
  
  :hover{
    transform: scale(1.1,1.1);
  }
`;

const Container = styled.div`
  min-heigth: 60px;
  position: fixed;
  display: flex;
  align-items: center;
  padding: 10px 10px 20px;
  justify-content: space-between;
  margin: 6px 18px;
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 10;
  font-size: 1 rem;
  text-transform: uppercase;
  font-weight: 400;

  a {
    font-size: 18px;
    text-transform: uppercase;
  font-weight: 600;
  }
`;
const Menu = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;

  a {
  font-weight: 550;
  text-transform: uppercase;
  padding: 0 10px;
  flex-wrap: nowrap;
  }
  @media (max-width: 768px){
  display: none;
  }
`;
const RightMenu = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
  a { 
  font-weight: 600;
  text-transform: uppercase;
  margin-right: 10px;
  } 

`;
const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: #F3F0F0;
  z-index: 16;
  list-style: none;
  padding: 20px;
  display: flex:
  flex-direction: column;
  text-align: start;
  transform: ${props => props.show ? 'translateX(0)':'translateX(100%)'};
  transition: transform 0.3s;

  li {
    padding: 15px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);
    
    a {
      font-weight: 600;
    }
  }
`;

const CloseWraper = styled.div`
  display: flex;
  justify-content: flex-end;
  cursor: pointer;
`;

const Nit = styled(LinkS)``;