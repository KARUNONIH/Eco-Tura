import ButtonFeature from "../component/dashboard/ButtonFeature";
import ButtonKnowEcoTura from "../component/dashboard/ButtonKnowEcoTura";
import ButtonUser from "../component/dashboard/ButtonUser";
import Navbar from "../component/dashboard/Navbar";
import News from "../component/dashboard/News";
import UserInformation from "../component/dashboard/UserInformation";
import { FaUser } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

const Dashboard = () => {
  return (
    <div className="h-screen w-screen p-6" style={{ backgroundImage: "url('./image/Background-AppLoader.png')" }}>
      <Navbar />
      <div className="mt-16 flex justify-between">
        <section className="flex flex-col gap-12">
          <ButtonKnowEcoTura />
          <section className="ml-16">
            <UserInformation />
          </section>
          <div className="flex -skew-y-3 gap-3">
            <News />
            <section className="flex h-[calc(100%-17px)] flex-col gap-3">
              <ButtonUser icon={<FaUser />} text={"Login"} textColor={"text-white"} background={"bg-blue-800"} />
              <ButtonUser icon={<FaInfoCircle />} text={"Info"} textColor={"text-blue-800"} background={"bg-white"} />
            </section>
          </div>
        </section>
        <div className="">
          <section className="flex flex-col gap-5  skew-y-3">
            <section className="flex justify-end">
              <ButtonFeature background={"bg-white/80"} width={"w-[600px]"} heigth={"h-[150px]"} />
            </section>
            <section className="flex w-[700px] gap-5">
              <ButtonFeature background={"bg-blue-600/80"} className={"flex-1"} heigth={"h-[120px]"} />
              <ButtonFeature background={"bg-blue-600/80"} className={"flex-1"} heigth={"h-[120px]"} />
              <ButtonFeature background={"bg-blue-600/80"} className={"flex-1"} heigth={"h-[120px]"} />
            </section>
            <section className="flex justify-end">
              <ButtonFeature background={"bg-white/80"} width={"w-[600px]"} heigth={"h-[150px]"} />
            </section>
          </section>
          <p className="text-right mt-10 text-white uppercase font-bold text-6xl mr-14">eco tura</p>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
