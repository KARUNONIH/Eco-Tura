import { useEffect, useState } from "react";

const AppLoader = ({ onComplete }) => {

  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((prevProgress) => {
        if (prevProgress >= 100) {
          clearInterval(interval);
          if (onComplete) onComplete(); 
          return 100;
        }
        return prevProgress + 5; 
      });
    }, 200); 

    return () => clearInterval(interval);
  }, [onComplete]);

  return (
    <div className="fixed flex h-screen w-screen items-center justify-center bg-cover" style={{ backgroundImage: "url('./image/Background-AppLoader.png')" }}>
      <div className="h-max w-max p-4 text-center font-sans text-white">
        <h1 className="text-6xl font-semibold">Eco Tura</h1>
        <img src="./image/logo.png" alt="" className="mx-auto my-5 h-40" />
        <h2 className="text-2xl font-bold">Welcome to our website!</h2>
        <p className="mb-8 mt-1 text-lg">EcoTura: Your source for learning about sustainability and environmental care.</p>
        <div className="w-full rounded-full bg-gray-200 dark:bg-gray-700">
          <div className={`rounded-full bg-gradient-to-r from-blue-800 to-blue-600 p-0.5 text-center text-xs font-medium leading-none text-blue-100 transition-all ease-in-out`} style={{ width: `${progress}%`}}>{progress}%</div>
        </div>
      </div>
    </div>
  );
};

export default AppLoader;
