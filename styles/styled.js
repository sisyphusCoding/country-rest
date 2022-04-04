import styled from 'styled-components'

export const Box = styled.div`
display: flex;
align-items: ${props => props.a || 'center'};
justify-content: ${props => props.j || 'center'};
flex-flow: ${props =>props.flow || 'row'}
height: ${props => props.h || 'fit-content'};
width: ${props => props.w || 'fit-content'};
border-radius: ${props => props.br || '0'};
padding: ${props => props.p || '.5vh'};
background: ${props => props.bg || 'transparent'};
box-shadow: ${props => props.bs || 'none'};
gap: ${props => props.gap || '0'};
`


export const H1 = styled.h1`
font-size: 4vh;
font-weight: ${props => props.fw || 'bold'};
letter-spacing: ${props => props.ls || 'normal'};
`

export const H3 = styled.h3`
font-size: 2vh;
font-weight: ${props => props.fw || 'bold'};
letter-spacing: ${props => props.ls || 'normal'};
`

export const P = styled.p`
font-size: 2vmin;
font-weight: ${props => props.fw || 'normal'};
letter-spacing: ${props => props.ls || 'normal'};
`
export const Search = styled.div`
display: flex;
align-items: ${props => props.a || 'center'};
justify-content: ${props => props.j || 'center'};
flex-flow: ${props =>props.flow || 'row'}
height: ${props => props.h || 'fit-content'};
width: ${props => props.w || 'fit-content'};
border-radius: ${props => props.br || '0'};
padding: ${props => props.p || '.5vh'};
background: ${props => props.bg || 'transparent'};
gap: ${props => props.gap || '0'};
box-shadow: 0 0 1vh rgba(0,0,0,.5);
border: .4vh solid rgba(255,255,255,0);
&:focus , &:active , &:hover {
    box-shadow: 0 0 2vh rgba(0,0,0,.8);
    border: .4vh solid rgba(255,255,255,.3);
}

input{
outline:none;
background-color: transparent;
max-height: 7vh;
height: fit-content;
width: fit-content;
min-width: 10vh;
font-size: 1.7vh;
padding: 1vh 2vw;
border-radius: 1vh;
transition: all .3s ease;
}
`