import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import styled, { css } from 'styled-components';

export const AppWrapper = styled.div`
  text-align: center;
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundImage ? 'transparent' : props.theme.primary};
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : 'none'};
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  margin: 0;
  padding: 0;
  ${(props) =>
    props.backgroundImage
      ? css`
          background-size: cover;
          background-position: center;
          background-repeat: no-repeat;
        `
      : css`
          background-image: none;
        `};
`;

export const MainWrapper = styled.div``;

export const LengthWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: relative;
  z-index: 2;
`;

export const LengthControlWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 6vh 5vw;
  font-size: 1.5rem;
  color: ${(props) => props.theme.quinary};
`;

export const LengthControlButtonWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 2vh;
`;

export const UpdateTimerLengthLabel = styled.div`
  margin-top: 1vh;
`;

export const UpdateTimerLengthButton = styled.button`
  border: none;
  border-radius: 5px;
  background-color: ${(props) => props.theme.quaternary};
  margin: 0vh 2vw;
  padding: 1vh 1vw;
`;

export const HoverableFontAwesomeIcon = styled(FontAwesomeIcon)`
  transition: color 0.3s;

  &:hover {
    color: ${(props) => props.theme.secondary};
  }
`;

export const TimerWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 2;
`;

export const TimerButton = styled.button`
  background-color: transparent;
  color: ${(props) => props.theme.primary};
  margin: 1vh 2vw;
  border: 1px solid ${(props) => props.theme.primary};
  border-radius: 20px;
  font-size: 1.2rem;
  width: 10vw;
  padding: 1vh;
  &:hover {
    background-color: white;
    color: black;
    mix-blend-mode: screen;
  }
`;

export const NavBarWrapper = styled.nav`
  position: relative;
  z-index: 3;
  background-color: 'transparent';
  color: ${(props) => props.theme.quinary};
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
  z-index: 5;
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
  z-index: 99;
`;

export const ModalContentWrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.senary};
  padding: 2vw;
  border-radius: 5px;
  margin: 5vw;
  width: 70vw;
  position: relative;
  z-index: 5;
`;

export const CloseIconWrapper = styled.span`
  position: absolute;
  top: 10px;
  right: 10px;
  cursor: pointer;
  color: ${(props) => props.theme.senary};
`;

export const CountdownWrapper = styled.div`
  background-color: transparent;
  border-radius: 50%;
  height: 43vh;
  width: 24vw;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const TimerLabelWrapper = styled.div`
  color: ${(props) => props.theme.quinary};
  font-size: 3rem;
`;

export const DigitsWrapper = styled.div`
  color: ${(props) => props.theme.quinary};
  font-size: 6rem;
`;

export const ProgressCircle = styled.div`
  --p: ${(props) => props.p || 0};
  --b: 20px;
  --c: ${(props) => props.theme.tertiary};
  --w: 27vw;

  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 2;

  width: var(--w);
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin-bottom: 5vh;
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

export const OverlayWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  z-index: 1;
`;
