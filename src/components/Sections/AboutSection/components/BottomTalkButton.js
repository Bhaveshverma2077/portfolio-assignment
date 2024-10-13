import { Link } from "react-router-dom";
import CoffeeCupIcon from "../../../icons/CoffeeCupIcon";

const BottomTalkButton = () => {
  return (
    <div className="flex justify-start md:hidden py-2">
      <Link
        to={"/contact"}
        className={`flex hover:bg-K-ASCENT text-K-ASCENT hover:text-black transition-colors duration-300 p-2 rounded-lg gap-4 justify-start items-center`}
      >
        <p className="font-normal">{"Let's Talk"}</p>
        <div className="bg-K-ASCENT w-8 h-8 rounded-full flex justify-center items-center">
          <CoffeeCupIcon></CoffeeCupIcon>
        </div>
      </Link>
    </div>
  );
};

export default BottomTalkButton;
