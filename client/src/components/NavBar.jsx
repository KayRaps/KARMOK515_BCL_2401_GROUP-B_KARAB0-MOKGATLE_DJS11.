import React from "react";
import styled from "styled-components";
import { Menu, PersonRounded } from "@mui/icons-material";

const NavBarDiv = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: 16px 40px;
    align-items: center;
    color: ${({ theme }) => theme.text_primary};
    gap: 30px;
    background: ${({ theme }) => theme.bgLight};
    box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
    backdrop-filter: blur(5.7px);
    -webkit-backdrop-filter: blur(5.7px);
`;

const ButtonDiv = styled.div`
  font-size: 14px;
  cursor: pointer;
  text-decoration: none;
  max-width: 70px;
  align-items: center;
  color: ${({ theme }) => theme.text_primary};
`;

const NavBar = () => {
    return (
      <NavBarDiv>
        <Menu />
        <ButtonDiv>
          <PersonRounded /> 
          Login
        </ButtonDiv>
      </NavBarDiv>
    );
};

export default NavBar;