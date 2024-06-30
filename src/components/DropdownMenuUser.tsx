import addUserIcon from "../assets/icons/add_user_icon.svg";
import dummyUser from "../assets/user_dummy.svg";
import dummyUser2 from "../assets/user_dummy2.svg";
import "./dropdownMenuUser.css";

const DropdownMenuUser = () => {
  return (
    <div className="flex flex-col gap-6 dropDownUser font-workSans text-white bg-neutral-700">
      <div className="flex flex-col gap-4">
        <button className="flex flex-row items-center gap-4">
          <img src={dummyUser} alt="dummyUser" />
          <p className="opacity-80">Leslie Alexander</p>
        </button>
        <button className="flex flex-row items-center gap-4">
          <img src={dummyUser2} alt="dummyUser2" />
          <p className="opacity-80">Ronald Richards</p>
        </button>
        <button className="flex flex-row items-center gap-4">
          <div className="flex justify-center bg-neutral-500 rounded-full">
            <img className="p-[17px]" src={addUserIcon} alt="addUserIcon" />
          </div>
          <p className="opacity-80">Criar perfil</p>
        </button>
      </div>
      <ul className="flex flex-col gap-6 items-start">
        <li>Editar perfis</li>
        <li>Preferências</li>
        <li className="text-primary-100 font-bold">Minha assinatura</li>
        <li>Minha conta</li>
        <li>Ajuda</li>
        <li>Sair</li>
      </ul>
    </div>
  );
};

export default DropdownMenuUser;
