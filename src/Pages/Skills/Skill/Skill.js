import React from 'react';
import styled from 'styled-components';

const Skill = ({ text, bg, parcent }) => {

    const Warpper = styled.h1`
    display: flex;
    justify-content: center;
    flex-direction: column;
    height: 200px;
    width: 200px;
    postion:reletive
    
    `

    const MainDiv = styled.div`
    background: conic-gradient(#${bg} ${parcent}%, #00092c 0);
    height: 175px;
    width: 175px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left:13px;
    `;

    const Content = styled.h2`
    background: #00092c;
    height: 150px;
    width: 150px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    font-size:20px;
    padding:10px;
    color: #${bg};
        &:hover {
            height: 160px;
            width: 160px;
            transition: all 0.35s ease-in-out
        }
    `;

    const Number = styled.h3`
     font-size:50px;
    `;

    const ContentText = styled.p`
    font-size: 30px;
    padding: 10px 5px;
    color: #${bg}
    `

    return (

        <div style={{
            'display': 'flex',
            'justifyContent': 'center',
            'flexDirection': 'column',
            'height': '200px',
            'width': '200px',
            'postion':'reletive',
            'marginTop':'100px',
        }}>
            <Warpper>
                <MainDiv>
                    <Content>
                        <Number>{parcent}%</Number>
                    </Content>
                </MainDiv>
            </Warpper>
            <ContentText>{text}</ContentText>
        </div>

    );
};

export default Skill;