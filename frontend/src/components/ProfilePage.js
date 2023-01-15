import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import { NavLink } from "react-router-dom";
const ProfilePage = () => {
  const [profile, setProfile] = useState({});
  const [profileStatus, setProfileStatus] = useState("loading");
  const [userData, setUserData] = useState([]);
  const [userStatus, setUserStatus] = useState("loading");
  const [error, setError] = useState(false);
  const { profileId } = useParams();

  useEffect(() => {
    setProfileStatus("loading");
    fetch(`/api/users/${profileId}`)
      .then((res) => res.json())
      .then((response) => {
        setProfile(response.data);
        setProfileStatus("idle");
      })
      .catch((err) => {
        setError(true);
        throw new Error("SOMETHING WENT WRONG, PLEASE TRY AGAIN", err);
      });

    setUserStatus("loading");
    fetch("/api/users/")
      .then((res) => res.json())
      .then((data) => {
        setUserData(data.data);
        setUserStatus("idle");
      });
  }, [profileId]);

  return (
    <>
      {profileStatus === "idle" && (
        <>
          <NavBar>
            <StyledNavLink exact to="/">
              <H2>Facespace</H2>
            </StyledNavLink>
          </NavBar>
          <Cover></Cover>
          <Profile>
            <Img src={profile.avatarUrl} />
            <Username>{profile.name}</Username>
          </Profile>
          <Friends>
            <ProfileFriends>
              <H3>{profile.name}'s Friends</H3>
            </ProfileFriends>
            {userStatus &&
              userData.map((user) => {
                if (profile.friends.some((friendId) => friendId === user.id)) {
                  return (
                    <FriendsAvatar>
                      <FriendsImg src={user.avatarUrl} />
                      <P>{user.name}</P>
                    </FriendsAvatar>
                  );
                }
              })}
          </Friends>
        </>
      )}
    </>
  );
};
const Cover = styled.div`
  display: block;
  background: url(/images/facespace_bg.jpg) center;
  background-size: cover;
  background-repeat: no-repeat;
  height: 300px;
  width: 100vw;
`;

const Profile = styled.div`
  display: flex;
  margin: -110px 20px 20px 300px;
`;
const Img = styled.img`
  margin: 10px;
  width: 200px;
  height: 200px;
  border: 5px solid var(--primary-color);
`;
const Username = styled.h2`
  margin-top: 120px;
`;
const NavBar = styled.div`
  background-color: var(--primary-color);
  height: 45px;
`;

const StyledNavLink = styled(NavLink)`
  color: white;
  font-weight: bold;
  text-decoration: none;
`;

const H2 = styled.h2`
  color: white;
  padding: 7px 20px;
  font-size: 36px;
`;
const H3 = styled.h3`
  font-size: 22px;
`;
const Friends = styled.div`
  margin: 40px 280px;
  display: flex;
  flex-direction: row;
  padding-bottom: -100px;
`;
const ProfileFriends = styled.div`
  /* border-top: 1px solid blue; */
  margin: 0px -140px 0px 30px;
`;
const FriendsImg = styled.img`
  width: 120px;
  height: 120px;
  border: 1px solid var(--primary-color);
`;
const FriendsAvatar = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 30px 3px;
`;
const P = styled.p`
  color: #222;
  margin-top: -20px;
  background-color: rgba(244, 244, 255, 0.4);
  font-family: var(--heading-font-family);
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
  border-radius: 2px;
  padding: 3px 25px 0px;
`;
export default ProfilePage;
