const Account = () => {
  return (
    <div className="bg-neutral-600">
      <section className="h-screen flex flex-col items-center px-4 md:px-0">
        <div className="flex flex-col gap-4 font-lato text-white container">
          <h1 className="font-bold text-[40px]">Minhas listas</h1>
          <p className="font-normal opacity-60 text-lg">
            Listas criadas por você de acordo com seus gostos
          </p>
        </div>
      </section>
    </div>
  );
};

export default Account;
