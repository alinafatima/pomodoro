import styled from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
  height: 100vh;
  background-color: ${(props) => props.theme.primary};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
`;

export const MainWrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
`;

export const LengthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

export const LengthControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 5vw;
`;

export const LengthControlButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2vh;
`;

export const UpdateTimerLengthButton = styled.button`
  border: none;
  margin: 0vh 2vw;
`;

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;

export const TimerButton = styled.button`
  margin: 1vh 2vw;
  border: none;
  font-size: 1rem;
`;

export const NavBarWrapper = styled.nav`
  background-color: ${(props) => props.theme.secondary};
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding-right: 3vw;
  margin: 0;
`;

export const NavListItem = styled.li`
  margin: 1vw;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  background-color: #f9f9f9;
  list-style: none;
  z-index: 1;
  margin-top: 1vh;
  padding: 0;
  border: 1px solid black;
`;

export const DropdownMenuListItem = styled.li`
  border: 0.5px solid black;
  padding: 0.5vw;
`;

export const ModalWrapper = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ModalContentWrapper = styled.div`
  background-color: #fff;
  padding: 2vw;
  border-radius: 5px;
  margin: 5vw;
  width: 70vw;
  position: relative;
`;

export const CloseIconWrapper = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
`;

export const CountdownWrapper = styled.div`
  border: 1px solid ${(props) => props.theme.tertiary};
  border-radius: 50%;
  height: 40vh;
  width: 25vw;
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: center;
  flex-direction: column;
  margin-bottom: 3vh;
`;

export const DigitsWrapper = styled.div`
  font-size: 4rem;
`;
