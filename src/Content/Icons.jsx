import { FaFacebookF } from "react-icons/fa6";
  import { FaTwitter } from "react-icons/fa6";
  import { FaInstagram } from "react-icons/fa";
  import { IoBasketballOutline } from "react-icons/io5";
  import { FaEarthAfrica } from "react-icons/fa6";
import { TbBrandTelegram } from "react-icons/tb";

export const Icons = ({ type, color = "#000", size = 24 }) => {
  const iconMap = {
    FACEBOOK: <FaFacebookF color={color} size={size} />,
    TWITTER: <FaTwitter color={color} size={size} />,
    INSTAGRAM: <FaInstagram color={color} size={size} />,
    BALL: <IoBasketballOutline color={color} size={size} />,
    EARTH:<FaEarthAfrica color={color} size={size}/>,
    TELEGRAM:<TbBrandTelegram color={color} size={size}/>
  };

  return <div>{iconMap[type] || null}</div>;
};

