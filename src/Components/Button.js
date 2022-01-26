import styled from 'styled-components'
export const ButtonContainer = styled.button`
background-color:transparent;
color: ${props=>props.cart?'var(--mainYellow)':'var(--lightBlue)'};
padding: 0.35rem 0.55rem;
border: 0.05rem solid ;
border-color:  ${props=>props.cart?'var(--mainYellow)':'var(--lightBlue)'};
border-radius: 0.6rem;
font-size: 1.2rem;
font-weight: 600;
text-transform: capitalize;
transition: all 0.5s ease-in-out;
cursor: ${props=>props.disabled===true?'defaule':'pointer'};
&:hover{
    background-color: ${props=>props.cart?'var(--mainYellow)':'var(--lightBlue)'};
    color:var(--mainBlue)
}
&:focus{
    outline: none;
}
`