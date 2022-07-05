import React from 'react'
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { Link as LinkS } from 'react-scroll';

function HeroBanner() {
  return (
    <>
        <Container>

            <Heading>
                <a>Ninjatrader Developer</a>
                <h3>Summer Sales</h3>
                <h1>Great</h1>
                <Data to="//ninjatrader.com/es/LP/VendorDemo/">
                    <img src='./images/Ninjatraderc.png' alt=""/>
                    <Datas to="principal"><button>Buy Now</button></Datas>
                </Data>
                <Desc>
                    <h5></h5>
                    <p></p>
                </Desc>

            </Heading>
        </Container>
    
    
    </>
  )
}

export default HeroBanner;

const Container = styled.div`
    
    border: 10px solid white;
    padding: 100px 40px;
    background-color: #dcdcdc;
    border-radius: 25px;
    position: relative;
    height: 500px;
    line-height: 0.9;
    width: 100%;
   
`;

const Heading = styled.div`

    a{
        font-size: 2rem;
    }
    h3 {
        font-size: 4rem;
        margint-top: 4px;
    }
    h1{
        color: white;
        font-size: 10em;
        margin-left: -20px;
        text-transform: uppercase;
    }

    button {
        border-radius: 15px;
        padding: 10px 16px;
        background-color: #f02d34;
        color: white;
        border: none;
        margin-top: 40px;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        z-index:10000 !important;
    }
    img{
        position: absolute;
        top: 40%;
        right:10%;
        width: 500px;
        height: 80px;
    }

    @media (max-width:786px){
        height: 560px;
        line-height: 1.3;
        top: 5%;
        img {
            width: 300px;
            height: 48px;
            top: 52%;
            right: 3px%;
        }
        a{
            font-size: 25px;
        }
        h1{
            font-size: 55px;
            margin-left: -10px;
        }
        h3{
            font-size: 35px;
        }
        button{
            margin-top: 70px;
            z-index: 10000;
        }
    }

`;

const Desc = styled.div`
    position: absolute;
    right: 10%;
    bottom: 5%;
    width: 300px;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    color: #324d67;

    p{
        color: #5f5f5f;
        font-weight: 100;
        text-align: end;
    }
    h5{
        margin-bottom: 12px;
        font-weight: 700;
        font-size: 16px;
        /* color: black; */
        align-self: flex-end;
    }
`;

const Data = styled(Link)``;
const Datas = styled(LinkS)``;