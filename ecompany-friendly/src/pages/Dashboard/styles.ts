import styled from "styled-components";

export const StyledHomepage = styled.section`
  background-color: var(--primary);
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  text-align: center;
  z-index: 1;

  main {
    display: flex;
    z-index: 3;
  }

  h2 {
    display: flex;
  }

  .home-nav {
    height: 23vh;
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-evenly;
    gap: 5px;
    align-items: center;
    box-shadow: 25px 1px 1px 0px var(--white);
  }

  .logo {
    color: var(--secondary);
    display: flex;
    flex-direction: row;
    gap: 20px;
  }
`;

export const Profile = styled.img`
  width: 40px; 
  height: 40px;
  border-radius: 15px;
`
export const Elipse = styled.img`
  width: 100%;
  height: 70%;
`
export const Background = styled.img`
    display: flex;
    width: 90vw;
    justify-content: center;
    align-items: center;
    height: 100vh;
    background-color: #000000;
    opacity: 0.45;
    position: absolute;
    margin: 0 auto;
    left: 5%;
    margin-top: 30px;
    border-radius: 10px;
`
