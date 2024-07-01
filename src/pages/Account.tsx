import AccountCarousels from "../components/AccountCarousels";
import Header from "../components/Header";

const Account = () => {
  return (
    <div className="bg-neutral-600">
      <Header />
      <section className="h-full flex flex-col items-center px-4 md:px-0 gap-8 pb-14">
        <div className="flex flex-col gap-4 font-lato text-white container">
          <h1 className="font-bold text-[40px]">Minhas listas</h1>
          <p className="font-normal opacity-60 text-lg">
            Listas criadas por você de acordo com seus gostos
          </p>
        </div>
        <AccountCarousels />
      </section>
    </div>
  );
};

export default Account;
