import Image from "next/image";

type ButtonProps = {
  type: "submit";
  title: string;
  icon?: string;
  full?: boolean; 
  background: "purple" | "white" | "gray";
};

const Button = ({ type, title, icon, full, background }: ButtonProps) => {
  return (
    <button
      className={`flex items-center text-black gap-2 py-2 px-10  rounded-full border-2 font-medium border-gray-400 shadow-sm hover:border-gray-400 hover:font-bold  
      ${full && "w-full"} 
      ${background == "purple"&& "bg-purple-200 text-gray-600" }
      ${background == "white"&& "bg-white text-gray-600" }
      ${background == "gray"&& "bg-gray-300 text-gray-600" }
      `}
      type={type}
    >
      {icon && <Image src={icon} alt={title} width={24} height={24}></Image>}
      <label className="bold-16 whitespace-nowrap cursor-pointer">
        {title}
      </label>
    </button>
  );
};

export default Button;
