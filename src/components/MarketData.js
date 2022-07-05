import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function MarketData() {
  return (
    <Container id="dataFeed">
        
        <h3>NinjaTrader recommends using the </h3>
        <h1>Kinetick Data Feed</h1>
        <Data to="//kinetick.com/NinjaTrader">
            <button>Suscribe</button>
            <img src='./images/Kinetick-FreeEOD-300x250.png' />
        </Data>
        <Desc>
            <h5>Description</h5>
            <p>
                Kinetick® delivers reliable, fast and 
                cost-effective market data to help level the playing
                and forex that exceed the expectations of the world’s 
                most demanding traders, like us!
            </p>
        </Desc>
    </Container>
  )
}

export default MarketData;

const Container = styled.div`
    border: 10px solid white;
    padding: 100px 40px;
    background-color: #f4f4f4;
    border-radius: 25px;
    position: relative;
    height: 500px;
    line-height: 0.9; 
    width: 100%;
    margin-top: 5%;
    
    img {
        position: absolute;
        width: 340px;
        height: 300px;
        top: 15%;
        left: 10%;
    }

    button{
        border-radius: 15px;
        padding: 10px 16px;
        background-color: #f27135;
        color: white;
        border: none;
        margin-top: 40px;
        margin-left: 60%;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        z-index:10000 !important;
    }
    h3{
        font-size: 3rem;
        margin-top: -5%;
        margin-left: 45%;
        color: #23394d;
    }
    h1{
        color: #f27135;
        font-size: 3rem;
        margin-left: 60%;
        text-transform: uppercase;
        margin-top: 3%;
    
    }

    @media (max-width:666px){

        img{
            width: 180px;
            height: 150px;
            top: 30%;
            left: 3%;
        }

        button{
            border-radius: 15px;
            background-color: #f27135;
            color: white;
            border: none;
            margin-top: 10%;
            margin-left: 60%;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            z-index:10000 !important;
        }
        h3{
            font-size: 18px;
            width: 350px;
            top: 40%;
            margin-left: -5%;
            color: #23394d;
        }
        h1{
            color: #f27135;
            font-size: 25px;
            margin-left: 60%;
            text-transform: uppercase;
            margin-top: 20px;
        }
    }

`;

const Desc = styled.div`
    position: absolute;
    width: 300px;
    margin-left: 70%;
    right: 4%;
    top: 55%;
    font-weight: 200;
    font-size: 16px;
    
    p{

    }
    h5{
       
    }

    @media (max-width: 666px){
        line-height: 1.3;
        width: 270px;
        font-size: 13px;
        right: 10%;
        margin-top: 15%;
        
        p{
            
        }
        h5{
            
        }
    }
`;

const Data = styled(Link)``;