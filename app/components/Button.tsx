import Image from "next/image";

type ButtonProps = {
  type: "submit";
  title: string;
  icon?: string;
  full?: boolean; 
  background: "blue" | "white" | "gray";
};

const Button = ({ type, title, icon, full, background }: ButtonProps) => {
  return (
    <button
      className={`flex items-center gap-2 py-2 px-10 rounded-full border-2  
      ${full && "w-full"} 
      ${background == "blue"&& "bg-blue-300" }
      ${background == "white"&& "bg-white" }
      ${background == "gray"&& "bg-gray-400" }
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
