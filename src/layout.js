import { Outlet } from "react-router-dom";

import SocialLinks from "./components/SocialLinks";
import SectionTiles from "./components/SectionTiles";

export default function Layout() {
  return (
    <div className="font-semibold w-[100vw] max-h-[2px]">
      <div className="w-full h-full flex flex-col justify-between">
        <SectionTiles></SectionTiles>
        <Outlet />
        <div
          style={{ backgroundColor: "rgba(255, 255, 255 , 0.15)" }}
          className="p-6 md:p-12"
        >
          <p className="pb-4 text-2xl">Links</p>
          <SocialLinks></SocialLinks>
        </div>
      </div>
    </div>
  );
}
