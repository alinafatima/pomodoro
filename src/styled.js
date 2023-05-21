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
  align-items: center;
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
  border: 1px solid ${(props) => props.theme.quaternary};
  background-color: ${(props) => props.theme.quaternary};
  border-radius: 50%;
  height: 43vh;
  width: 24vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  z-index: 2;
`;

export const DigitsWrapper = styled.div`
  font-size: 4rem;
`;

export const ProgressCircle = styled.div`
  --p: ${(props) => props.p || 0};
  --b: 20px;
  --c: ${(props) => props.theme.tertiary};
  --w: 27vw;

  display: flex;
  justify-content: center;
  align-items: center;

  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin-bottom: 3vh;
  place-content: center;

  &::before,
  &::after {
    content: '';
    position: absolute;
    border-radius: 50%;
  }

  &::before {
    inset: 0;
    background: radial-gradient(farthest-side, var(--c) 98%, #0000) top/var(--b)
        var(--b) no-repeat,
      conic-gradient(var(--c) calc(var(--p) * 1%), #0000 0);
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - var(--b)),
      #000 calc(100% - var(--b))
    );
  }

  &::after {
    inset: calc(50% - var(--b) / 2);
    background: var(--c);
    transform: rotate(calc(var(--p) * 3.6deg))
      translateY(calc(50% - var(--w) / 2));
  }
`;
