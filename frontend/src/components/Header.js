import styled from "styled-components";
import { useContext } from "react";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";

const Header = () => {
  const { status, setStatus, currentUser } = useContext(CurrentUserContext);
  console.log(currentUser);
  return (
    <>
      <Div>
        <StyledNavLink exact to="/">
          <H2>Facespace</H2>
        </StyledNavLink>
        {!currentUser && (
          <>
            <StyledNavLink exact to="/signin">
              <H3>Sign in</H3>
            </StyledNavLink>
          </>
        )}
        {currentUser && (
          <>
            <Greeting>Howdy, {currentUser.name}</Greeting>
          </>
        )}
      </Div>
    </>
  );
};
const Div = styled.div`
  height: 45px;
  background-color: var(--primary-color);
  display: flex;
  justify-content: space-between;
`;
const Greeting = styled.h3`
  color: white;
  padding: 11px 50px;
  font-size: 24px;
`;
const H2 = styled.h2`
  color: white;
  padding: 7px 20px;
  font-size: 36px;
`;
const H3 = styled.h3`
  color: white;
  margin-top: 2px;
  padding: 10px 50px;
  font-size: 24px;
`;

const StyledLink = styled(Link)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`;
const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`;
export default Header;
