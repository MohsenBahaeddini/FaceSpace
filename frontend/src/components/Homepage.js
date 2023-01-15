import { useContext, useState, useEffect } from "react";
import styled from "styled-components";
import { CurrentUserContext } from "./CurrentUserContext";

import { Link } from "react-router-dom";
import { NavLink } from "react-router-dom";
import Header from "./Header";
const Homepage = () => {
  const { status, setStatus, currentUser } = useContext(CurrentUserContext);
  const [homeFeedStatus, setHomeFeedStatus] = useState("loading");
  const [homeFeed, setHomeFeed] = useState({});

  const [error, setError] = useState(false);
  useEffect(() => {
    setHomeFeedStatus("loading");
    fetch("/api/users")
      .then((res) => res.json())
      .then((response) => {
        setHomeFeed(response.data);
        setHomeFeedStatus("idle");
      })
      .catch((err) => {
        setError(true);
      });
  }, []);
  if (currentUser) {
    console.log(currentUser, " newwwwwwwwwwww");
  }
  return (
    <>
      <Header />
      <Wrapper>
        <Title>All Facespace Members</Title>

        {homeFeedStatus === "idle" && (
          <>
            {homeFeed.map((user, index) => {
              let isFriend = false;
              console.log(currentUser);
              if (status === "idle") {
                console.log(status, "statusssssssssssssssssss");
                if (
                  currentUser.friends.some((friendId) => friendId === user.id)
                ) {
                  isFriend = true;
                }
              }
              return (
                <>
                  <StyledLink to={`/profile/${user.id}`}>
                    <Img isFriend={isFriend} src={user.avatarUrl} />
                  </StyledLink>
                </>
              );
            })}
          </>
        )}
      </Wrapper>
    </>
  );
};
const style = {
  color: "red",
};
const Wrapper = styled.div`
  display: block;
  margin: 20px 50px;
`;
const Title = styled.h2`
  font-size: 40px;
`;

const Img = styled.img`
  width: 120px;
  height: 120px;
  margin: 0px 3px 0 3px;
  border: 2px solid
    ${(props) => (props.isFriend ? "var(--primary-color)" : "#aaa")};
  opacity: ${(props) => (props.isFriend ? "1" : "0.95")};
  &:hover {
    transform: scale(1.03);
  }
`;
const StyledLink = styled(Link)`
  color: black;
  font-weight: bold;
  text-decoration: none;
`;
export default Homepage;
