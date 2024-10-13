import { Link } from "react-router-dom";

import ChevronRightIcon from "../../icons/ChevronRightIcon";
import "./animatedShapesStyles.css";

const AnimatedShapes = () => {
  return (
    <div className="absolute inset-0 overflow-hidden">
      {/* Circles */}
      <div className="circle circle1 bg-K-ASCENT" />
      <div className="circle circle2 bg-white" />
      <div className="circle circle3 bg-white/30" />
      {/* Lines */}
      <div className="line line1 border border-K-ASCENT/30" />
      <div className="line line2 border border-white/30" />
    </div>
  );
};

export default function HomeSection() {
  return (
    <div className="relative bg-black text-white min-h-screen flex items-center justify-center overflow-hidden">
      <AnimatedShapes />
      <div className="relative text-center p-8 bg-black/30 rounded-lg shadow-lg z-10">
        <h1 className="text-4xl font-bold mb-4 animate-fade-in">
          Welcome to My Portfolio
        </h1>
        <p className="text-lg mb-6 animate-fade-in delay-150">
          Hello! I’m Bhavesh Verma, a passionate web developer with a knack for
          creating stunning and functional websites.
        </p>
        <p className="mb-8 animate-fade-in delay-300">
          Explore my projects and skills, and feel free to reach out if you’d
          like to collaborate or just say hello!
        </p>
        <Link
          to="/portfolio"
          className="group inline-block bg-white text-black py-2 px-4 rounded shadow hover:bg-gray-200 transition duration-300"
        >
          <div className=" h-6 overflow-hidden">
            <div className="flex flex-col items-center gap-8 h-20 group-hover:translate-y-[-3.5rem] transition-transform">
              <p>View My Work</p>
              <ChevronRightIcon />
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
}
