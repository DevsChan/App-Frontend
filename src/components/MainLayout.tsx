import Body from "./body/Body";

const MainLayout = () => {
  return (
    <div className="flex w-full justify-between gap-10 max-w-[1920px] mx-auto">
      <div className="w-72 h-screen bg-[#0E0E0E]">
        {
          //chuchucpoookkie
        }
      </div>
      <div className="w-[1200px] pt-8 pr-8 grid grid-cols-8 gap-10 h-screen">
        <div className="col-span-6 h-full">
          {
            < Body />
          }
        </div>
        <div className="col-span-2 h-full">
          {
            //matrix
          }
        </div>
      </div>
    </div>
  );
};

export default MainLayout;
