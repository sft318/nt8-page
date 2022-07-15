import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

function Platform() {
  return (
    <Container id="platform">
        <h1>Best Platform in the Market</h1>
        <h3>NinjaTrader</h3>
        <Data to="//ninjatrader.com/es/LP/VendorDemo/">
            <button>Try Now</button>
            <img src='./images/NinjaTrader-Download-300x250.png' />
        </Data>
        <Desc>
            <h5>Description</h5>
            <p>
                NinjaTrader® is our #1 recommended trading software 
                preferred by traders worldwide including our clients.
            </p>
        </Desc>

    </Container>
  )
}

export default Platform;

const Container = styled.div`
    border: 10px solid white;
    padding: 100px 40px;
    background-color: #f4f4f4;
    border-radius: 25px;
    position: relative;
    height: 500px;
    line-height: 0.9;
    width: 100%;
    margin-top: 3%;

    img {
        position: absolute;
        top: 15%;
        right:10%;
        width: 340px;
        height: 320px;
    }
    button{
        border-radius: 15px;
        padding: 10px 16px;
        background-color: #f02d34;
        color: white;
        border: none;
        margin-top: 20px;
        margin-left: 8%;
        margin-bottom: 5%;
        font-size: 18px;
        font-weight: 500;
        cursor: pointer;
        z-index:10000 !important;
    }
    h1{
        color: #a42023;
        font-size: 3rem;
        margin-left: 8%;
        margin-top -5%;
    }
    h3{
        font-size: 5rem;
        color: #23394d;
        margin-left: 8%;
    }

    @media (max-width: 666px){

        img {
            width: 180px;
            height: 150px;
            top: 33%;
            right: 3px;
        }

        button{
            border-radius: 15px;
            background-color: #f02d34;
            color: white;
            border: none;
            margin-top: 30px;
            margin-left: -6%;
            font-size: 18px;
            font-weight: 500;
            cursor: pointer;
            z-index:10000 !important;
        }
        h3{
            font-size: 16px;
            margin-top: 40px;
            margin-left: -6%;
            text-transform: uppercase;
        }
        h1{
            font-size: 35px;
            color: #a42023;
            margin-top: -45px;
            margin-left: -6%;
        }
    }

`;

const Desc = styled.div`
    position: absolute;
    margin-left: 8%;
    width: 300px;
    line-height: 1.3;
    display: flex;
    flex-direction: column;
    color: #324d67;
    margin-top: -2%;

    p{
        color: #324d67;
        font-weight: 200;
        text-align: start;
        margin-left: -2%;
    }
    h5{
        margin-bottom: 12px;
        font-weight: 700;
        font-size: 16px;
        align-self: flex-start;
        margin-left: -2%;
        
    }

    @media (max-width: 666px){
        margin-left: -4%;
        margin-top: 50px;
    }
`;

const Data = styled(Link)``;