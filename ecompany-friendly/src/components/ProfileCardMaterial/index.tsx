import trash from "../../assets/Trash.svg";
import pencil from "../../assets/Pencil.svg";
import background from "../../assets/Rectangle 39.svg";

const ProfileCardMaterial = () => {
    return  (
        <li className="card">
        <img src={background} alt="Imagem do produto" />
        <div className="card-options">
            <img src={pencil} alt="Botão editar anuncio" />
            <img src={trash} alt="Botão deletar anuncio" />
        </div>
    </li>
    )
}
export default ProfileCardMaterial;