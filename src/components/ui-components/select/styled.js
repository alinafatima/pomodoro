import styled from 'styled-components';

export const SelectWrapper = styled.div``;

export const StyledSelect = styled.select`
  background-color: #f1f1f1;
  border: 1px solid #ccc;
  border-radius: 5px;
  padding: 0.5vh 1vw;
`;


export const DrawerOuterWrapper = styled.div`
  position: fixed;
  top: 7vh;
  right: ${props => props.open ? '0' : '-300px'};
  width: 40vh;
  height: 100%;
  z-index: 1000;
  background-color: #fff;
  transition: right 0.3s;
`

export const DrawerContentWrapper = styled.div`
`