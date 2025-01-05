import { IoSettings } from "react-icons/io5";
import { FaCircleInfo } from "react-icons/fa6";
import { TbCoinPoundFilled } from "react-icons/tb";

const Navbar = () => {
    function formatDate() {
        const now = new Date();
        return `${now.getFullYear()}-${String(now.getMonth() + 1).padStart(2, '0')}-${String(now.getDate()).padStart(2, '0')} ${String(now.getHours()).padStart(2, '0')}.${String(now.getMinutes()).padStart(2, '0')}`;
      }

  return (
    <div className="flex justify-between">
          <section className="flex text-white text-4xl gap-4">
              <IoSettings className="cursor-pointer"/>
              <FaCircleInfo className="cursor-pointer"/>
          </section>
          <section className="flex text-white items-center gap-4">
              <section className="flex items-center gap-1">
              <TbCoinPoundFilled className="text-2xl"/>
              <p className="text-xl font-bold">30.000</p>
              </section>
              <div className="w-[2px] h-1/2 bg-white"></div>
              <p className="font-medium">{ formatDate() }</p>
          </section>
    </div>
  );
};

export default Navbar;