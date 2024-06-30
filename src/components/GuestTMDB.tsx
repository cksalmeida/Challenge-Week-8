import { getGuestSession } from "../apiService/apiService";

const GuestTMDB = () => {
  const handleOnClickGuest = async () => {
    const sessionGuest = await getGuestSession();
    localStorage.setItem("guest_session_id", sessionGuest.session_id);
    window.location.href = "http://localhost:5173/home";
  };
  return <span onClick={handleOnClickGuest}>Acesse como convidado</span>;
};

export default GuestTMDB;
