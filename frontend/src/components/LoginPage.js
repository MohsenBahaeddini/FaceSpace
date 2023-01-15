import styled from "styled-components";
import { useContext, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { CurrentUserContext } from "./CurrentUserContext";
import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";

const LoginPage = () => {
  const history = useHistory();
  const { status, setStatus, signIn, currentUser } =
    useContext(CurrentUserContext);

  if (currentUser) {
    history.push("/");
  }

  const submitHandle = (event) => {
    event.preventDefault();
    signIn(event.target[0].value);
  };
  return (
    <>
      <Wrapper>
        <NavBar>
          <StyledNavLink exact to="/">
            <H2>Facespace</H2>
          </StyledNavLink>
        </NavBar>
        <Div>
          <Form onSubmit={submitHandle}>
            <Input type="text" placeholder="Your first name" />
            <Button type="submit">Submit</Button>
          </Form>
        </Div>
      </Wrapper>
    </>
  );
};
const Wrapper = styled.div`
  background: url(/images/facespace_bg.jpg) center;
  background-size: cover;
  max-width: var(max-content-width);
  height: 100vh;
`;

const NavBar = styled.div`
  background-color: var(--primary-color);
  height: var(--header-height);
`;
const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`;
const Div = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 90vh;
`;
const Form = styled.form`
  display: flex;
  flex-direction: column;
  border-radius: 2px;
  background-color: rgba(234, 234, 225, 0.3);
  padding: 50px;
`;
const Input = styled.input`
  margin: 2px;
  padding: 15px;
  font-size: 16px;
  border: none;
  outline: none;
  border-radius: 3px;
  &:focus {
    border: 1px solid var(--primary-color);
  }
`;
const Button = styled.button`
  margin: 2px;
  border: none;
  padding: 6px;
  color: white;
  background-color: var(--primary-color);
  border-radius: 3px;
  font-size: 20px;
  font-family: var(--heading-font-family);
`;
const H2 = styled.h2`
  color: white;
  padding: 10px 20px;
  font-size: 36px;
`;
export default LoginPage;
