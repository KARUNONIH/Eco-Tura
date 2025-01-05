const UserInformation = () => {
  return (
    <div className="">
      <section className="relative">
        <div className="absolute ml-[10px] mt-[10px] flex aspect-square w-[130px] items-center justify-center rounded-full bg-blue-900">
          <section className="text-center text-white">
            <p className="text-6xl">1</p>
            <p className="text-2xl">LV</p>
          </section>
        </div>
        <div className="aspect-square w-[150px] rounded-full" style={{ backgroundImage: "conic-gradient(white 0% 90%, transparent 90% 100%)" }}></div>
      </section>
      <section className="text-white text-lg font-bold mt-6">
        <p>Hi Hasan Faqih,</p>
        <p>Welcome to Eco Tura Education!</p>
      </section>
    </div>
  );
};

export default UserInformation;
