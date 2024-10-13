import SectionTile from "./SectionTile";

const SectionTiles = () => {
  return (
    <div className="flex sticky z-20 top-0">
      <div className="border-x-4 border-b-4 h-8 w-[16rem] border-K-BLACK">
        <SectionTile name={"Home"} href={"/"}></SectionTile>
      </div>
      <div className="border-b-4 h-8 w-[16rem] border-K-BLACK">
        <SectionTile name={"ABOUT ME"} href={"/about"}></SectionTile>
      </div>
      <div className="border-r-4 border-b-4 h-8 w-[16rem] border-K-BLACK">
        <SectionTile name={"PORTFOLIO"} href={"/portfolio"}></SectionTile>
      </div>
      <div className="border-r-4 border-b-4 h-8 w-[16rem] border-K-BLACK">
        <SectionTile name={"CONTACT"} href={"/contact"}></SectionTile>
      </div>
    </div>
  );
};

export default SectionTiles;
