import { Link } from "react-router-dom";
import CoffeeCupIcon from "../../../icons/CoffeeCupIcon";

const TalkButton = () => {
  return (
    <Link
      to={"/contact"}
      className={`hidden md:flex absolute z-10 hover:bg-K-ASCENT hover:text-black transition-colors duration-300 p-4 rounded-tr-3xl top-0 right-0 gap-4 items-center`}
    >
      <p className="font-normal">{"Let's Talk"}</p>
      <div className="bg-K-ASCENT w-8 h-8 rounded-full flex justify-center items-center">
        <CoffeeCupIcon></CoffeeCupIcon>
      </div>
    </Link>
  );
};
export default TalkButton;
