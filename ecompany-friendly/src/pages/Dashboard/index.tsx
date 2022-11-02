import { StyledHomepage } from "./styles";

const Dashboard = () => {
  return (
    <>
      <StyledHomepage>
        <nav className="home-nav">
          <div className="logo">
            <img src="../../../assets/darkIcon.png" alt="logo-icon" />
            <h1>eCOMPANY friendly</h1>
          </div>
          <div>
            <img src="" alt="imgUser" />
            <h2>Nicolly Alves</h2>
            <p>Logout icon</p>
          </div>
          <div>
            <input type="text" />
            <p>search icon</p>
            <p>+</p>
          </div>
        </nav>
      </StyledHomepage>
    </>
  );
};

export default Dashboard;
