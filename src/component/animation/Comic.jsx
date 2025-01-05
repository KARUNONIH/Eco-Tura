import { useEffect, useState } from "react";
import { IoPlaySkipForward } from "react-icons/io5";

const Comic = ({ onComplete }) => {
  const [activeSection, setActiveSection] = useState(0);
  const [opacity, setOpacity] = useState([0, 0, 0]);
  const [mainOpacity, setMainOpacity] = useState(0); // State untuk opacity div utama

  useEffect(() => {
    // Fade-in untuk div utama (bg-white) pertama kali dibuka
    const fadeInTimeout = setTimeout(() => {
      setMainOpacity(1); // Setelah 1 detik, set opacity div utama menjadi 1
    }, 1000); // Durasi fade-in utama adalah 1 detik

    const sectionsCount = 3;
    let currentSection = 0;
    let isFading = false;

    const updateSections = () => {
      if (currentSection === 0 && !isFading) {
        setOpacity([1, 0, 0]); // Hanya section 1 yang tampil
      } else if (currentSection === 1 && !isFading) {
        setOpacity([1, 1, 0]); // Section 1 dan 2 tampil
      } else if (currentSection === 2 && !isFading) {
        setOpacity([1, 1, 1]); // Semua section tampil
      } else if (currentSection === 3 && !isFading) {
        setOpacity([0, 1, 1]); // Section 1 menghilang, Section 2 dan 3 tetap
        isFading = true;
      } else if (currentSection === 4 && isFading) {
        setOpacity([1, 0, 0]); // Section 2 menghilang, kembali ke section 1
        isFading = false;
      } else if (currentSection === 5 && !isFading) {
        setOpacity([1, 1, 0]); // Section 1 dan 2 kembali tampil
      }

      currentSection = (currentSection + 1) % 6; // Siklus berulang setiap 6 langkah
    };

    const interval = setInterval(updateSections, 1000); // Setiap 2 detik update

    return () => {
      clearInterval(interval);
      clearTimeout(fadeInTimeout); // Bersihkan timeout jika komponen unmount
    };
  }, []);

  return (
    <div className="bg-black h-screen w-screen flex justify-center items-center">
      {/* Div utama dengan efek fade-in */}
      <div
        className={`bg-white h-[90%] aspect-video flex flex-col gap-6 relative transition-opacity duration-1000`}
        style={{ opacity: mainOpacity }} // Terapkan opacity untuk efek fade-in utama
      >
        <button
          className="absolute z-10 bottom-4 right-4 bg-black w-14 h-14 flex justify-center items-center rounded-full cursor-pointer"
          onClick={onComplete}
        >
          <IoPlaySkipForward className="text-white text-2xl" />
        </button>

        {/* Section 1 */}
        <section
          className={`h-1/2 bg-gray-600 transition-opacity duration-1000 ${
            opacity[0] === 1 ? "opacity-100" : "opacity-0"
          }`}
        ></section>

        <div className="flex-1 flex gap-6">
          {/* Section 2 */}
          <section
            className={`bg-gray-600 flex-1 transition-opacity duration-1000 ${
              opacity[1] === 1 ? "opacity-100" : "opacity-0"
            }`}
          ></section>

          {/* Section 3 */}
          <section
            className={`bg-gray-600 flex-1 transition-opacity duration-1000 ${
              opacity[2] === 1 ? "opacity-100" : "opacity-0"
            }`}
          ></section>
        </div>
      </div>
    </div>
  );
};

export default Comic;
