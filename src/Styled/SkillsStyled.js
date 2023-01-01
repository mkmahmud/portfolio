import styled from 'styled-components';

export const Warpper = styled.h1`
display: flex;
justify-content: center;
flex-direction: column;
height: 200px;
width: 200px;
postion:reletive

`

export const MainDiv = styled.div`
background: conic-gradient(#777 90%, #00092c 0);
height: 175px;
width: 175px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
margin-left:13px;
`;

export const Content = styled.h2`
background: #000000;
height: 150px;
width: 150px;
border-radius: 50%;
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
font-size:20px;
padding:10px;
color: #777;
    &:hover {
        height: 160px;
        width: 160px;
        transition: all 0.35s ease-in-out
    }
`;

export const Number = styled.h3`
 font-size:50px;
`;

export const ContentText = styled.p`
font-size: 30px;
padding: 10px 5px;
color: #777
`