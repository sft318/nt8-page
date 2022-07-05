import React from 'react';
import styled from 'styled-components';
import Footer from '../Footer';
import Header from '../Header';
import Product from '../Product';

function Posty() {
  return (
    <>
        <Container>
           
            
            <div>    
                <ImageContainer>
                    <img src="./images/model-x.jpg"/>
                </ImageContainer>
                
                <Description>
                    <h1>Posty Pivots</h1>
                    <h4>Details</h4>
                    <p></p>
                    <h2>Price</h2>
                    <button>Contact Me</button>
                </Description>
            </div>

            <Mailike>
                <h2>You may also like</h2>
                
                <MarqueeContainer>

                    <Product 
                        title="Posty Pivots"
                        description="$14.99"
                        backgroundImg="solar-roof.jpg"
                    />

                    <Product 
                        title="ema Pivots"
                        description="$14.99"
                        backgroundImg="solar-roof.jpg"
                    />

                </MarqueeContainer>
                
            </Mailike>
        
        </Container>
        <Footer />
    </>
  )
}

export default Posty;

const Container = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    padding: 0;
    margin: 0;
    width: 100%;
    margin-top: 45%;
    color: #324d67;
    background-color: red;
`;

const ImageContainer = styled.div`
   
    img {
        background-radius: 15px;
        background-color: #ebebeb;
        width: 400px;
        heigth: 400px;
        cursor: pointer;
        border-radius: 15px;
        transition: .3s ease-in-out;
        transform: scale(1, 1);

        :hover{
            transform:scale(1.1,1.1)
        }
    }
`;

const Description = styled.div`
    h1{
        margin-top: 5%;
    }
    h4 {
        margin-top: 10px;
    }
    p {
        margin-top: 10px;
    }
    h2 {
        font-weight: 700;
        font-size: 26px;
        margin-top: 30px;
        color: #f02d34;
    }
    button {
        display: flex;
        border-radius: 10px;
        justify-content: center;
        gap: 30px;
        width: 200px;
        padding: 10px 20px;
        background-color: #f02d34;
        color: white;
        border: none;
        margin-top: 40px;
        font-size: 20px;
        font-weight: 500;
        cursor: pointer;
        transform: scale(1, 1);
        transition: transform 0.5s ease;
   
        :hover{
            transform:scale(1.1,1.1)
        }
    }

`;

const Mailike = styled.div`
    
h2 {
    text-align: center;  
    color: #324d67;
    font-size: 28px;   
    margin-top: 5%;
    @media (max-width: 1000px){
        
    }    
    
    @media (max-width: 800px){
      
        
    }
    
    @media (max-width: 666px){
        
    }
}
`;


const MarqueeContainer = styled.div`
    
    display: grid;
    overflow: auto;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    justify-content: flex;
    gap: 16px;
    margin-top: 20px;
    margin-bottom: -65px;
    margin-left: -5%;
    width: 100%;

    @media (max-width: 1000px){
        grid-template-columns: 1fr 1fr;
    }
    
    
    @media (max-width: 800px){
      grid-template-columns: 1fr;
      margin-left: -15%;
    }
    
    
`;