import { MdLightMode } from "react-icons/md";
import { MdPhoneInTalk } from "react-icons/md";
import { FaLaptopCode } from "react-icons/fa";
import { IoMdHome } from "react-icons/io";
import { MdSchool } from "react-icons/md";
import { MdWork } from "react-icons/md";
import { Tooltip } from "@mui/material";

const RightsideBar = () => {
  return (
    <div className="w-28 bg-white   flex  items-center flex-col">
      <div className="w-12 h-12   text-white bg-yellow-400 cursor-pointer flex  items-center justify-center rounded-full  mt-20  text-3xl">
        <MdLightMode />
      </div>

      <div className="w-16 mt-24  text-2xl text-slate-500 flex flex-col items-center gap-14 ">
        <Tooltip title="Home" placement="top" arrow>
          <div className="w-10 h-10 rounded-full bg-gray-100 cursor-pointer  hover:bg-yellow-300 hover:text-black flex justify-center items-center">
            <IoMdHome />
          </div>
        </Tooltip>

        <Tooltip title="Experience" placement="top" arrow>
          <div className="w-10 h-10 rounded-full bg-gray-100 cursor-pointer hover:bg-yellow-300 hover:text-black flex  justify-center items-center">
            <MdSchool />
          </div>
        </Tooltip>
        <Tooltip title="Eduction" placement="top" arrow>
          <div className="w-10 h-10 rounded-full bg-gray-100 cursor-pointer hover:bg-yellow-300 hover:text-black  flex  justify-center items-center">
            <MdWork />
          </div>
        </Tooltip>
        <Tooltip title="Project" placement="top" arrow>
          <div className="w-10 h-10 rounded-full bg-gray-100  cursor-pointer  hover:bg-yellow-300 hover:text-black       flex  justify-center items-center">
            <FaLaptopCode />
          </div>
        </Tooltip>
        <Tooltip title="Contact Us" placement="top" arrow>
          <div className="w-10 h-10 rounded-full bg-gray-100  cursor-pointer  hover:bg-yellow-300 hover:text-black       flex  justify-center items-center">
            <MdPhoneInTalk />
          </div>
        </Tooltip>
      </div>
    </div>
  );
};

export default RightsideBar;
