import { StyledHomepage, Profile, Elipse, Background } from "./styles";
import darkicon from "../../assets/ecology-maps-and-location-svgrepo-com 1.svg"
import profile from "../../assets/blank-profile-picture-973460.svg"
import logout from "../../assets/Exit_1_.svg"
import addmaterial from "../../assets/Group.svg"
import lupapesquisa from "../../assets/Group(1).svg"
import elipse from "../../assets/Ellipse 1.svg"
import background from "../../assets/Rectangle 39.svg"

const Dashboard = () => {
  return (
    <>
      <StyledHomepage>
        <Elipse src={elipse} alt="imagem da elipse verde do fundo" />
          <Background src={background} alt="fundo preto" />
        <main>
          <nav className="home-nav">
            <div className="logo">
              <img src = { darkicon } alt="imagem da logo em modo escuro da ecompany friendly" />
              <h1>eCOMPANY friendly</h1>
            </div>
            <div>
              <Profile src = { profile } alt="imagem do perfil do usuário logado" ></Profile>
              <h2>Nicolly Alves</h2>
              <img src = { logout } alt="imagem para fazer logout na conta" />
            </div>
            <div>
              <div>
                <input type="text" />
                <img src={lupapesquisa} alt="imagem da lupa de pesquisa para filtrar material" />
              </div>
              
                <img src={addmaterial} alt="imagem para publicar novo material" />
            </div>
          </nav>
        </main>
      </StyledHomepage>
    </>
  );
};

export default Dashboard;
