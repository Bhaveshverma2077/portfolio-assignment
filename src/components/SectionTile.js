import { NavLink } from "react-router-dom";

const SectionTile = ({ name, href }) => {
  return (
    <NavLink
      to={href}
      className={({ isActive }) =>
        `${
          isActive ? "bg-K-ASCENT" : "bg-black"
        } h-full w-full flex justify-center items-center`
      }
    >
      {({ isActive }) => (
        <p
          className={`text-[0.7rem] text-nowrap font-semibold ${
            isActive ? "text-black" : "text-white"
          }`}
        >
          {name}
        </p>
      )}
    </NavLink>
  );
};

export default SectionTile;
