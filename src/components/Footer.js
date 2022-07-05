import React from 'react';
import styled from 'styled-components';
import { AiFillInstagram, AiOutlineTwitter } from 'react-icons/ai';

function Footer() {
  return (
    <Container>
        <p>2022 Squant All Rights Reserved</p>
        <Icons>
            <AiFillInstagram />
				    <AiOutlineTwitter />
        </Icons>

    </Container>
  )
}

export default Footer;

const Container = styled.div`
  color: #324d67;
  text-align: center;
  margin-top: 1px;
  padding: 10px 30px;
  font-weight: 700;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
  justify-content: center;
  background-color: #f4f4f4;


  @media (max-width: 666px){
    margin-right: 5%;
  }

  }
`;

const Icons = styled.div`
  font-size: 30px;
  display: flex;
  gap: 10px;

`;