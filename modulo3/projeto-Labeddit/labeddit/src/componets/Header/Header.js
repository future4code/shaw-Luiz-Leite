import { useNavigate } from "react-router-dom";
import logo from "../../assets/imgs/logo.svg";
import { goToFeedPage, goToLoginPage } from "../../Routes/cordinator";
import { HeaderContainer } from "./styled";

function Header({
  rightButtonText,
  setRightButtonText,
  showLeftButton,
  isDetails
}) {
  const navigate = useNavigate();
  const token = localStorage.getItem("token");

  const logout = () => {
    localStorage.removeItem("token");
  };

  const rightButtonAction = () => {
    if (token) {
      logout();
      setRightButtonText("Login");
      goToLoginPage(navigate);
    } else {
      goToLoginPage(navigate);
    }
  };

  return (
    <HeaderContainer isDetails={isDetails}>
      {showLeftButton && (
        <button onClick={() => goToFeedPage(navigate)}>Voltar</button>
      )}
      <div>
        <img src={logo} alt={"Imagem do logotipo"} />
        <button onClick={rightButtonAction}>{rightButtonText}</button>
      </div>
    </HeaderContainer>
  );
}

export default Header;
