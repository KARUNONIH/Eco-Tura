const ButtonFeature = ({background, className, width, heigth}) => {
  return (
    <div className={`${background} ${className} ${width} ${heigth} shadow-md shadow-gray-800 cursor-pointer`}>

    </div>
  );
};

export default ButtonFeature;