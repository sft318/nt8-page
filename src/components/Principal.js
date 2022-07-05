import React from 'react';
import styled from 'styled-components';
import Product from './Product';
import { Link } from 'react-router-dom';

function Principal() {
  return (
    <>
      <Container id="principal">

        <Heading>
            <h2>Best Seller Products</h2>
            <p>Indicators There are Many Variations</p>
        </Heading>

        <ProductContainer>

        <Ruta to="//t.me/SoHFTT">
            <Product
              title="Victoria Pattern Alert"
              price="99.99"
              description="The VICTORIA pattern detects the possible start of a trend movement, once the pattern is confirmed it activates an alert that draws an arrow 
              at the top or bottom (depending on the trend detected), the indicator is an original work, which tries to simulate the commercial operation of the renowned futures operator @verniman on twitter"
              backgroundImg="victoria.png"
            />
          </Ruta>

          <Ruta to="//t.me/SoHFTT">
            <Product
              title="Posty Pivots"
              price="14.99"
              description="The Indicator plots anticipated support/resistance areas based on prior day price 
              action and includes breakout/breakdown targets.
              This work is an original interpretation of Camarilla 
              Pivots as well as the techniques taught by Pivot Boss.
              As with everything context along with price action is crucial when trading potential reversal zones.
              This indicator is used for intraday trading."
              backgroundImg="b845936f-da9c-459a-87f0-11f5af470f2f.jpeg"
            />
          </Ruta>
          <Ruta to="//t.me/SoHFTT">
            <Product
              title="Squant FLI"
              price="19.99"
              description="The Squant FollowLine indicator is a trend following indicator.
              The gray/orange lines are activated when the price closes above the upper Bollinger band or below the lower one.            
              Once the trend direction is activated, the FollowLine will change color (depending on the trend) or stabilize if it detects a swinging market.            
              An ATR filter can be selected to place the line at a level further than the normal mode set on high/low candles."
              backgroundImg="Fli.png"
            />
          </Ruta>
          <Ruta to="//t.me/SoHFTT">
            <Product
              title="Squant Difference"
              price="49.99"
              description="The indicator Squant Difference calculates the price difference between the 
              current closing price 
              and the exponential average price (EMA) of N periods"
              backgroundImg="mryeen.png"
            />
          </Ruta>

          


    

        </ProductContainer>

        

      </Container>
    </>
  )
}

export default Principal;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  padding: 100px 40px;
  background-color: white;
  border-radius: 15px;
  position: relative;
  margin-left: 5%;
  line-height: 0.9; 
  width: 100%;
  color: #324d67;
`;

const Heading = styled.div`
  text-align: center;
  margin-top: -45px;
  align-items: center;
  color: #324d67;

  h2{
    font-size: 40px;
    font-weight: 800;
    }

  p{
    margin-top: 3%;
    font-size: 18px;
    font-weight: 300;
  }
  @media (max-width: 667px){
    margin-left: -15%;
    h2{
        padding: 0 20px;
        margin-top: -5%;
        font-size: 25px;

    
    }
  }
`;

const ProductContainer = styled.div`
  display: grid;
  overflow: auto;
  grid-template-columns: 1fr 1fr 1fr;
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
  }

  @media (max-width: 666){
    grid-template-columns: 1fr;
  }

`;
const Ruta = styled(Link)`
`;