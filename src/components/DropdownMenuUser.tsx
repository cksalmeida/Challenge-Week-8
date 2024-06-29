import addUserIcon from "../assets/icons/add_user_icon.svg";
import dummyUser from "../assets/user_dummy.svg";
import "./dropdownMenuUser.css";

const DropdownMenuUser = () => {
  return (
    <div className="flex flex-col gap-6 dropDownUser font-workSans text-black">
      <div className="flex flex-col gap-4">
        <button className="flex flex-row items-center gap-4">
          <img src={dummyUser} alt="dummyUser" />
          <p>Leslie Alexander</p>
        </button>
        <button className="flex flex-row items-center gap-4">
          <img src={addUserIcon} alt="addUserIcon" />
          <p>Criar perfil</p>
        </button>
      </div>
      <ul className="flex flex-col gap-6">
        <li>Editar perfis</li>
        <li>Preferências</li>
        <li>Minha assinatura</li>
        <li>Minha conta</li>
        <li>Ajuda</li>
        <li>Sair</li>
      </ul>
    </div>
  );
};

export default DropdownMenuUser;
