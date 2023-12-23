import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import styled, { css } from "styled-components";

export const AppWrapper = styled.div`
  text-align: center;
  height: 100vh;
  background-color: ${(props) =>
    props.backgroundImage ? "transparent" : props.theme.primary};
  background-image: ${(props) =>
    props.backgroundImage ? `url(${props.backgroundImage})` : "none"};
  display: flex;
  width: 100vw;
  flex-direction: column;
  flex: 1;
  @media (max-width: 576px) {
    height: auto;
    padding-bottom: 50%;
  }
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

export const MainContainer = styled.div`
  display: flex;
  flex-direction: row;
  @media (max-width: 576px) {
    flex-direction: column;
    width: 100%;
  }
`;

export const MainWrapper = styled.div`
  display: flex;
  flex: 4;
  flex-direction: column;
  margin-left: 14vw;
  @media (max-width: 576px) {
    margin-left: 0;
    width: 100%;
  }
`;

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
  @media (max-width: 576px) {
    font-size: 1rem;
  }
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
  width: 25px;
  height: 25px;

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

export const TimerButtonContainer = styled.div`
  @media (max-width: 576px) {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    width: 100%;
  }
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

  @media (max-width: 576px) {
    width: 25%;
    height: 140%;
    border-radius: 100%;
  }
`;

export const NavBarWrapper = styled.nav`
  position: relative;
  z-index: 3;
  background-color: "transparent";
  color: ${(props) => props.theme.quinary};

  @media (max-width: 576px) {
    display: flex;
    flex-direction: column-reverse;
  }
`;

export const SpotifyWrapper = styled.div`
  display: flex;
  justify-content: flex-start;
  margin-top: 5px;
  margin-left: 20px;
  z-index: 3;
  position: absolute;
  @media (max-width: 576px) {
    margin: 0% 5%;
    position: relative;
  }
`;

export const NavList = styled.ul`
  display: flex;
  justify-content: flex-end;
  list-style: none;
  padding-right: 3vw;
  margin: 0;
  @media (max-width: 576px) {
    display: flex;
    justify-content: center;
  }
`;

export const NavListItem = styled.li`
  margin: 1vw;
`;

export const DropdownMenu = styled.ul`
  position: absolute;
  background-color: white;
  list-style: none;
  z-index: 5;
  margin-top: 1vh;
  padding: 0;
  border: 1px solid black;
`;

export const DropdownMenuListItem = styled.li`
  border: 0.5px solid black;
  color: black;
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
  z-index: 9999;
`;

export const ModalContentWrapper = styled.div`
  background-color: ${(props) => props.theme.primary};
  color: ${(props) => props.theme.senary};
  padding: 2vw;
  border-radius: 5px;
  width: ${(props) => (props.width ? props.width : "fit-content")};
  margin: 5vw;
  position: relative;
  z-index: 9999;
  @media (max-width: 576px) {
    height: 50%;
    width: 70%;
    overflow-y: auto;
  }
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

  @media (max-width: 576px) {
    --w: 95vw;
  }

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
    content: "";
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

export const SectionWrapper = styled.section`
  text-align: center;
  margin: 3vh 1vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const TaskListWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  z-index: 999;
  background-color: rgba(0, 0, 0, 0.9);
  padding: 0.5vh 1vw 0.5vh 2vw;
  @media (max-width: 576px) {
    margin-top: 20%;
    height: auto;
    padding: 5%;
  }
`;
export const AddNewTaskItem = styled.input`
  background: none;
  border: none;
  outline: none;
  color: #fff; /* White color text */
  font-size: 16px;
  width: 90%;
  &::placeholder {
    color: #bbb; /* Lighter color for placeholder */
  }
`;

export const TaskInputContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #333; /* Dark background */
  padding: 10px;
  width: 92%;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  @media (max-width: 576px) {
    width: 90%;
    margin: 5% 2%;
    padding: 3% 3%;
  }
`;

export const StyledTaskList = styled.ul`
  display: flex;
  flex-direction: column;
  text-align: left;
  margin: 0;
  padding-inline-start: 0;
`;

export const DeleteIcon = styled(FontAwesomeIcon)`
  transition: color 0.3s;
  width: 3vw;
  height: 2vh;
  padding: 0;
`;

export const TaskListItem = styled.li`
  display: flex;
  background-color: #333;
  color: white;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin: 2vh 0vh;
  padding: 1vh 0vw;
  height: fit-content;

  &:hover {
    background-color: white;
    color: #333;

    ${DeleteIcon} {
      color: #333;
    }
  }
  @media (max-width: 576px) {
    margin: 5% 2%;
    padding: 3% 3%;
  }
`;
export const TaskListTextAndCheckBoxWrapper = styled.div`
  display: flex;
  padding: 0;
  justify-content: flex-start;
`;

export const TaskListCheckBoxWrapper = styled.div`
  display: flex;
  padding: 0;
  align-items: center;
`;

export const TaskListTextWrapper = styled.div`
  width: 100%;
  height: fit-content;
  overflow-wrap: break-word;
  text-decoration: ${(props) => (props.taskChecked ? "line-through;" : "none")};
`;

export const DeleteIconWrapper = styled.div`
  display: flex;
  padding: 0;
  justify-content: flex-end;
  @media (max-width: 576px) {
    padding-right: 5%;
  }
`;

export const TaskListCheckBox = styled.input`
  width: 3vw;
  height: 2vh;
`;
