import styled from 'styled-components'

export const Container = styled.div`
  
    background: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    display: flex;
    align-items: center;
    padding: 1rem 30px

`;
