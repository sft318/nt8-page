import React from 'react';
import styled from 'styled-components';


function Disclaimer() {
  return (
    <Container id="disclaimer">
        <p>
            <b>Risk Disclosure:</b><br></br>

            Futures and forex trading carries substantial risks and is not for all investors. 
            An investor could potentially lose all or more of the initial investment. 
            Risk capital is money that can be lost without jeopardizing a person's financial 
            security or lifestyle. Only risk capital should be used for trading, and only 
            those with sufficient risk capital should consider trading. Past performance 
            is not necessarily indicative of future results.<br></br> <br></br>

            <b>Hypothetical Performance Statement:</b><br></br>

            Hypothetical performance results should have many inherent limitations, some of which 
            are described below. No representation should be made that any of the accounts will or 
            are likely to have results similar to those shown; in fact, there are frequent differences 
            between hypothetical results and the actual results obtained by any trading program. One of 
            the limitations of hypothetical performance results is the fact that they are prepared 
            with hindsight profits. In addition, hypothetical trading does not involve financial risk, 
            and no record of hypothetical trading can take into account the financial risk of actual 
            trading. For example, the ability to withstand losses or to adhere to a particular trading 
            program regardless of losses are material points which can substantially affect actual 
            trading results. There are many factors related to the markets in general, or to the 
            implementation of any specific trading program, which cannot all be considered in the 
            preparation of hypothetical results, all of which can adversely affect trading results.

        </p>
    </Container>

  )
}

export default Disclaimer;

const Container = styled.div`
    border: 10px solid white;
    display: flex;
    padding: 50px 50px;
    background-color: #f02d34;
    border-radius: 25px;
    position: relative;
    height: 400px;
    line-height: 1;
    color: white;
    width: 100%;
    margin-top: 5%;
    text-align: start;
    align-items: center;
    color: white;
    
    p{
        font-size:16px;
        display: flex;
        flex-direction: column;
        margin-top: -20px;
        color: white;
    }
    b{
        text-align: center;
        color: white;
    }

    @media (max-width: 666px){
        
        p{
            font-size: 9px;
            display: flex;
            flex-direction: column;
            margin-top: -20px;
            color: white;
        }
        b{
            color: white;
        }
    }
`;