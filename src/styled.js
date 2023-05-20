import styled from 'styled-components';

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
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  margin-right: 3vw;
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
  padding: 20px;
  border-radius: 5px;
`;
