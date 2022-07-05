import React from 'react';
import styled from 'styled-components';


function Product({title, price, description, backgroundImg, bttn}) {
  return (
    <Products>
        <div>
            <Container BgImg={backgroundImg}></Container>
            <h3>{title}</h3>
            <p>${price}</p>
            <h2>{description}</h2>
            <button>More Infomation</button>
        </div>
        
    </Products>
  )
}

export default Product;



const Container = styled.div`
    cursor: pointer;
    color: #324d67;
    margin: 0 auto;
    border-radius: 15px;
    height: 350px;
    width: 350px;
    margin-top: 45px;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    background-image: ${props => `url("./images/${props.BgImg}")`};
    
    @media (max-width: 678px){
        height: 250px;
        width: 250px;
        align-items: center;
        margin-left: 0;
    }
`;

const Products = styled.div`
    
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 15px;
    margin-top: -45px;
    margin-rigth: 5%;
    width: 100%;
    flex-direction: column;
    flex-wrap: wrap;
    grid-template-columns: 1fr 1fr 1fr;
    position: relative;
    padding: 0 50px;
    transform: scale(1, 1);
    transition: transform 0.5s ease;

    :hover{
        transform: scale(1.1,1.1);
    }

    button {
        padding: 10px 20px;
        border: 1px solid #f02d34 ;
        margin-top: 40px;
        font-size: 18px;
        font-weight: 500;
        background-color: white;
        color: #f02d34;
        cursor: pointer;
        width: 200px;
        transform: scale(1, 1);
        transition: transform 0.5s ease;
    }
    h3{
        font-size: 18px;
        font-weight: 500;
        margin-top: 16px;
    }
    h2 {
        font-size: 16px;
        font-weight: 100;
        margin-top: 6px;
        color: black;
        margin-left: -5%%;
    }

    @media (max-width: 666px){
        padding: 0 20px;
        h3{
            margin-left: 0%;
            align-items: center;
        }
        p{
            margin-left: 0%;
            align-items: center;
        }
        h2{
            margin-left: 0%;
            align-items: center;
        }
    }
`;
