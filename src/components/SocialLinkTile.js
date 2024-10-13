import { Link } from "react-router-dom";

const SocialLinkTile = ({ icon, name, text, href }) => {
  return (
    <div className="flex gap-6 items-center group">
      <Link to={href} className="flex items-center">
        <div className="h-8 w-8 rounded-full flex items-center justify-center">
          <div className="scale-[0.2]">{icon}</div>
        </div>
        <p className="text-sm">{name}</p>
      </Link>
      <p className="text-K-ASCENT text-[0.8rem] hidden md:group-hover:block">
        {text ?? href}
      </p>
    </div>
  );
};
export default SocialLinkTile;
