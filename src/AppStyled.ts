import styled from "styled-components";


export const Header = styled.div`
    max-height: 44px;
    height: 48px;
    width: 100%;
    background-color: rgba(201, 192, 192, 0);
    z-index: 9999;
    top: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    flex-direction: row;
    justify-content: center;
    gap: 30px
`;

export const ItenHeader = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;

`;


export const TextHeader = styled.div`
    font-size: 13px;
    color:rgb(29, 29, 31);
    font-family: Verdana, Geneva, Tahoma, sans-serif;
    opacity: .8;
    cursor: pointer;
    letter-spacing: -.01;
`;

export const OptionsProductsApple = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    height: 200px;
    background-color: green;
    gap: 3em;
`;

export const ItemOptions = styled.div`
    display: flex;
    flex-direction: column;
    gap: 15px;
    

`;