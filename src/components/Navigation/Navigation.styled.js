import styled from "styled-components";
import { NavLink } from "react-router-dom";

export const Nav = styled.nav`
  display: flex;
  justify-content: flex-end;
  width: 100%;
  border-radius: 5px;
  background-color: #212229;
  @media screen and (max-width: 480px) {
    width: 80%;
    justify-content: center;
  }
`;

export const Link = styled(NavLink)`
  display: inline-block;
  margin-left: 15px;
  text-decoration: none;
  padding: 12px;
  font-weight: 500;
  font-size: 18px;
  color: #fff;

  &.active {
    color: #ff6b01;
  }
`;
