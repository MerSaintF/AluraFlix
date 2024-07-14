import styled from "styled-components";
import { Link } from "react-router-dom";

const HeaderContainer = styled.header`
  //border-bottom: 4px solid #2271d1;
  //box-shadow: 0px 9px 10px 0px #2271d1b2;

  background-color: #000000e5;
  display: flex;
  justify-content: space-around;

  img {
    max-height: 60px;
    padding: 30px 0;
  }
`;

const Navbar = styled.nav`
  width: 30%;
  gap: 20px;
  justify-content: flex-end;
  display: flex;
  align-items: center;
`;

const NavItem = styled(Link)`
  font-weight: bold;
  color: white;
  text-align: center;
  text-decoration-line: none;
  background-color: #00000000;
  border: 1px solid white;
  border-radius: 8px;
  padding: 13px 60px;
  box-shadow: 0px 0px 8px 4px #ffffff7c inset;

  &:active {
    color: #2271d1;
    background-color: black;
    border: 1px solid var(--Blue, #2271d1);
    box-shadow: 0px 0px 4px 4px #2271d17c inset;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <img src="src\assets\images\logo.svg" alt="Logo" />
      <Navbar>
        <NavItem to={"/"}>HOME</NavItem>
        <NavItem to={"/agregar-video"}>NUEVO</NavItem>
      </Navbar>
    </HeaderContainer>
  );
};

export default Header;
