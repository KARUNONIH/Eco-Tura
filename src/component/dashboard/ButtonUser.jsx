const ButtonUser = ({background, text, icon, textColor}) => {
  
  return (
    <button className={`flex-1 ${background} ${textColor} w-36  gap-4 shadow-md shadow-gray-800 flex items-center justify-center`}>
      <section className="text-2xl">{icon}</section>
      <p className="text-lg font-semibold">{text}</p>
    </button>
  );
};

export default ButtonUser;
